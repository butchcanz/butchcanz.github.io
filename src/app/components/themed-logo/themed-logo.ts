import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-themed-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    @if (darkSrc()) {
      <img
        [ngSrc]="light()"
        [alt]="alt()"
        [width]="size()"
        [height]="size()"
        [class]="imgClass() + ' block dark:hidden'"
      />
      <img
        [ngSrc]="darkSrc()!"
        [alt]="alt()"
        [width]="size()"
        [height]="size()"
        [class]="imgClass() + ' hidden dark:block'"
      />
    } @else {
      <img
        [ngSrc]="light()"
        [alt]="alt()"
        [width]="size()"
        [height]="size()"
        [class]="imgClass()"
      />
    }
  `,
})
export class ThemedLogo {
  readonly light = input.required<string>();
  readonly dark = input<string>();
  readonly alt = input('');
  readonly size = input(24);
  readonly imgClass = input('');

  readonly darkSrc = computed(() => this.dark() ?? null);
}
