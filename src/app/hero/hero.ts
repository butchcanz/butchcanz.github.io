import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero implements OnInit {
  greeting: string = '';

  tags = [
    'Angular', 'React', 'Node.js', 'TypeScript',
    'AI/ML', 'Web3', 'Solidity', 'AWS',
  ];

  ngOnInit(): void {
    const h = new Date().getHours();
    this.greeting = h < 12 ? 'Good Morning' : h < 18 ? 'Good Afternoon' : 'Good Evening';
  }

}


