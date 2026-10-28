import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../core/site.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-mobile-bar',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      aria-label="Quick contact"
      class="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-steel-200 bg-white/95 backdrop-blur lg:hidden"
      style="padding-bottom: env(safe-area-inset-bottom)"
    >
      <a
        [href]="phoneHref"
        class="flex flex-col items-center justify-center gap-1 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy-800"
      >
        <app-icon name="phone" [size]="18" />
        Call now
      </a>
      <a
        [href]="whatsapp"
        target="_blank"
        rel="noopener"
        class="flex flex-col items-center justify-center gap-1 border-x border-steel-200 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-navy-800"
      >
        <app-icon name="message" [size]="18" />
        WhatsApp
      </a>
      <a
        routerLink="/contact"
        class="flex flex-col items-center justify-center gap-1 bg-gold-400 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-navy-950"
      >
        <app-icon name="file" [size]="18" />
        Get quote
      </a>
    </nav>
  `,
})
export class MobileBar {
  protected readonly phoneHref = COMPANY.phones[0].href;
  protected readonly whatsapp = COMPANY.whatsapp;
}
