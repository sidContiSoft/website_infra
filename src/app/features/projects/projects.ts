import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  computed,
  effect,
  inject,
  signal,
  viewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS, PROJECT_CATEGORIES, type Project } from '../../core/site.data';
import { CtaBand } from '../../shared/cta-band';
import { Icon } from '../../shared/icon';
import { PageHero } from '../../shared/page-hero';
import { ProjectCard } from '../../shared/project-card';
import { RevealDirective } from '../../shared/reveal.directive';

type Filter = 'All' | (typeof PROJECT_CATEGORIES)[number];

@Component({
  selector: 'app-projects',
  imports: [RouterLink, PageHero, ProjectCard, Icon, CtaBand, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styles: `
    .modal-backdrop {
      animation: backdrop-in 0.25s ease both;
    }
    .modal-card {
      animation: modal-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
    @keyframes backdrop-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes modal-in {
      from {
        opacity: 0;
        transform: translateY(18px) scale(0.985);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }
  `,
})
export class ProjectsPage {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly projects = PROJECTS;
  protected readonly categories = PROJECT_CATEGORIES;
  protected readonly filters: Filter[] = ['All', ...PROJECT_CATEGORIES];
  protected readonly selected = signal<Filter>('All');
  protected readonly activeProject = signal<Project | null>(null);
  private readonly modalClose = viewChild<ElementRef<HTMLButtonElement>>('modalClose');

  protected readonly filtered = computed(() => {
    const filter = this.selected();
    return filter === 'All'
      ? this.projects
      : this.projects.filter((project) => project.category === filter);
  });

  protected readonly activeIndex = computed(() => {
    const active = this.activeProject();
    return active ? this.filtered().findIndex((project) => project.id === active.id) : -1;
  });

  constructor() {
    effect(() => {
      const active = this.activeProject();
      this.document.body.style.overflow = active ? 'hidden' : '';
      if (active) {
        this.modalClose()?.nativeElement.focus();
      }
    });

    this.destroyRef.onDestroy(() => {
      this.document.body.style.overflow = '';
    });
  }

  protected count(filter: Filter): number {
    return filter === 'All'
      ? this.projects.length
      : this.projects.filter((project) => project.category === filter).length;
  }

  protected select(filter: Filter): void {
    this.selected.set(filter);
    this.activeProject.set(null);
  }

  protected openProject(project: Project): void {
    this.activeProject.set(project);
  }

  protected close(): void {
    this.activeProject.set(null);
  }

  protected step(direction: 1 | -1): void {
    const list = this.filtered();
    if (!list.length) {
      return;
    }
    const current = this.activeIndex();
    const nextIndex = (current + direction + list.length) % list.length;
    this.activeProject.set(list[nextIndex]);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.close();
  }

  @HostListener('document:keydown.arrowright')
  protected onRight(): void {
    if (this.activeProject()) {
      this.step(1);
    }
  }

  @HostListener('document:keydown.arrowleft')
  protected onLeft(): void {
    if (this.activeProject()) {
      this.step(-1);
    }
  }
}
