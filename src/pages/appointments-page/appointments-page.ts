import { Component } from '@angular/core';

import { NavigationComponent } from "../../components/navigation/navigation";
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-appointments-page',
  imports: [NavigationComponent, PdfViewerModule],
  templateUrl: './appointments-page.html',
  styleUrl: './appointments-page.css',
})
export class AppointmentsPage {
  pdfSrc = 'assets/documents/probenplan da capo 202526.pdf';
  showPdfViewer = false;

  togglePdfViewer() {
    this.showPdfViewer = !this.showPdfViewer;
  }

  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'Probenplan Da Capo 2025-26.pdf';
    link.click();
  }
}
