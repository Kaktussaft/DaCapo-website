import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ROUTES } from '../../app/constants/routes.constants';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class NavigationComponent {
  @Input() showLogo: boolean = true;
  @Input() logoSrc: string = 'assets/images/Logo.jpg';
  @Input() logoAlt: string = 'Logo';

  activeDropdown: string | null = null;
  mobileMenuOpen: boolean = false;
  activeMobileDropdown: string | null = null;

  constructor(private router: Router) {}

  navigationItems = [
    {
      label: 'ÜBER UNS',
      route: `/${ROUTES.DA_CAPO_AL_FINE}`,
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
      route: `/${ROUTES.REPORTS}`,
      key: 'gallery',
      dropdown: [
        { label: 'Berichte', route: `/${ROUTES.REPORTS}` },
        { label: 'Fotos', route: `/${ROUTES.PICTURES}` },
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

  openDropdown(key: string): void {
    this.activeDropdown = key;
  }

  closeDropdown(): void {
    this.activeDropdown = null;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.activeMobileDropdown = null;
    }
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : 'auto';
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.activeMobileDropdown = null;
    document.body.style.overflow = 'auto';
  }

  toggleMobileDropdown(key: string): void {
    this.activeMobileDropdown = this.activeMobileDropdown === key ? null : key;
  }

  handleMobileNavClick(item: any, event: Event): void {
    if (item.dropdown.length > 0) {
      event.preventDefault();
      this.toggleMobileDropdown(item.key);
    } else {
      this.closeMobileMenu();
    }
  }

  handleMobileDropdownItemClick(route: string): void {
    this.closeMobileMenu();
  }
}
