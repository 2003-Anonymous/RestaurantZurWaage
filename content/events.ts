import type { EventItem } from '@/types'

export const currentEvents: EventItem[] = [
  {
    id: 'glarner-menu',
    title: 'Glarner 4-Gang-Menü',
    subtitle: 'Auf Vorbestellung – ganzjährig',
    description:
      'Nach dem grossen Erfolg unseres Glarner Abends bieten wir auf Vorbestellung ein exklusives 4-Gang-Menü mit Glarner Spezialitäten an. Mit der hausgemachten Chalber-Wurst als Herzstück und weiteren regionalen Köstlichkeiten erwartet Sie ein unvergesslicher Abend.',
    price: 'CHF 49.–',
    priceNote: 'pro Person',
    requiresReservation: true,
  },
  {
    id: 'rehruecken-menu',
    title: '4-Gang-Menü mit Rehrücken',
    subtitle: '1. November – Mitte Dezember',
    description:
      'In der dunklen Jahreszeit servieren wir abends ein festliches 4-Gang-Menü mit zartem Rehrücken – oder für Nicht-Wild-Esser eine ebenso delikate Alternative. Dazu passen unsere ausgewählten Weine perfekt.',
    price: 'CHF 65.–',
    priceNote: 'pro Person',
    dateRange: '1. November – Mitte Dezember',
    requiresReservation: true,
  },
]

export const eventsInfo = {
  title: 'Aktuelles & Sondermenüs',
  description:
    'Wir werden immer wieder von unseren Gästen nach besonderen Abenden gefragt. Hier finden Sie unsere aktuellen Sonderangebote und Voranzeigen. Auf Reservation freuen wir uns schon heute.',
  reservationHint: 'Für alle Sondermenüs ist eine Vorbestellung erforderlich. Tel. 062 773 31 50',
}
