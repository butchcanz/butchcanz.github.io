import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  ngOnInit(): void {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar?.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }
}
