import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionHeader } from '../components/section-header/section-header';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-testimonials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, ScrollRevealDirective],
  templateUrl: './testimonials.html',
})
export class Testimonials {
  private readonly portfolio = inject(PortfolioService);

  readonly testimonials = this.portfolio.testimonials;
}
