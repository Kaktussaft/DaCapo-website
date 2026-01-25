import { Component } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { CommonModule } from '@angular/common';
import { CollapsibleTextSection } from '../../../components/collapsible-text-section/collapsible-text-section';


@Component({
  selector: 'app-report-page',
  imports: [NavigationComponent, CommonModule, CollapsibleTextSection],
  templateUrl: './report-page.html',
  styleUrl: './report-page.css'
})
export class ReportPage {
  expandedSections: { [key: string]: boolean } = {
    'probenwochenende2025': false,
    'voicesOfSpirit': false
  };

  toggleSection(sectionKey: string): void {
    this.expandedSections[sectionKey] = !this.expandedSections[sectionKey];
  }

  isExpanded(sectionKey: string): boolean {
    return this.expandedSections[sectionKey];
  }
}
