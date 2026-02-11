import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  isVisible = false;

  categories = [
    {
      icon: '⚡',
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'RxJS', level: 88 },
        { name: 'CSS / Tailwind', level: 85 },
      ]
    },
    {
      icon: '🔧',
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'NestJS', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      icon: '☁️',
      name: 'DevOps & Cloud',
      skills: [
        { name: 'AWS / GCP', level: 78 },
        { name: 'Docker', level: 82 },
        { name: 'CI/CD', level: 85 },
        { name: 'Kubernetes', level: 65 },
      ]
    },
  ];

  techStack = [
    { symbol: '🅰️', name: 'Angular' },
    { symbol: '⚛️', name: 'React' },
    { symbol: '🟩', name: 'Node.js' },
    { symbol: '🗃️', name: 'PostgreSQL' },
    { symbol: '🐳', name: 'Docker' },
    { symbol: '☁️', name: 'AWS' },
    { symbol: '🔵', name: 'TypeScript' },
    { symbol: '🕸️', name: 'GraphQL' },
    { symbol: '🔴', name: 'Redis' },
    { symbol: '🌿', name: 'MongoDB' },
    { symbol: '🔧', name: 'NestJS' },
    { symbol: '📦', name: 'Webpack' },
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) this.isVisible = true; },
      { threshold: 0.1 }
    );
    observer.observe(this.el.nativeElement);
  }
}
