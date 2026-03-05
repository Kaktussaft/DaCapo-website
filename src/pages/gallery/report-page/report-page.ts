import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from "../../../components/navigation/navigation";
import { CommonModule, ViewportScroller } from '@angular/common';
import { CollapsibleTextSection } from '../../../components/collapsible-text-section/collapsible-text-section';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-report-page',
  imports: [NavigationComponent, CommonModule, CollapsibleTextSection],
  templateUrl: './report-page.html',
  styleUrl: './report-page.css'
})
export class ReportPage implements OnInit {
  expandedSections: { [key: string]: boolean } = {
    'probenwochenende2025': false,
    'voicesOfSpirit': false,
    'hoffest2025': false
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        // Expand the section
        this.expandedSections[fragment] = true;

        // Scroll to the fragment after a short delay to ensure DOM is updated
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 100);
      }
    });
  }
}
