import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="align() === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
      @if (eyebrow()) {
        <p class="eyebrow" [class.eyebrow-light]="theme() === 'dark'">{{ eyebrow() }}</p>
      }
      <h2
        class="display mt-4 text-[2.15rem] leading-[0.95] sm:text-[2.75rem] lg:text-[3.15rem]"
        [class.text-white]="theme() === 'dark'"
        [class.text-navy-900]="theme() === 'light'"
      >
        {{ title() }}
      </h2>
      @if (description()) {
        <p
          class="mt-5 text-[0.98rem] leading-relaxed"
          [class.text-white/70]="theme() === 'dark'"
          [class.text-steel-600]="theme() === 'light'"
        >
          {{ description() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly align = input<'left' | 'center'>('left');
  readonly theme = input<'light' | 'dark'>('light');
}
