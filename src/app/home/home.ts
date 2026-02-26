import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { TechStack } from '../tech-stack/tech-stack';
import { Projects } from '../projects/projects';
import { Services } from '../services/services';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    TechStack,
    Projects,
    Services,
    Contact,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
