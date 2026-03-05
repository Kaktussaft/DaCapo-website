import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


export interface CarouselItem {
  imageUrl: string;
  alt: string;
  link?: string;
}

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './photo-carousel.html',
  styleUrls: ['./photo-carousel.css']
})
export class PhotoCarouselComponent {
  @Input() items: CarouselItem[] = [];
  currentIndex: number = 0;

  get visibleItems(): { item: CarouselItem; position: 'left' | 'center' | 'right' }[] {
    if (this.items.length === 0) return [];

    const total = this.items.length;
    const prevIndex = (this.currentIndex - 1 + total) % total;
    const nextIndex = (this.currentIndex + 1) % total;

    return [
      { item: this.items[prevIndex], position: 'left' },
      { item: this.items[this.currentIndex], position: 'center' },
      { item: this.items[nextIndex], position: 'right' }
    ];
  }

  previous(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
