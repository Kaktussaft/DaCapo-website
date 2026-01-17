import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { Footer } from "../../../components/footer/footer";
import { PhotoCarouselComponent, CarouselItem } from "../../../components/photo-carousel/photo-carousel";
@Component({
  selector: 'app-landing-page',
  imports: [NavigationComponent, Footer, PhotoCarouselComponent],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css'],
})
export class LandingPage {
  carouselItems: CarouselItem[] = [
    { imageUrl: 'assets/images/2025_dacapo.jpg', alt: 'Da Capo 2025' },
    { imageUrl: 'assets/images/2025_probenwochenende.jpg', alt: 'Da Capo Concert' },
    { imageUrl: 'assets/images/2025_dacapo.jpg', alt: 'Da Capo Performance' },
  ];
}
