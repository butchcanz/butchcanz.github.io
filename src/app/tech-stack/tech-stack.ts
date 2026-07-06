import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionHeader } from '../components/section-header/section-header';
import { ThemedLogo } from '../components/themed-logo/themed-logo';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-tech-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemedLogo, SectionHeader, ScrollRevealDirective],
  templateUrl: './tech-stack.html',
})
export class TechStack {
  private readonly portfolio = inject(PortfolioService);

  readonly categories = this.portfolio.skillCategories;
}
