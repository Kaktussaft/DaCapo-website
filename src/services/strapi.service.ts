import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface LandingPageContent {
  documentId: string;
  Header_WasWirMachen: string;
  Content_WasWirMachen: string;
  Header_Aktuelles: string;
  Content_Aktuelles: string;
}


interface LandingPageContentResponse {
  landingPageContent: LandingPageContent;
}

const GET_LANDING_PAGE_CONTENT = gql`
  query GetLandingPageContent {
    landingPageContent {
      documentId
      Content_Aktuelles
      Content_WasWirMachen
      Header_Aktuelles
      Header_WasWirMachen
    }

  }
`;

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  constructor(private readonly apollo: Apollo) {}

  getLandingPageContent(): Observable<LandingPageContent> {
    return this.apollo
      .query<LandingPageContentResponse>({
        query: GET_LANDING_PAGE_CONTENT,
      })
      .pipe(
        map((result) => {
          if (!result.data) {
            throw new Error('No data returned from GraphQL query');
          }
          return result.data.landingPageContent;
        }),
      );
  }
}
