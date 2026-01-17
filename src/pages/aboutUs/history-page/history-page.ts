import { Component } from '@angular/core';
import { Footer } from "../../../components/footer/footer";
import { NavigationComponent } from "../../../components/navigation/navigation";


@Component({
  selector: 'app-history-page',
  imports: [Footer, NavigationComponent],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css'
})
export class HistoryPage {

}
