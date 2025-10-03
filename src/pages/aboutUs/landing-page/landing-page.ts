import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { Footer } from "../../../components/footer/footer";
@Component({
  selector: 'app-landing-page',
  imports: [NavigationComponent, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
