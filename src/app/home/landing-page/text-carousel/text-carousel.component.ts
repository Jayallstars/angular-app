import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: ['./text-carousel.component.css'],
  standalone: true,
  imports: [NgFor],
})
export class TextCarouselComponent implements OnInit {
  slides: any[] = [];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.slides = [
      {
        subtitle: 'Frontend Framework',
        description:
          'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      },
      {
        subtitle: 'Frontend Library',
        description:
          'React is a JavaScript library for building user interfaces.',
      },
      {
        subtitle: 'Frontend Framework',
        description:
          'Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications.',
      },
    ];
  }

  prevSlide(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide(): void {
    this.currentIndex =
      this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}