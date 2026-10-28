import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  effect,
  inject,
  signal,
  viewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY, NAV_LINKS } from '../core/site.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Utility bar -->
    <div class="hidden bg-navy-950 text-white lg:block">
      <div class="container-x flex h-9 items-center justify-between text-[0.68rem] tracking-wide">
        <div class="flex items-center gap-6">
          <a
            class="flex items-center gap-2 text-white/75 transition-colors hover:text-gold-300"
            [href]="company.phones[0].href"
          >
            <app-icon name="phone" [size]="13" />
            {{ company.phones[0].label }}
          </a>
          <span class="h-3 w-px bg-white/20"></span>
          <a
            class="flex items-center gap-2 text-white/75 transition-colors hover:text-gold-300"
            [href]="company.emails[0].href"
          >
            <app-icon name="mail" [size]="13" />
            {{ company.emails[0].label }}
          </a>
        </div>
        <div class="flex items-center gap-5 text-white/55">
          <span class="flex items-center gap-2">
            <app-icon name="map-pin" [size]="13" />
            Faridabad, Haryana · New Delhi
          </span>
          <span class="h-3 w-px bg-white/20"></span>
          <span class="text-gold-300/90">{{ company.descriptor }}</span>
        </div>
      </div>
    </div>

    <!-- Main header -->
    <header
      class="sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300"
      [class.header-scrolled]="scrolled()"
    >
      <div class="container-x flex h-[74px] items-center justify-between gap-6">
        <a routerLink="/" class="group flex items-center gap-3" aria-label="Supreme Electromech Power and Infra — home">
          <img
            src="assets/img/logo.webp"
            alt="Supreme Electromech Power & Infra"
            class="h-[52px] w-auto mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
            width="108"
            height="52"
            fetchpriority="high"
          />
          <span class="hidden h-10 w-px bg-steel-300 sm:block"></span>
          <span class="hidden flex-col leading-none sm:flex">
            <span class="display text-[1.02rem] tracking-[0.08em] text-navy-900">Supreme</span>
            <span class="mt-1 text-[0.55rem] font-semibold uppercase leading-tight tracking-[0.2em] text-navy-700">
              Electromech Power &amp; Infra
            </span>
            <span class="mt-1.5 text-[0.5rem] font-medium uppercase tracking-[0.16em] text-steel-500">
              {{ company.descriptor }}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" class="hidden items-center gap-7 lg:flex">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              ariaCurrentWhenActive="page"
              class="nav-link"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <div class="flex items-center gap-3">
          <a routerLink="/contact" class="btn btn-gold btn-sm hidden sm:inline-flex">
            Request a quote
            <app-icon name="arrow-right" [size]="15" />
          </a>
          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-steel-300 text-navy-900 transition-colors hover:border-navy-800 lg:hidden"
            (click)="openMenu()"
            aria-label="Open navigation menu"
            [attr.aria-expanded]="menuOpen()"
            aria-controls="mobile-navigation"
          >
            <app-icon name="menu" [size]="22" />
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile drawer -->
    @if (menuOpen()) {
      <div class="fixed inset-0 z-[100] lg:hidden">
        <div class="drawer-overlay absolute inset-0 bg-navy-950/70 backdrop-blur-sm" (click)="closeMenu()"></div>
        <aside
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          class="drawer-panel absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-navy-950"
        >
          <div class="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <img src="assets/img/logo.webp" alt="Supreme Electromech" class="h-12 w-auto rounded-sm bg-white p-1" />
            <button
              #closeButton
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 text-white/80 transition-colors hover:border-gold-400 hover:text-gold-300"
              (click)="closeMenu()"
              aria-label="Close navigation menu"
            >
              <app-icon name="close" [size]="20" />
            </button>
          </div>

          <nav aria-label="Mobile" class="flex-1 px-6 py-4">
            @for (link of navLinks; track link.path; let i = $index) {
              <a
                [routerLink]="link.path"
                class="drawer-link"
                routerLinkActive="text-gold-300"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                ariaCurrentWhenActive="page"
                (click)="closeMenu()"
              >
                <span>{{ link.label }}</span>
                <span class="font-sans text-[0.6rem] font-semibold tracking-[0.2em] text-white/35">
                  0{{ i + 1 }}
                </span>
              </a>
            }
          </nav>

          <div class="space-y-4 border-t border-white/10 px-6 py-6">
            <a routerLink="/contact" class="btn btn-gold w-full" (click)="closeMenu()">
              Request a quote
              <app-icon name="arrow-right" [size]="16" />
            </a>
            <a [href]="company.phones[0].href" class="flex items-center gap-3 text-sm text-white/75">
              <app-icon name="phone" [size]="16" class="text-gold-400" />
              {{ company.phones[0].label }}
            </a>
            <a [href]="company.emails[0].href" class="flex items-start gap-3 text-sm text-white/75">
              <app-icon name="mail" [size]="16" class="mt-0.5 text-gold-400" />
              <span class="break-all">{{ company.emails[0].label }}</span>
            </a>
            <p class="text-[0.7rem] uppercase tracking-[0.16em] text-white/35">
              Faridabad · New Delhi
            </p>
          </div>
        </aside>
      </div>
    }
  `,
  styles: `
    .header-scrolled {
      box-shadow: 0 18px 36px -30px rgb(7 30 51 / 0.65);
    }
    .drawer-overlay {
      animation: overlay-in 0.25s ease both;
    }
    .drawer-panel {
      animation: panel-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
    @keyframes overlay-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes panel-in {
      from {
        transform: translateX(100%);
      }
      to {
        transform: none;
      }
    }
  `,
})
export class SiteHeader {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly company = COMPANY;
  protected readonly navLinks = NAV_LINKS;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  private readonly closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  constructor() {
    effect(() => {
      const open = this.menuOpen();
      this.document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        this.closeButton()?.nativeElement.focus();
      }
    });

    this.destroyRef.onDestroy(() => {
      this.document.body.style.overflow = '';
    });
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 6);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  protected openMenu(): void {
    this.menuOpen.set(true);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
