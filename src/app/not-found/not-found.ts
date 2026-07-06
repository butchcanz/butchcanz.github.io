import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div
      class="min-h-screen flex flex-col items-center justify-center px-4
             bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <p class="text-8xl font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
        404
      </p>
      <h1 class="mt-4 text-2xl sm:text-3xl font-bold">Page Not Found</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        routerLink="/"
        class="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500
               text-white font-semibold shadow-lg hover:from-indigo-400 hover:to-cyan-400
               transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        Back to Home
      </a>
    </div>
  `,
})
export class NotFound {}
