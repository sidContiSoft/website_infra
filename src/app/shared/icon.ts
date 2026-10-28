import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { IconName } from '../core/site.data';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth()"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('arrow-right') {
          <path d="M4 12h15M13 6l6 6-6 6" />
        }
        @case ('arrow-up-right') {
          <path d="M7 17 17 7M8 7h9v9" />
        }
        @case ('phone') {
          <path
            d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"
          />
        }
        @case ('mail') {
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2.5 7 9.5 6 9.5-6" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        }
        @case ('map-pin') {
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="2.6" />
        }
        @case ('check') {
          <path d="m20 6-11 11-5-5" />
        }
        @case ('shield') {
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        }
        @case ('layers') {
          <path d="m12 2 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
        }
        @case ('building') {
          <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M2 21h20" />
          <path d="M16 9h2a2 2 0 0 1 2 2v10M8 7h2M8 11h2M8 15h2" />
        }
        @case ('factory') {
          <path d="M2 21h20M4 21V9l6 4V9l6 4V4h4v17" />
          <path d="M8 17h1M12 17h1M16 17h1" />
        }
        @case ('warehouse') {
          <path d="M3 21V10l9-6 9 6v11M2 21h20" />
          <path d="M7 21v-7h10v7M7 17h10M7 8v2" />
        }
        @case ('panels') {
          <path d="M3 6h18v12H3zM8 6v12M13 6v12M18 6v12" />
        }
        @case ('snowflake') {
          <path d="M12 2v20M4.2 6.5l15.6 11M19.8 6.5 4.2 17.5" />
          <path d="M9 4.5 12 6l3-1.5M9 19.5 12 18l3 1.5" />
        }
        @case ('pipe') {
          <path d="M3 9h8a3 3 0 0 1 0 6H3V9ZM3 6v12" />
          <path d="M17 12h4M14 12h-3" />
        }
        @case ('flame') {
          <path
            d="M12 22c4 0 6.5-2.6 6.5-6.2 0-4.3-4-6.9-4.4-10.8-.1-1-1.2-1.6-2-1C9.3 6.6 7.8 10 7.8 12.9 6.9 12.2 6.4 11.2 6.4 10c-1.1 1.6-1.9 3.6-1.9 5.8C4.5 19.4 8 22 12 22Z"
          />
        }
        @case ('tool') {
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 8l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 8-8l-3.8 3.8Z"
          />
        }
        @case ('gauge') {
          <path d="M12 21a9 9 0 1 1 9-9" />
          <path d="m12 13 4.5-4.5" />
          <circle cx="12" cy="13" r="1.8" />
          <path d="M4 17h3M17 17h3M6.5 6.5l2 2" />
        }
        @case ('fire') {
          <path d="M9 8h6v13H9zM10 8V5h4v3M12 5V2.5M9 12h6M9 16h6M18 4h2v4" />
        }
        @case ('bolt') {
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        }
        @case ('ruler') {
          <path d="M3 16.5 16.5 3l4.5 4.5L7.5 21 3 16.5Z" />
          <path d="m7 13 2 2M10 10l2 2M13 7l2 2" />
        }
        @case ('cube') {
          <path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" />
          <path d="M3.3 7 12 12l8.7-5M12 22V12" />
        }
        @case ('gear') {
          <circle cx="12" cy="12" r="3" />
          <path
            d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 11 4.6a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 19.4 11a2 2 0 1 1 0 4Z"
          />
        }
        @case ('crane') {
          <path d="M5 21V4h3v17M2 21h9M8 7h11l3 3M8 11h8" />
          <path d="M17 10v3M14 13h6v4h-6z" />
        }
        @case ('spark') {
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19" />
        }
        @case ('target') {
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        }
        @case ('users') {
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
        }
        @case ('file') {
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
          <path d="M14 2v6h6M9 13h6M9 17h6" />
        }
        @case ('upload') {
          <path d="M12 16V4m0 0 4 4m-4-4L8 8" />
          <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
        }
        @case ('message') {
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
        }
        @case ('menu') {
          <path d="M3 6h18M3 12h18M3 18h18" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('chevron-down') {
          <path d="m6 9 6 6 6-6" />
        }
        @case ('chevron-left') {
          <path d="m15 18-6-6 6-6" />
        }
        @case ('chevron-right') {
          <path d="m9 18 6-6-6-6" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex: none;
      line-height: 0;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  readonly strokeWidth = input(1.7);
}
