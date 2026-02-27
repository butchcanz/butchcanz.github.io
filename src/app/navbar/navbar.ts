import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule, 
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  host: {
    class: 'fixed top-0 left-0 w-full z-50',
  },
})
export class Navbar {

  menuOpenValue = false;

  toggle() {
    this.menuOpenValue = !this.menuOpenValue;
  }

  menuOpen() {
    return this.menuOpenValue;
  }


  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.menuOpenValue = false;
  }
}
