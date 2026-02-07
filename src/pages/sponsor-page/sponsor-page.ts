import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gql, Apollo } from 'apollo-angular';
import { NavigationComponent } from "../../components/navigation/navigation";
import { Sponsoren, Sponsor_Logo } from '../../services/strapi.service.interface';
import { STRAPI_URL } from '../../app/constants/api.key';

const GET_SPONSOR_CONTENT = gql`
  query GetSponsorContent {
    sponsoren {
      documentId
      Noten_Sponsoren
      Logos {
        url
        alternativeText
      }
    }
  }
`;

@Component({
  selector: 'app-sponsor-page',
  imports: [NavigationComponent, CommonModule],
  templateUrl: './sponsor-page.html',
  styleUrl: './sponsor-page.css'
})
export class SponsorPage implements OnInit {
  content: Sponsoren | null = null;
  sponsorLogos: { imageUrl: string; alt: string }[] = [];
  notenSponsorenList: string[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private readonly apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .query<{ sponsoren: Sponsoren }>({
        query: GET_SPONSOR_CONTENT,
      })
      .subscribe({
        next: (result) => {
          if (result.data) {
            this.content = result.data.sponsoren;
            this.sponsorLogos = result.data.sponsoren.Logos.map(logo => ({
              imageUrl: `${STRAPI_URL}${logo.url}`,
              alt: logo.alternativeText
            }));
            this.notenSponsorenList = result.data.sponsoren.Noten_Sponsoren
              ? result.data.sponsoren.Noten_Sponsoren.split(';').map(s => s.trim()).filter(s => s.length > 0)
              : [];
          }
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching sponsor content:', err);
          this.error = 'Failed to load content from Strapi';
          this.loading = false;
        },
      });
  }
}
