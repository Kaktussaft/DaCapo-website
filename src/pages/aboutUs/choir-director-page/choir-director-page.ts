import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { Footer } from "../../../components/footer/footer";
import {CustomFontHeader} from "../../../components/custom-font-header/custom-font-header"

@Component({
  selector: 'app-choir-director-page',
  imports: [NavigationComponent, Footer, CustomFontHeader],
  templateUrl: './choir-director-page.html',
  styleUrl: './choir-director-page.css'
})
export class ChoirDirectorPage {

}
