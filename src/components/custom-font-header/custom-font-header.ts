import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-font-header',
  imports: [],
  templateUrl: './custom-font-header.html',
  styleUrl: './custom-font-header.css'
})
export class CustomFontHeader {

  @Input() title: string = '[Header Title]';
}
