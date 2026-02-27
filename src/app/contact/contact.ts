import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {

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

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    console.log('contact form submitted', Object.fromEntries(data.entries()));
    form.reset();
  }
}