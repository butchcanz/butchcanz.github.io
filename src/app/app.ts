import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Contact } from './contact/contact';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Skills,
    Projects,
    Navbar,
    Hero,
    Contact,
    About
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('butchcanz.github.io');
}
