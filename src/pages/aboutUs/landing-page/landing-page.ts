import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { PhotoCarouselComponent, CarouselItem } from "../../../components/photo-carousel/photo-carousel";
@Component({
  selector: 'app-landing-page',
  imports: [NavigationComponent, PhotoCarouselComponent],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css'],
})
export class LandingPage {
  pdfSrc = 'assets/documents/Adventskonzert_13_12_2026.pdf';

  carouselItems: CarouselItem[] = [
    {
      imageUrl: 'assets/images/2025_dacapo.jpg',
      alt: 'Da Capo 2025',
      link: '/Berichte#voicesOfSpirit',
    },
    {
      imageUrl: 'assets/images/2025_probenwochenende.jpg',
      alt: 'Da Capo Concert',
      link: '/Berichte#probenwochenende2025',
    },
    { imageUrl: 'assets/images/Lingenheel2.jpg', alt: 'Lingenheel', link: '/Berichte#hoffest2025' },
    {
      imageUrl: 'assets/images/IMG_1009.jpg',
      alt: 'Konzert Lingenau 2026',
      link: '/Berichte#konzertlingenau2026',
    },
    {
      imageUrl: 'assets/images/IMG_4273.JPG',
      alt: 'Belgien 2026',
      link: '/Berichte#konzertlingenau2026',
    },
  ];

  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'Adventskonzert_13_12_2026.pdf';
    link.click();
  }
}
