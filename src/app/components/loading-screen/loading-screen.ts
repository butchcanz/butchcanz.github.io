import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="fixed inset-0 z-[100] flex flex-col items-center justify-center
             bg-gray-50 dark:bg-gray-950 transition-opacity duration-500"
      role="status"
      aria-label="Loading portfolio"
    >
      <div
        class="w-16 h-16 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin"
        aria-hidden="true"
      ></div>
      <p class="mt-6 text-gray-600 dark:text-gray-400 font-medium tracking-wide">
        Loading Portfolio...
      </p>
    </div>
  `,
})
export class LoadingScreen {
  readonly loaded = output<void>();
}
