import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { StatCounter } from '../components/stat-counter/stat-counter';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, StatCounter],
  templateUrl: './hero.html',
})
export class Hero implements OnInit {
  private readonly portfolio = inject(PortfolioService);

  readonly personal = this.portfolio.personal;
  readonly stats = this.portfolio.stats;
  readonly greeting = signal('');

  ngOnInit(): void {
    const h = new Date().getHours();
    this.greeting.set(
      h < 12 ? 'Good Morning' : h < 18 ? 'Good Afternoon' : 'Good Evening',
    );
  }
}
