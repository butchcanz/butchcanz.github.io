import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrls: ['./tech-stack.css'],
})
export class TechStack {

  visible = signal(false);

  @HostListener('window:scroll', [])
  onScroll() {
    const section = document.getElementById('tech-stack');
    if (!section) return;

    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      this.visible.set(true);
    }
  }
}