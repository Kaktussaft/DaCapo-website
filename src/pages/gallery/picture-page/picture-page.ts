import { Component, inject, signal, computed } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { gql, Apollo } from 'apollo-angular';
import { toSignal } from '@angular/core/rxjs-interop';
import { Fotogalerie_Eintrag } from '../../../services/strapi.service.interface';
import { STRAPI_URL } from '../../../app/constants/api.key';
import { map } from 'rxjs/operators';

const GET_GALLERY_CONTENT = gql`
  query GetGalleryContent {
    fotogalerieEintrags {
      documentId
      Titel
      Location_Datum
      Bilder {
        url
        alternativeText
      }
    }
  }
`;

@Component({
  selector: 'app-picture-page',
  imports: [NavigationComponent],
  templateUrl: './picture-page.html',
  styleUrl: './picture-page.css'
})
export class PicturePage {
  private readonly apollo = inject(Apollo);

  private readonly queryResult = toSignal(
    this.apollo
      .query<{ fotogalerieEintrags: Fotogalerie_Eintrag[] }>({
        query: GET_GALLERY_CONTENT,
      })
      .pipe(
        map((result) => {
          if (result.data) {
            return result.data.fotogalerieEintrags.map(gallery => ({
              ...gallery,
              Bilder: gallery.Bilder.map(image => ({
                url: `${STRAPI_URL}${image.url}`,
                alternativeText: image.alternativeText
              }))
            }));
          }
          return [];
        })
      ),
    { initialValue: [] }
  );

  readonly galleries = computed(() => this.queryResult());
  readonly loading = computed(() => this.galleries().length === 0);
  readonly error = signal<string | null>(null);
}

