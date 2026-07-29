import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './navbar.html',
  host: {
    class: 'fixed top-0 left-0 w-full z-50',
  },
})
export class Navbar {
  private readonly portfolio = inject(PortfolioService);
  private readonly theme = inject(ThemeService);

  readonly navLinks = this.portfolio.navLinks;
  readonly personal = this.portfolio.personal;
  readonly menuOpen = signal(false);
  readonly isDark = this.theme.isDark;

  toggle(): void {
    this.menuOpen.update((v) => !v);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }
}
