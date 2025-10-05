import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { Footer } from "../../../components/footer/footer";
import { CustomFontHeader } from '../../../components/custom-font-header/custom-font-header';

@Component({
  selector: 'app-executive-committee-page',
  imports: [NavigationComponent, Footer, CustomFontHeader],
  templateUrl: './executive-committee-page.html',
  styleUrl: './executive-committee-page.css'
})
export class ExecutiveCommitteePage {

}
