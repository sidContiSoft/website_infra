import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Project } from '../core/site.data';
import { Icon } from './icon';

@Component({
  selector: 'app-project-card',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="card card-lift group block w-full overflow-hidden text-left"
      (click)="open.emit(project())"
      [attr.aria-label]="'View project: ' + project().title"
    >
      <div class="relative aspect-[16/10] overflow-hidden bg-navy-900">
        <img
          [src]="project().image"
          [alt]="project().title + ' — ' + project().location"
          class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          loading="lazy"
          width="720"
          height="450"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent"
        ></div>
        <span
          class="absolute left-3 top-3 border border-white/20 bg-navy-950/60 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm"
        >
          {{ project().sector }}
        </span>
        <span
          class="absolute bottom-3 left-3 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-white/60"
        >
          {{ project().location }}
        </span>
        <span
          class="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center border border-gold-300/50 bg-gold-400 text-navy-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          aria-hidden="true"
        >
          <app-icon name="arrow-up-right" [size]="16" />
        </span>
      </div>

      <div class="border-t border-steel-200 p-5">
        <p class="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-700">
          {{ project().category }}
        </p>
        <h3 class="mt-2 font-display text-[1.32rem] leading-tight text-navy-900">
          {{ project().title }}
        </h3>
        <div class="mt-4 flex items-center justify-between gap-4 border-t border-steel-100 pt-3">
          <span class="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-steel-500">
            {{ project().area }}
          </span>
          <span class="flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-navy-700 transition-colors group-hover:text-gold-700">
            Details
            <app-icon
              name="arrow-right"
              [size]="13"
              class="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </button>
  `,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly open = output<Project>();
}
