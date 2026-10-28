import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, SECTORS } from '../../core/site.data';
import { CtaBand } from '../../shared/cta-band';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [RouterLink, PageHero, Icon, CtaBand, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services.html',
})
export class ServicesPage {
  protected readonly services = SERVICES;
  protected readonly sectors = SECTORS;

  protected readonly delivery = [
    {
      icon: 'gear' as const,
      title: 'Engineer',
      text: 'Loads, framing, connections and panel layout resolved in a coordinated 3D model.',
    },
    {
      icon: 'factory' as const,
      title: 'Fabricate',
      text: 'Members, panels and accessories produced to shop drawings with inspection hold points.',
    },
    {
      icon: 'crane' as const,
      title: 'Erect',
      text: 'Method statements, trained crews and alignment checks through the erection sequence.',
    },
    {
      icon: 'shield' as const,
      title: 'Commission',
      text: 'Testing, punch closure, documentation and handover with after-sales support.',
    },
  ];
}
