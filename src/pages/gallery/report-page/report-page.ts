import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { Footer } from "../../../components/footer/footer";
import { CustomFontHeader } from '../../../components/custom-font-header/custom-font-header';

@Component({
  selector: 'app-report-page',
  imports: [NavigationComponent, Footer, CustomFontHeader],
  templateUrl: './report-page.html',
  styleUrl: './report-page.css'
})
export class ReportPage {

}
