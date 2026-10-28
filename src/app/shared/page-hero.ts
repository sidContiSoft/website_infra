import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-hero',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative isolate overflow-hidden bg-navy-950 text-white">
      <div class="tech-grid absolute inset-0 opacity-70"></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_0%,rgba(10,42,74,0.25),rgba(4,17,31,0.92))]"
      ></div>
      @if (image()) {
        <div class="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <img
            [src]="image()"
            alt=""
            aria-hidden="true"
            class="h-full w-full object-cover opacity-35"
            loading="eager"
          />
          <div
            class="absolute inset-0 bg-[linear-gradient(90deg,#04111f_0%,rgba(4,17,31,0.55)_55%,rgba(4,17,31,0.15)_100%)]"
          ></div>
        </div>
      }
      <div class="container-x relative py-14 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" class="mb-8">
          <ol class="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/45">
            <li><a routerLink="/" class="transition-colors hover:text-gold-300">Home</a></li>
            <li aria-hidden="true" class="text-white/25">/</li>
            <li class="text-gold-300">{{ crumb() }}</li>
          </ol>
        </nav>
        <div class="max-w-4xl">
          <p class="eyebrow eyebrow-light">{{ eyebrow() }}</p>
          <h1
            class="display mt-4 text-[2.5rem] leading-[0.92] sm:text-[3.25rem] lg:text-[4rem]"
            style="color:#f8fafc!important;text-shadow:0 3px 24px rgba(0,0,0,.8)"
          >
            {{ title() }}
          </h1>
          @if (subtitle()) {
            <p class="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-white/65 sm:text-[1.05rem]">
              {{ subtitle() }}
            </p>
          }
          <ng-content />
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-gold-500/70 via-white/10 to-transparent"></div>
    </section>
  `,
})
export class PageHero {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input('');
  readonly crumb = input.required<string>();
  readonly image = input('');
}
