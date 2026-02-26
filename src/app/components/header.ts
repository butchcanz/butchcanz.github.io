import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  template: `
    <header class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <a href="#home" class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Portfolio
          </a>
          
          <div class="hidden md:flex items-center gap-8">
            <a href="#home" class="text-slate-300 hover:text-white transition-colors">Home</a>
            <a href="#about" class="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#tech" class="text-slate-300 hover:text-white transition-colors">Tech Stack</a>
            <a href="#projects" class="text-slate-300 hover:text-white transition-colors">Projects</a>
            <a href="#services" class="text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#contact" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">Contact</a>
          </div>

          <button 
            (click)="toggleMenu()"
            class="md:hidden flex flex-col gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2"
            [attr.aria-label]="isMenuOpen() ? 'Close menu' : 'Open menu'"
            [attr.aria-expanded]="isMenuOpen()">
            <span [class.rotate-45]="isMenuOpen()" [class.translate-y-2]="isMenuOpen()" class="w-6 h-0.5 bg-white transition-transform"></span>
            <span [class.opacity-0]="isMenuOpen()" class="w-6 h-0.5 bg-white transition-opacity"></span>
            <span [class.-rotate-45]="isMenuOpen()" [class.-translate-y-2]="isMenuOpen()" class="w-6 h-0.5 bg-white transition-transform"></span>
          </button>
        </div>

        @if (isMenuOpen()) {
          <div class="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4 flex flex-col gap-4">
            <a href="#home" (click)="closeMenu()" class="text-slate-300 hover:text-white transition-colors block py-2">Home</a>
            <a href="#about" (click)="closeMenu()" class="text-slate-300 hover:text-white transition-colors block py-2">About</a>
            <a href="#tech" (click)="closeMenu()" class="text-slate-300 hover:text-white transition-colors block py-2">Tech Stack</a>
            <a href="#projects" (click)="closeMenu()" class="text-slate-300 hover:text-white transition-colors block py-2">Projects</a>
            <a href="#services" (click)="closeMenu()" class="text-slate-300 hover:text-white transition-colors block py-2">Services</a>
            <a href="#contact" (click)="closeMenu()" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors inline-block">Contact</a>
          </div>
        }
      </nav>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
