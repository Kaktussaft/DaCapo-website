import { Routes } from '@angular/router';
import { LandingPage } from '../pages/aboutUs/landing-page/landing-page';
import { DaCapoAlFinePage } from '../pages/aboutUs/da-capo-al-fine-page/da-capo-al-fine-page';
import { ChoirDirectorPage } from '../pages/aboutUs/choir-director-page/choir-director-page';
import { ExecutiveCommitteePage } from '../pages/aboutUs/executive-committee-page/executive-committee-page';
import { ReportPage } from '../pages/gallery/report-page/report-page';
import { PicturePage } from '../pages/gallery/picture-page/picture-page';
import { AppointmentsPage } from '../pages/appointments-page/appointments-page';
import { SponsorPage } from '../pages/sponsor-page/sponsor-page';
import { ContactPage } from '../pages/contact-page/contact-page';
import { ROUTES } from './constants/routes.constants';

export const routes: Routes = [
  { path: ROUTES.HOME, component: LandingPage },
  { path: ROUTES.DA_CAPO_AL_FINE, component: DaCapoAlFinePage },
  { path: ROUTES.CHOIR_DIRECTOR, component: ChoirDirectorPage },
  { path: ROUTES.EXECUTIVE_COMMITTEE, component: ExecutiveCommitteePage },
  { path: ROUTES.REPORTS, component: ReportPage },
  { path: ROUTES.PICTURES, component: PicturePage },
  { path: ROUTES.APPOINTMENTS, component: AppointmentsPage },
  { path: ROUTES.SPONSORS, component: SponsorPage },
  { path: ROUTES.CONTACT, component: ContactPage },
  { path: '**', redirectTo: ROUTES.HOME },
];
