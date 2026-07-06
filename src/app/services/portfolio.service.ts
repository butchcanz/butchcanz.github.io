import { Injectable } from '@angular/core';
import {
  ABOUT_PARAGRAPHS,
  EXPERIENCES,
  MISSION,
  NAV_LINKS,
  PERSONAL_INFO,
  PROJECTS,
  SERVICES,
  SKILL_CATEGORIES,
  SOCIAL_LINKS,
  SPECIALIZATIONS,
  STATS,
  TESTIMONIALS,
} from '../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  readonly personal = PERSONAL_INFO;
  readonly stats = STATS;
  readonly aboutParagraphs = ABOUT_PARAGRAPHS;
  readonly specializations = SPECIALIZATIONS;
  readonly mission = MISSION;
  readonly skillCategories = SKILL_CATEGORIES;
  readonly projects = PROJECTS;
  readonly experiences = EXPERIENCES;
  readonly services = SERVICES;
  readonly testimonials = TESTIMONIALS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly navLinks = NAV_LINKS;

  getAllTechnologies(): string[] {
    const techs = new Set<string>();
    for (const project of this.projects) {
      for (const tech of project.technologies) {
        techs.add(tech);
      }
    }
    return Array.from(techs).sort();
  }
}
