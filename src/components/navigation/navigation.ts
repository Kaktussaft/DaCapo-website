import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../app/constants/routes.constants';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class NavigationComponent {
  @Input() showLogo: boolean = true;
  @Input() logoSrc: string = '/Logo.jpg';
  @Input() logoAlt: string = 'Logo';

  activeDropdown: string | null = null;

  navigationItems = [
    {
      label: 'ÜBER UNS',
      // route: `/${ROUTES.HOME}`,
      key: 'about',
      dropdown: [
        { label: 'Da Capo al Fine', route: `/${ROUTES.DA_CAPO_AL_FINE}` },
        { label: 'Chorleiterin', route: `/${ROUTES.CHOIR_DIRECTOR}` },
        { label: 'Vorstand', route: `/${ROUTES.EXECUTIVE_COMMITTEE}` },
        { label: 'Geschichte', route: `/${ROUTES.HISTORY}` },
      ],
    },
    {
      label: 'GALERIE',
      // route: '/gallery',
      key: 'gallery',
      dropdown: [
        { label: 'Fotos', route: `/${ROUTES.PICTURES}` },
        { label: 'Berichte', route: `/${ROUTES.REPORTS}` },
      ],
    },
    {
      label: 'TERMINE',
      route: `/${ROUTES.APPOINTMENTS}`,
      key: 'appointments',
      dropdown: [],
    },
    {
      label: 'SPONSOREN',
      route: `/${ROUTES.SPONSORS}`,
      key: 'sponsors',
      dropdown: [],
    },
    {
      label: 'KONTAKT',
      route: `/${ROUTES.CONTACT}`,
      key: 'contact',
      dropdown: [],
    },
  ];

  toggleDropdown(key: string): void {
    this.activeDropdown = this.activeDropdown === key ? null : key;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }
}
