import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
})
export class Services {

  visible = signal(false);

  @HostListener('window:scroll', [])
  onScroll() {
    const element = document.getElementById('projects');
    if (!element) return;

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      this.visible.set(true);
    }
  }
}