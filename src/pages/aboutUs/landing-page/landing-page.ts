import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { Footer } from "../../../components/footer/footer";
import { CustomFontHeader } from "../../../components/custom-font-header/custom-font-header";
@Component({
  selector: 'app-landing-page',
  imports: [NavigationComponent, Footer, CustomFontHeader],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage {

}
