import { Component } from '@angular/core';
import { Footer } from "../../../components/footer/footer";
import { NavigationComponent } from "../../../components/navigation/navigation";
import { CustomFontHeader } from '../../../components/custom-font-header/custom-font-header';

@Component({
  selector: 'app-history-page',
  imports: [Footer, NavigationComponent, CustomFontHeader],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css'
})
export class HistoryPage {

}
