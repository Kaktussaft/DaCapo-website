import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-appointments-page',
  imports: [NavigationComponent, Footer],
  templateUrl: './appointments-page.html',
  styleUrl: './appointments-page.css'
})
export class AppointmentsPage {

}
