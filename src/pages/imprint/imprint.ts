import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-imprint',
  imports: [NavigationComponent, Footer],
  templateUrl: './imprint.html',
  styleUrl: './imprint.css'
})
export class Imprint {

}
