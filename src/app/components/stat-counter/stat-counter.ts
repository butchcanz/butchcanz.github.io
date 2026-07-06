import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-stat-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center">
      <div
        class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent"
      >
        {{ displayValue() }}{{ suffix() }}
      </div>
      <div class="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
        {{ label() }}
      </div>
    </div>
  `,
})
export class StatCounter implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly value = input.required<number>();
  readonly label = input.required<string>();
  readonly suffix = input('');
  readonly duration = input(2000);

  readonly displayValue = signal(0);

  private observer?: IntersectionObserver;
  private animated = false;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.animate();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animate(): void {
    const target = this.value();
    const duration = this.duration();
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayValue.set(Math.round(target * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
