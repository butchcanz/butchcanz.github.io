import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    // placeholder behavior - integrate with backend later
    console.log('contact form submitted', Object.fromEntries(data.entries()));
    form.reset();
  }
}