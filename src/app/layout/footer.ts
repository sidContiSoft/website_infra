import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, OFFICES, SERVICES } from '../core/site.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="relative isolate overflow-hidden bg-navy-950 text-white">
      <div class="tech-grid absolute inset-0 opacity-40"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></div>

      <div class="container-x relative">
        <div class="grid gap-10 py-14 lg:grid-cols-[1.35fr_0.8fr_1fr_1.25fr] lg:gap-8 lg:py-16">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-3">
              <img
                src="assets/img/logo.webp"
                alt="Supreme Electromech Power & Infra"
                class="h-16 w-auto rounded-sm bg-white p-1.5"
                width="64"
                height="64"
                loading="lazy"
              />
              <div class="leading-none">
                <p class="display text-lg tracking-[0.06em] text-white">Supreme</p>
                <p class="mt-1.5 text-[0.58rem] font-semibold uppercase leading-tight tracking-[0.18em] text-gold-300">
                  Electromech Power<br />&amp; Infra
                </p>
              </div>
            </div>
            <p class="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              {{ company.tagline }}. A total solutions company delivering steel buildings,
              envelopes and infrastructure with precision engineering at its core.
            </p>
            <p class="mt-4 border-l border-gold-500/50 pl-3 text-[0.78rem] italic text-gold-200/80">
              “{{ company.slogan }}”
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a
                [href]="company.whatsapp"
                target="_blank"
                rel="noopener"
                class="btn btn-gold btn-sm"
              >
                <app-icon name="message" [size]="15" />
                WhatsApp us
              </a>
              <a [href]="company.phones[0].href" class="btn btn-outline-light btn-sm">
                <app-icon name="phone" [size]="15" />
                Call
              </a>
            </div>
          </div>

          <!-- Company -->
          <nav aria-label="Company">
            <h2 class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-400">Company</h2>
            <ul class="mt-4">
              <li><a routerLink="/" class="footer-link">Home</a></li>
              <li><a routerLink="/about" class="footer-link">About us</a></li>
              <li><a routerLink="/services" class="footer-link">Services &amp; solutions</a></li>
              <li><a routerLink="/technical" class="footer-link">Technical capabilities</a></li>
              <li><a routerLink="/projects" class="footer-link">Project gallery</a></li>
              <li><a routerLink="/contact" class="footer-link">Contact</a></li>
            </ul>
          </nav>

          <!-- Capabilities -->
          <nav aria-label="Capabilities">
            <h2 class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Capabilities
            </h2>
            <ul class="mt-4">
              @for (service of services; track service.id) {
                <li>
                  <a [routerLink]="['/services']" [fragment]="service.id" class="footer-link">
                    {{ service.short }}
                  </a>
                </li>
              }
            </ul>
          </nav>

          <!-- Contact -->
          <div>
            <h2 class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Reach us
            </h2>
            <ul class="mt-4 space-y-4 text-sm">
              <li class="flex gap-3">
                <app-icon name="phone" [size]="16" class="mt-0.5 text-gold-400" />
                <span class="space-y-1">
                  @for (phone of company.phones; track phone.href) {
                    <a [href]="phone.href" class="block text-white/70 transition-colors hover:text-white">
                      {{ phone.label }}
                    </a>
                  }
                </span>
              </li>
              <li class="flex gap-3">
                <app-icon name="mail" [size]="16" class="mt-0.5 text-gold-400" />
                <span class="space-y-1">
                  @for (email of company.emails; track email.href) {
                    <a
                      [href]="email.href"
                      class="block break-all text-white/70 transition-colors hover:text-white"
                    >
                      {{ email.label }}
                    </a>
                  }
                </span>
              </li>
              @for (office of offices; track office.id) {
                <li class="flex gap-3">
                  <app-icon name="map-pin" [size]="16" class="mt-0.5 text-gold-400" />
                  <span>
                    <span class="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                      {{ office.label }}
                    </span>
                    <span class="mt-1 block text-[0.8rem] leading-relaxed text-white/65">
                      {{ office.lines.join(' ') }}
                    </span>
                  </span>
                </li>
              }
            </ul>
          </div>
        </div>

        <div class="flex flex-col gap-4 border-t border-white/10 pb-24 pt-6 sm:flex-row sm:pb-6 sm:items-center sm:justify-between">
          <p class="text-[0.72rem] text-white/40">
            © {{ year }} {{ company.name }}. All rights reserved.
          </p>
          <div class="flex items-center gap-5 text-[0.68rem] uppercase tracking-[0.16em] text-white/35">
            <span>{{ company.website.label }}</span>
            <button
              type="button"
              class="flex items-center gap-1.5 text-white/50 transition-colors hover:text-gold-300"
              (click)="scrollTop()"
            >
              Back to top
              <app-icon name="chevron-down" [size]="12" class="rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly company = COMPANY;
  protected readonly offices = OFFICES;
  protected readonly services = SERVICES;
  protected readonly year = new Date().getFullYear();

  protected scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
