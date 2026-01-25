import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../../components/navigation/navigation';

@Component({
  selector: 'app-contact-page',
  imports: [NavigationComponent, FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  name: string = '';
  message: string = '';

  sendEmail() {
    if (this.name && this.message) {
      const subject = encodeURIComponent(`Kontaktanfrage von ${this.name}`);
      const body = encodeURIComponent(
        `Name: ${this.name}\n\nNachricht:\n${this.message}`,
      );
      window.location.href = `mailto:jugendchor.dacapoalfine@gmail.com?subject=${subject}&body=${body}`;
    } else {
        alert('Bitte Name und Nachricht eingeben.');
    }
  }
}
