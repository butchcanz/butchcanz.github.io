import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-center mb-12 md:mb-16">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
      >
        {{ title() }}
        @if (highlight()) {
          <span
            class="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent"
          >
            {{ highlight() }}
          </span>
        }
      </h2>
      @if (subtitle()) {
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ subtitle() }}
        </p>
      }
      <div
        class="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
        aria-hidden="true"
      ></div>
    </div>
  `,
})
export class SectionHeader {
  readonly title = input.required<string>();
  readonly highlight = input('');
  readonly subtitle = input('');
}
