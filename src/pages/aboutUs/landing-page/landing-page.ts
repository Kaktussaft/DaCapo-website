import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gql, Apollo } from 'apollo-angular';
import { NavigationComponent } from '../../../components/navigation/navigation';
import {
  PhotoCarouselComponent,
  CarouselItem,
} from '../../../components/photo-carousel/photo-carousel';
import { StrapiService, LandingPageContent, Concert } from '../../../services/strapi.service';

const GET_LANDING_PAGE_CONTENT = gql`
  query GetLandingPageContent {
    landingPageContent {
      documentId
      Content_Aktuelles
      Content_WasWirMachen
      Header_Aktuelles
      Header_WasWirMachen
    }
    concerts {
      documentId
      ConcertTitle
      ConcertDate
      Location
    }
  }
`;

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

  constructor(
    private readonly strapiService: StrapiService,
    private readonly apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.apollo
      .query<{ landingPageContent: LandingPageContent; concerts: Concert[] }>({
        query: GET_LANDING_PAGE_CONTENT,
      })
      .subscribe({
        next: (result) => {
          if (result.data) {
            this.content = {
              ...result.data.landingPageContent,
              Concerts:  this.SortDateAscending(result.data.concerts),
            };
          }
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching landing page content:', err);
          this.error = 'Failed to load content from Strapi';
          this.loading = false;
        },
      });
  }

  SortDateAscending(concerts: Concert[]) {
    return [...concerts].sort((a, b) => new Date(a.ConcertDate).getTime() - new Date(b.ConcertDate).getTime());
  }
}
