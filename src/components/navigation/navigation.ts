import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
      route: '/',
      key: 'about',
      dropdown: [
        { label: 'Da Capo al Fine', route: '/Da Capo al Fine' },
        { label: 'Chorleiterin', route: '/Chorleiterin' },
        { label: 'Vorstand', route: '/Vorstand' },
        { label: 'Geschichte', route: '/Geschichte' },
      ],
    },
    {
      label: 'GALERIE',
      route: '/gallery',
      key: 'gallery',
      dropdown: [
        { label: 'Fotos', route: '/Fotos' },
        { label: 'Berichte', route: '/Berichte' },
      ],
    },
    {
      label: 'TERMINE',
      route: '/Termine',
      key: 'appointments',
      dropdown: [],
    },
    {
      label: 'SPONSOREN',
      route: '/SPONSOREN',
      key: 'sponsors',
      dropdown: [],
    },
    {
      label: 'KONTAKT',
      route: '/KONTAKT',
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
