import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, HERO_SLIDES, STATS } from '../../core/site.data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="relative isolate overflow-hidden bg-navy-950 text-white"
      aria-roledescription="carousel"
      aria-label="Supreme Electromech capabilities"
      (mouseenter)="paused.set(true)"
      (mouseleave)="paused.set(false)"
      (focusin)="paused.set(true)"
      (focusout)="paused.set(false)"
    >
      <!-- Slides -->
      <div class="absolute inset-0">
        @for (slide of slides; track slide.image; let i = $index) {
          <img
            [src]="slide.image"
            [alt]="slide.alt"
            class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1100ms] ease-out"
            [class.opacity-100]="i === active()"
            [class.opacity-0]="i !== active()"
            [class.hero-zoom]="i === active()"
            [attr.loading]="i === 0 ? 'eager' : 'lazy'"
            [attr.fetchpriority]="i === 0 ? 'high' : 'low'"
            [attr.aria-hidden]="i !== active()"
          />
        }
        <div
          class="absolute inset-0 bg-[linear-gradient(95deg,rgba(4,17,31,0.97)_0%,rgba(5,22,39,0.94)_38%,rgba(5,22,39,0.62)_66%,rgba(4,17,31,0.5)_100%)]"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50"></div>
        <div class="tech-grid absolute inset-0 opacity-60"></div>
        <div class="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-navy-600/20 blur-3xl"></div>
      </div>

      <!-- Dimension rail (decorative) -->
      <div
        class="pointer-events-none absolute bottom-32 right-8 hidden items-center gap-3 text-[0.6rem] uppercase tracking-[0.22em] text-white/25 xl:flex"
        aria-hidden="true"
      >
        <span class="h-px w-16 bg-white/20"></span>
        <span>Clear span · 60 000 mm</span>
        <span class="h-px w-16 bg-white/20"></span>
      </div>

      <div class="container-x relative flex min-h-[92svh] flex-col justify-center pt-16 pb-10 sm:pt-20 lg:min-h-[88svh] lg:pt-24 lg:pb-12">
        <div class="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div class="max-w-3xl">
            <p class="flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-300">
              <span class="h-px w-8 bg-gold-400"></span>
              Precision tool engineering · Infrastructure
            </p>

            <h1 class="display mt-6 text-[2.85rem] leading-[0.9] text-[#f8fafc] [text-shadow:0_3px_24px_rgba(0,0,0,0.8)] sm:text-[4rem] lg:text-[4.9rem] xl:text-[5.4rem]">
              Engineering the<br class="hidden sm:block" />
              backbone of<br class="hidden sm:block" />
              <span class="relative text-gold-300">
                modern industry.
                <span class="absolute -bottom-2 left-0 h-[3px] w-24 bg-gold-500/70"></span>
              </span>
            </h1>

            <p class="mt-7 max-w-xl text-[0.97rem] leading-relaxed text-white/70 sm:text-[1.05rem]">
              Pre-engineered steel buildings, specialised roofing and insulated envelopes —
              designed in 3D, fabricated under inspection and delivered as one accountable
              scope.
            </p>

            <div class="mt-9 flex flex-wrap items-center gap-3">
              <a routerLink="/contact" class="btn btn-gold">
                Request a quote
                <app-icon name="arrow-right" [size]="16" />
              </a>
              <a routerLink="/projects" class="btn btn-outline-light">
                Explore our work
                <app-icon name="arrow-up-right" [size]="15" />
              </a>
            </div>

            <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-white/45">
              <span class="flex items-center gap-2">
                <app-icon name="check" [size]="14" class="text-gold-400" />
                AISC · MBMA · IS design codes
              </span>
              <span class="flex items-center gap-2">
                <app-icon name="check" [size]="14" class="text-gold-400" />
                In-house 3D detailing
              </span>
              <span class="flex items-center gap-2">
                <app-icon name="check" [size]="14" class="text-gold-400" />
                Pan-India execution
              </span>
            </div>
          </div>

          <!-- Capability card -->
          <aside class="relative hidden lg:block">
            <div
              class="absolute -left-4 -top-4 h-16 w-16 border-l-2 border-t-2 border-gold-400/70"
              aria-hidden="true"
            ></div>
            <div class="clip-corner border border-white/12 bg-white/[0.045] p-7 backdrop-blur-md">
              <div class="flex items-center justify-between">
                <p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                  Capability snapshot
                </p>
                <span class="flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.16em] text-gold-300">
                  <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400"></span>
                  Live scope
                </span>
              </div>

              <dl class="mt-6 divide-y divide-white/10">
                @for (stat of stats; track stat.label) {
                  <div class="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <dt class="text-[0.62rem] uppercase tracking-[0.16em] text-white/40">
                        {{ stat.label }}
                      </dt>
                      <dd class="mt-1 text-[0.7rem] text-white/55">{{ stat.detail }}</dd>
                    </div>
                    <dd class="display whitespace-nowrap text-2xl text-gold-300">{{ stat.value }}</dd>
                  </div>
                }
              </dl>

              <a
                [href]="company.phones[0].href"
                class="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/70 transition-colors hover:text-gold-300"
              >
                <span class="text-[0.68rem] uppercase tracking-[0.16em]">Talk to an engineer</span>
                <span class="flex items-center gap-2 font-medium">{{ company.phones[0].label }}</span>
              </a>
            </div>
          </aside>
        </div>

        <!-- Slider controls -->
        <div class="mt-12 flex flex-col gap-5 border-t border-white/12 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <div class="flex items-center gap-5">
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-gold-300 hover:text-gold-300"
                (click)="prev()"
                aria-label="Previous slide"
              >
                <app-icon name="chevron-left" [size]="18" />
              </button>
              <button
                type="button"
                class="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-gold-300 hover:text-gold-300"
                (click)="next()"
                aria-label="Next slide"
              >
                <app-icon name="chevron-right" [size]="18" />
              </button>
            </div>
            <div class="flex items-baseline gap-1 font-display text-sm tracking-[0.12em] text-white/50">
              <span class="text-xl text-gold-300">{{ currentNumber() }}</span>
              <span>/</span>
              <span>{{ pad(slides.length) }}</span>
            </div>
            <div class="hidden h-10 w-px bg-white/15 sm:block"></div>
            <p class="hidden max-w-md text-[0.78rem] leading-relaxed text-white/50 sm:block" aria-live="polite">
              {{ activeSlide().caption }}
            </p>
          </div>

          <div class="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            @for (slide of slides; track slide.image; let i = $index) {
              <button
                type="button"
                role="tab"
                class="group relative h-[3px] transition-all"
                [class.w-14]="i === active()"
                [class.w-7]="i !== active()"
                [attr.aria-selected]="i === active()"
                [attr.aria-label]="'Slide ' + (i + 1) + ': ' + slide.title"
                (click)="goTo(i)"
              >
                <span class="absolute inset-0 bg-white/20"></span>
                <span
                  class="absolute inset-0 origin-left bg-gold-400 transition-transform"
                  [style.transform]="i === active() ? 'scaleX(1)' : 'scaleX(0)'"
                ></span>
              </button>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero-zoom {
      animation: hero-zoom 9s ease-out both;
    }
    @keyframes hero-zoom {
      from {
        transform: scale(1.05);
      }
      to {
        transform: scale(1);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .hero-zoom {
        animation: none;
      }
    }
  `,
})
export class Hero implements OnInit, OnDestroy {
  protected readonly slides = HERO_SLIDES;
  protected readonly stats = STATS;
  protected readonly company = COMPANY;
  protected readonly active = signal(0);
  protected readonly paused = signal(false);

  private timer?: ReturnType<typeof setInterval>;
  private readonly destroyRef = inject(DestroyRef);

  protected readonly activeSlide = computed(() => this.slides[this.active()]);
  protected readonly currentNumber = computed(() => this.pad(this.active() + 1));

  ngOnInit(): void {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      this.start();
    }
    this.destroyRef.onDestroy(() => this.clear());
  }

  ngOnDestroy(): void {
    this.clear();
  }

  protected pad(value: number): string {
    return String(value).padStart(2, '0');
  }

  protected goTo(index: number): void {
    this.active.set(index);
    this.restart();
  }

  protected next(): void {
    this.active.update((index) => (index + 1) % this.slides.length);
  }

  protected prev(): void {
    this.active.update((index) => (index - 1 + this.slides.length) % this.slides.length);
    this.restart();
  }

  private start(): void {
    this.clear();
    this.timer = setInterval(() => {
      if (!this.paused()) {
        this.next();
      }
    }, 6500);
  }

  private restart(): void {
    if (this.timer) {
      this.start();
    }
  }

  private clear(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}
