import { Routes } from '@angular/router';
import { LandingPage } from '../pages/aboutUs/landing-page/landing-page';
import { DaCapoAlFinePage } from '../pages/aboutUs/da-capo-al-fine-page/da-capo-al-fine-page';
import { ChoirDirectorPage } from '../pages/aboutUs/choir-director-page/choir-director-page';
import { ExecutiveCommitteePage } from '../pages/aboutUs/executive-committee-page/executive-committee-page';
import { HistoryPage } from '../pages/aboutUs/history-page/history-page';
import { ReportPage } from '../pages/gallery/report-page/report-page';
import { PicturePage } from '../pages/gallery/picture-page/picture-page';
import { AppointmentsPage } from '../pages/appointments-page/appointments-page';
import { SponsorPage } from '../pages/sponsor-page/sponsor-page';
import { ContactPage } from '../pages/contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'Da Capo al Fine', component: DaCapoAlFinePage },
  { path: 'Chorleiterin', component: ChoirDirectorPage },
  { path: 'Vorstand', component: ExecutiveCommitteePage },
  { path: 'Geschichte', component: HistoryPage },
  { path: 'Berichte', component: ReportPage },
  { path: 'Fotos', component: PicturePage },
  { path: 'Termine', component: AppointmentsPage },
  { path: 'SPONSOREN', component: SponsorPage },
  { path: 'KONTAKT', component: ContactPage },
  { path: '**', redirectTo: '' },
];

