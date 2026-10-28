import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { COMPANY, FAQS, OFFICES, SERVICE_FORM_OPTIONS } from '../../core/site.data';
import { API_BASE_URL } from '../../core/api.config';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { RevealDirective } from '../../shared/reveal.directive';

interface PreparedEnquiry {
  whatsapp: string;
  summary: string;
}

const MAX_FILE_BYTES = 9 * 1024 * 1024;
const ACCEPTED_EXTENSIONS = [
  'pdf',
  'dwg',
  'dxf',
  'jpg',
  'jpeg',
  'png',
  'doc',
  'docx',
  'xls',
  'xlsx',
];

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, PageHero, Icon, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly company = COMPANY;
  protected readonly offices = OFFICES;
  protected readonly serviceOptions = SERVICE_FORM_OPTIONS;
  protected readonly faqs = FAQS;

  protected readonly selectedFile = signal<File | null>(null);
  protected readonly fileError = signal('');
  protected readonly dragActive = signal(false);
  protected readonly submitted = signal(false);
  protected readonly prepared = signal<PreparedEnquiry | null>(null);
  protected readonly activeOffice = signal(0);
  protected readonly sending = signal(false);
  protected readonly sendError = signal('');
  protected readonly sent = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+()\d\s-]{8,18}$/)]],
    service: ['', Validators.required],
    location: [''],
    area: [''],
    details: ['', [Validators.required, Validators.minLength(20)]],
    consent: [false, Validators.requiredTrue],
  });

  protected readonly mapSrc = computed<SafeResourceUrl>(() => {
    const office = this.offices[this.activeOffice()];
    const url = `https://maps.google.com/maps?q=${encodeURIComponent(
      office.mapQuery,
    )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });

  protected readonly openOffice = computed(() => this.offices[this.activeOffice()]);

  protected readonly directionsLink = computed(() => {
    const office = this.offices[this.activeOffice()];
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`;
  });

  protected readonly preparedFileSize = computed(() => {
    const file = this.selectedFile();
    return file ? this.formatSize(file.size) : '';
  });

  protected showError(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || this.submitted());
  }

  protected onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.setFile(input.files[0]);
    }
  }

  protected onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragActive.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.setFile(file);
    }
  }

  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragActive.set(true);
  }

  protected onDragLeave(): void {
    this.dragActive.set(false);
  }

  protected removeFile(): void {
    this.selectedFile.set(null);
    this.fileError.set('');
    const input = document.getElementById('drawing') as HTMLInputElement | null;
    if (input) input.value = '';
  }

  protected selectOffice(index: number): void {
    this.activeOffice.set(index);
  }

  protected async onSubmit(): Promise<void> {
    this.submitted.set(true);

    if (this.form.invalid) {
      window.setTimeout(() => {
        const firstInvalid = document.querySelector<HTMLElement>('.field-invalid');
        firstInvalid?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid?.focus({ preventScroll: true });
      }, 0);
      return;
    }

    this.sending.set(true);
    this.sendError.set('');
    const value = this.form.getRawValue();
    const file = this.selectedFile();

    const lines = [
      'New enquiry from supremeinfraprojects.com',
      '',
      `Name: ${value.name}`,
      value.company ? `Company: ${value.company}` : '',
      `Email: ${value.email}`,
      `Phone: ${value.phone}`,
      `Service required: ${value.service}`,
      value.location ? `Project location: ${value.location}` : '',
      value.area ? `Approx. area: ${value.area}` : '',
      file ? `Drawing attached: ${file.name} (${this.formatSize(file.size)})` : '',
      '',
      'Project details:',
      value.details,
      '',
    ].filter(Boolean);

    const summary = lines.join('\n');
    const whatsapp = `${this.company.whatsapp}?text=${encodeURIComponent(summary)}`;

    try {
      const payload = new FormData();
      Object.entries(value).forEach(([key, fieldValue]) => payload.append(key, String(fieldValue)));
      if (file) payload.append('attachment', file, file.name);
      const response = await fetch(`${API_BASE_URL}/enquiry`, {
        method: 'POST',
        body: payload,
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || 'We could not send your enquiry. Please try again.');
      }
      this.sent.set(true);
      this.prepared.set({ whatsapp, summary });
    } catch (error) {
      this.sendError.set(
        error instanceof Error
          ? error.message
          : 'We could not send your enquiry. Please try again.',
      );
    } finally {
      this.sending.set(false);
    }

    window.setTimeout(() => {
      document
        .getElementById('enquiry-confirmation')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  }

  protected downloadEnquiry(): void {
    const enquiry = this.prepared();
    if (!enquiry) {
      return;
    }
    const blob = new Blob([enquiry.summary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'supreme-enquiry.txt';
    link.click();
    URL.revokeObjectURL(url);
  }

  protected resetForm(): void {
    this.form.reset();
    this.selectedFile.set(null);
    this.fileError.set('');
    const input = document.getElementById('drawing') as HTMLInputElement | null;
    if (input) input.value = '';
    this.submitted.set(false);
    this.prepared.set(null);
    this.sent.set(false);
    this.sendError.set('');
  }

  protected formatSize(bytes: number): string {
    if (bytes < 1024) {
      return `${bytes} B`;
    }
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(0)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private setFile(file: File): void {
    const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!ACCEPTED_EXTENSIONS.includes(extension)) {
      this.selectedFile.set(null);
      this.fileError.set('Please attach a PDF, DWG, DXF, image, Word or Excel file.');
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      this.selectedFile.set(null);
      this.fileError.set('That file is larger than 9 MB. Please share a download link instead.');
      return;
    }
    this.fileError.set('');
    this.selectedFile.set(file);
  }
}
