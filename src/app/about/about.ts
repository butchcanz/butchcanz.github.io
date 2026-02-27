import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {
   visible = signal(false);

  @HostListener('window:scroll', [])
  onScroll() {
    const section = document.getElementById('about');
    if (!section) return;

    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      this.visible.set(true);
    }
  }
}