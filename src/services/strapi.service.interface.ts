//////////////////////////////////////////////////////////////////
// About us Page
//////////////////////////////////////////////////////////////////

export interface LandingPageContent {
  documentId: string;
  Header_WasWirMachen: string;
  Content_WasWirMachen: string;
  Header_Aktuelles: string;
  Content_Aktuelles: string;
  Concerts?: Concert[];
}

export interface Concert {
  documidentId: string;
  ConcertTitle: string;
  ConcertDate: string;
  Location: string;
}

export interface CarouselEntry {
  url: string;
  alternativeText: string;
}

export interface CarouselImage {
  CarouselEntries: CarouselEntry[];
}

//////////////////////////////////////////////////////////////////
// DaCapoAlFine-Page
//////////////////////////////////////////////////////////////////

export interface Mitglieder {
  MemberEntries: Namen_Getrennt_durch_Strichpunkt[];
}

export interface Namen_Getrennt_durch_Strichpunkt {
  documidentId: string;
  ConcertTitle: string;
  ConcertDate: string;
  Location: string;
}

export interface DaCapoAlFine_Highlight {
  documentId: string;
  Konzerte: string;
  Wettbewerbe: string;
  Coachings: string;
  Festivals: string;
}

//////////////////////////////////////////////////////////////////
// Galery-Page
//////////////////////////////////////////////////////////////////
export interface Fotogalerie_Eintrag{
  documentId: string;
  Titel: string;
  Location_Datum: string;
  Bilder: Galerie_Bilder[];
}
export interface Galerie_Bilder{
  url: string;
  alternativeText:  string;
}

//////////////////////////////////////////////////////////////////
// Report-Page
//////////////////////////////////////////////////////////////////

export interface Bericht_Eintrag {
  documentId: string;
  Bericht_Titel: string;
  Location_Datum: string;
  Bericht_Inhalt: string;
  Bericht_Bild: Bericht_Bild;
}
export interface Bericht_Bild {
  url: string;
  alternativeText: string;
}

//////////////////////////////////////////////////////////////////
// Sponsor-Page
//////////////////////////////////////////////////////////////////

export interface Sponsoren{
documentId: string;
Logos: Sponsor_Logo[];
Noten_Sponsoren: string;
}

export interface Sponsor_Logo  {
  url: string;
  alternativeText: string;
}
