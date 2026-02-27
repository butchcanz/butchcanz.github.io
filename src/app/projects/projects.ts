import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {

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