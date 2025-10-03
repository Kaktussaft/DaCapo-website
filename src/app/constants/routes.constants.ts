export const ROUTES = {
  HOME: '',
  APPOINTMENTS: 'Termine',
  SPONSORS: 'SPONSOREN',
  CONTACT: 'KONTAKT',

  DA_CAPO_AL_FINE: 'Da Capo al Fine',
  CHOIR_DIRECTOR: 'Chorleiterin',
  EXECUTIVE_COMMITTEE: 'Vorstand',
  HISTORY: 'Geschichte',

  REPORTS: 'Berichte',
  PICTURES: 'Fotos',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
