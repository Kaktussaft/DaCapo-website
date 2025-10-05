import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";
import { CustomFontHeader } from '../../components/custom-font-header/custom-font-header';

@Component({
  selector: 'app-sponsor-page',
  imports: [NavigationComponent, Footer, CustomFontHeader],
  templateUrl: './sponsor-page.html',
  styleUrl: './sponsor-page.css'
})
export class SponsorPage {

}
