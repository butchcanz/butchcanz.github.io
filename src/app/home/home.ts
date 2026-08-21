import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { TechStack } from '../tech-stack/tech-stack';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { Services } from '../services/services';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    Navbar,
    Hero,
    About,
    TechStack,
    Projects,
    Experience,
    Services,
    Contact,
    Footer,
  ],
  templateUrl: './home.html',
})
export class Home {}
