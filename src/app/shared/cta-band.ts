import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../core/site.data';
import { Icon } from './icon';

@Component({
  selector: 'app-cta-band',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative isolate overflow-hidden bg-navy-900">
      @if (image()) {
        <img
          [src]="image()"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
      }
      <div class="absolute inset-0 bg-[linear-gradient(100deg,#04111f_0%,rgba(7,30,51,0.92)_55%,rgba(10,42,74,0.75)_100%)]"></div>
      <div class="tech-grid absolute inset-0 opacity-50"></div>
      <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"></div>

      <div class="container-x relative py-14 sm:py-16">
        <div class="grid items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <p class="eyebrow eyebrow-light">Start a project</p>
            <h2 class="display mt-4 text-[2.1rem] leading-[0.95] text-white sm:text-[2.7rem]">
              {{ title() }}
            </h2>
            <p class="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/65">
              {{ description() }}
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a class="btn btn-gold" routerLink="/contact">
              Request a quote
              <app-icon name="arrow-right" [size]="16" />
            </a>
            <a class="btn btn-outline-light" [href]="phoneHref">
              <app-icon name="phone" [size]="16" />
              {{ phoneLabel }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaBand {
  readonly title = input('Have drawings? We can price your building.');
  readonly description = input(
    'Share your layout, span and site details. Our engineering team will respond with framing options, panel specifications and a clear commercial offer.',
  );
  readonly image = input('');

  protected readonly phoneLabel = COMPANY.phones[0].label;
  protected readonly phoneHref = COMPANY.phones[0].href;
}
