import { Component, input, model } from '@angular/core';
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

  // Two-way binding for expanded state
  isExpanded = model<boolean>(false);

  toggleSection(): void {
    this.isExpanded.set(!this.isExpanded());
  }
}
