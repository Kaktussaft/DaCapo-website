import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../../components/navigation/navigation';
import {
  PhotoCarouselComponent,
  CarouselItem,
} from '../../../components/photo-carousel/photo-carousel';
import { StrapiService, LandingPageContent } from '../../../services/strapi.service';

@Component({
  selector: 'app-landing-page',
  imports: [NavigationComponent, PhotoCarouselComponent, CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css'],
})
export class LandingPage implements OnInit {
  carouselItems: CarouselItem[] = [
    { imageUrl: 'assets/images/2025_dacapo.jpg', alt: 'Da Capo 2025' },
    { imageUrl: 'assets/images/2025_probenwochenende.jpg', alt: 'Da Capo Concert' },
    { imageUrl: 'assets/images/2025_dacapo.jpg', alt: 'Da Capo Performance' },
  ];

  content: LandingPageContent | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(private readonly strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getLandingPageContent().subscribe({
      next: (content) => {
        this.content = content;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching landing page content:', err);
        this.error = 'Failed to load content from Strapi';
        this.loading = false;
      },
    });
  }
}
