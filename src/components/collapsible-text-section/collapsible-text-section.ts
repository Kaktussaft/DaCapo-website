import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapsible-text-section',
  imports: [CommonModule],
  templateUrl: './collapsible-text-section.html',
  styleUrl: './collapsible-text-section.css',
})
export class CollapsibleTextSection {
  title = input.required<string>();
  date = input<string>('');
  imageSrc = input<string>('');
  imageAlt = input<string>('Image');
  sectionKey = input.required<string>();

  // State
  isExpanded = false;

  toggleSection(): void {
    this.isExpanded = !this.isExpanded;
  }
}
