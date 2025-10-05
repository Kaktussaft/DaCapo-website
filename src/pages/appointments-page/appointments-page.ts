import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";
import { CustomFontHeader } from '../../components/custom-font-header/custom-font-header';

@Component({
  selector: 'app-appointments-page',
  imports: [NavigationComponent, Footer, CustomFontHeader],
  templateUrl: './appointments-page.html',
  styleUrl: './appointments-page.css'
})
export class AppointmentsPage {

}
