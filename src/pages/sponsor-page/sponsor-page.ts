import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-sponsor-page',
  imports: [NavigationComponent, Footer],
  templateUrl: './sponsor-page.html',
  styleUrl: './sponsor-page.css'
})
export class SponsorPage {

}
