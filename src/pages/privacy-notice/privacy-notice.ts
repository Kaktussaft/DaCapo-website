import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-privacy-notice',
  imports: [NavigationComponent, Footer],
  templateUrl: './privacy-notice.html',
  styleUrl: './privacy-notice.css'
})
export class PrivacyNotice {

}
