import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  constructor(private readonly apollo: Apollo) {}

  /**
   * Generic query method that accepts a GraphQL query and returns typed results
   * @param query The GraphQL query (DocumentNode)
   * @param dataKey The key to extract from the response (e.g., 'landingPageContent')
   * @returns Observable of the typed result
   */
  query<T, R = { [key: string]: T }>(query: DocumentNode, dataKey: string): Observable<T> {
    return this.apollo
      .query<R>({
        query,
      })
      .pipe(
        map((result) => {
          if (!result.data) {
            throw new Error('No data returned from GraphQL query');
          }
          return (result.data as any)[dataKey];
        }),
      );
  }
}
