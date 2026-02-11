import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));
  }
}
