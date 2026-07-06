import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isDark = signal(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const dark = stored ? stored === 'dark' : prefersDark;
      this.isDark.set(dark);
      this.applyTheme(dark);
    }
  }

  toggle(): void {
    this.setDark(!this.isDark());
  }

  setDark(dark: boolean): void {
    this.isDark.set(dark);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
      this.applyTheme(dark);
    }
  }

  private applyTheme(dark: boolean): void {
    const html = this.document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
