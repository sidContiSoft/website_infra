import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  ACCESSORIES,
  COMPANY,
  DIFFERENTIATORS,
  ENGINEERING_TOOLS,
  FRAME_TYPES,
  PANEL_SYSTEMS,
  PROCESS_STEPS,
  PROJECTS,
  SECTORS,
  SERVICES,
  STATS,
} from '../../core/site.data';
import { CtaBand } from '../../shared/cta-band';
import { Icon } from '../../shared/icon';
import { ProjectCard } from '../../shared/project-card';
import { RevealDirective } from '../../shared/reveal.directive';
import { Hero } from './hero';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    RouterLink,
    Icon,
    ProjectCard,
    CtaBand,
    RevealDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class HomePage {
  private readonly router = inject(Router);

  protected readonly company = COMPANY;
  protected readonly services = SERVICES;
  protected readonly stats = STATS;
  protected readonly tools = ENGINEERING_TOOLS;
  protected readonly frames = FRAME_TYPES;
  protected readonly panels = [PANEL_SYSTEMS[0], PANEL_SYSTEMS[1], PANEL_SYSTEMS[4]];
  protected readonly accessories = ACCESSORIES;
  protected readonly differentiators = DIFFERENTIATORS;
  protected readonly process = PROCESS_STEPS;
  protected readonly sectors = SECTORS;
  protected readonly featuredProjects = PROJECTS.filter((project) => project.featured);

  protected openProject(): void {
    this.router.navigate(['/projects']);
  }
}
