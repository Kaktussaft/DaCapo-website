import { Component, inject, signal, computed } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { CollapsibleTextSection } from '../../../components/collapsible-text-section/collapsible-text-section';
import { gql, Apollo } from 'apollo-angular';
import { toSignal } from '@angular/core/rxjs-interop';
import { Bericht_Eintrag } from '../../../services/strapi.service.interface';
import { STRAPI_URL } from '../../../app/constants/api.key';
import { map } from 'rxjs/operators';

const GET_REPORT_PAGE_CONTENT = gql`
  query GetReportPageContent {
    berichtEintrags {
      documentId
      Bericht_Title
      Location_Datum
      Bericht_Inhalt
      Bericht_Bild {
        url
        alternativeText
      }
    }
  }
`;

@Component({
  selector: 'app-report-page',
  imports: [NavigationComponent, CollapsibleTextSection],
  templateUrl: './report-page.html',
  styleUrl: './report-page.css'
})
export class ReportPage {
  private readonly apollo = inject(Apollo);

  expandedSections: { [key: string]: boolean } = {};

  private readonly queryResult = toSignal(
    this.apollo
      .query<{ berichtEintrags: Bericht_Eintrag[] }>({
        query: GET_REPORT_PAGE_CONTENT,
      })
      .pipe(
        map((result) => {
          if (result.data) {
            return result.data.berichtEintrags.map(report => ({
              ...report,
              Bericht_Bild: {
                url: `${STRAPI_URL}${report.Bericht_Bild.url}`,
                alternativeText: report.Bericht_Bild.alternativeText
              }
            }));
          }
          return [];
        })
      ),
    { initialValue: [] }
  );

  readonly reports = computed(() => this.queryResult());
  readonly loading = computed(() => this.reports().length === 0);
  readonly error = signal<string | null>(null);

  toggleSection(sectionKey: string): void {
    this.expandedSections[sectionKey] = !this.expandedSections[sectionKey];
  }

  isExpanded(sectionKey: string): boolean {
    return this.expandedSections[sectionKey];
  }
}
