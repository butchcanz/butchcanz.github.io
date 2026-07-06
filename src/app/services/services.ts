import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionHeader } from '../components/section-header/section-header';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, ScrollRevealDirective],
  templateUrl: './services.html',
})
export class Services {
  private readonly portfolio = inject(PortfolioService);

  readonly services = this.portfolio.services;
}
