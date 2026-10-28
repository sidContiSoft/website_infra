import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { API_BASE_URL } from './core/api.config';
import { SiteHeader } from './layout/header';
import { SiteFooter } from './layout/footer';
import { MobileBar } from './layout/mobile-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, MobileBar],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
    >
      Skip to content
    </a>
    <app-site-header />
    <main id="main-content" class="pb-16 lg:pb-0">
      <router-outlet />
    </main>
    <app-site-footer />
    <app-mobile-bar />
  `,
})
export class App {
  private readonly router = inject(Router);

  constructor() {
    this.router.events.subscribe((event: unknown) => {
      if (!(event instanceof NavigationEnd)) return;
      const page = event.urlAfterRedirects.split('?')[0] || '/';
      void fetch(`${API_BASE_URL}/visit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page }),
        keepalive: true,
      }).catch(() => undefined);
    });
  }
}
