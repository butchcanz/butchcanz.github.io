import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionHeader } from '../components/section-header/section-header';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, ScrollRevealDirective],
  templateUrl: './experience.html',
})
export class Experience {
  private readonly portfolio = inject(PortfolioService);

  readonly experiences = this.portfolio.experiences;
}
