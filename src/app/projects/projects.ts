import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SectionHeader } from '../components/section-header/section-header';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, SectionHeader, ScrollRevealDirective],
  templateUrl: './projects.html',
})
export class Projects {
  private readonly portfolio = inject(PortfolioService);

  readonly allProjects = this.portfolio.projects;
  readonly technologies = ['All', ...this.portfolio.getAllTechnologies()];
  readonly activeFilter = signal('All');

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') return this.allProjects;
    return this.allProjects.filter((p) => p.technologies.includes(filter));
  });

  setFilter(tech: string): void {
    this.activeFilter.set(tech);
  }
}
