import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemedLogo } from '../components/themed-logo/themed-logo';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemedLogo],
  templateUrl: './footer.html',
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class Footer {
  private readonly portfolio = inject(PortfolioService);

  readonly personal = this.portfolio.personal;
  readonly navLinks = this.portfolio.navLinks;
  readonly socialLinks = this.portfolio.socialLinks;
  readonly showBackToTop = signal(false);

  onWindowScroll(): void {
    this.showBackToTop.set(window.scrollY > 400);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  currentYear(): number {
    return new Date().getFullYear();
  }
}
