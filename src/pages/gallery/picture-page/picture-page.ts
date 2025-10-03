import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { Footer } from "../../../components/footer/footer";

@Component({
  selector: 'app-picture-page',
  imports: [NavigationComponent, Footer],
  templateUrl: './picture-page.html',
  styleUrl: './picture-page.css'
})
export class PicturePage {

}
