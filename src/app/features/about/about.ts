import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  COMPANY,
  DESIGN_CODES,
  OFFICES,
  QUALITY_STAGES,
  STATS,
} from '../../core/site.data';
import { CtaBand } from '../../shared/cta-band';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RouterLink, PageHero, Icon, CtaBand, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
})
export class AboutPage {
  protected readonly company = COMPANY;
  protected readonly codes = DESIGN_CODES;
  protected readonly stages = QUALITY_STAGES;
  protected readonly offices = OFFICES;
  protected readonly stats = STATS;

  protected encode(value: string): string {
    return encodeURIComponent(value);
  }

  protected readonly values = [
    {
      icon: 'target' as const,
      title: 'Precision',
      text: 'Tolerances held in the toolroom are held on site. Drawings, fabrication and erection follow the same standard.',
    },
    {
      icon: 'shield' as const,
      title: 'Integrity',
      text: 'Clear scope, honest specifications and transparent reporting — including when a project gets difficult.',
    },
    {
      icon: 'users' as const,
      title: 'Safety',
      text: 'Erection method statements, trained crews and site discipline protect people and surrounding operations.',
    },
    {
      icon: 'gear' as const,
      title: 'Partnership',
      text: 'We stay involved after handover, because buildings are long-term assets and support should be too.',
    },
  ];
}
