import { Directive, ElementRef, OnDestroy, OnInit, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  host: {
    '[class.opacity-0]': '!visible()',
    '[class.translate-y-10]': '!visible()',
    '[class.opacity-100]': 'visible()',
    '[class.translate-y-0]': 'visible()',
    class: 'transition-all duration-1000 ease-out',
  },
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly delay = input(0);
  readonly visible = signal(false);

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const delayMs = this.delay();
    if (delayMs > 0) {
      this.el.nativeElement.style.transitionDelay = `${delayMs}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible.set(true);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
