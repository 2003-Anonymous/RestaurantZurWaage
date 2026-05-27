import type { OpeningHourEntry, NavItem } from '@/types'

export const restaurant = {
  name: 'Restaurant zur Waage',
  shortName: 'zur Waage',
  tagline: 'Love for food · No food waste',
  taglineShort: 'Herzlich willkommen',
  description:
    'Im gemütlich eingerichteten Restaurant zur Waage freuen sich Esther Stieger und This Kundert mit feinen Gerichten und Getränken Sie zu verwöhnen. Der persönliche Kontakt zu unseren Gästen ist uns sehr wichtig.',
  descriptionShort:
    'Regionale Küche mit Herz – täglich frisch, saisonal und bewusst. Im Aargauer Seetal, Gontenschwil.',

  owners: {
    names: 'Esther Stieger & This Kundert',
    firstName1: 'Esther',
    firstName2: 'This',
    lastName1: 'Stieger',
    lastName2: 'Kundert',
    bio: 'Esther Stieger und This Kundert führen das Restaurant zur Waage mit Leidenschaft und Herzblut. Der persönliche Kontakt zu ihren Gästen steht dabei stets im Mittelpunkt.',
  },

  address: {
    street: 'Sonnegg 190',
    zip: '5728',
    city: 'Gontenschwil',
    region: 'Aargau',
    country: 'Schweiz',
    full: 'Sonnegg 190, 5728 Gontenschwil',
    mapsUrl: 'https://maps.google.com/?q=Sonnegg+190+5728+Gontenschwil',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.5!2d8.0!3d47.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR29udGVuc2Nod2ls!5e0!3m2!1sde!2sch!4v1234567890',
  },

  contact: {
    phone: '+41 62 773 31 50',
    phoneDisplay: '062 773 31 50',
    email: 'welcome@zur-waage.ch',
    website: 'www.zur-waage.ch',
  },

  openingHours: [
    { days: 'Montag & Dienstag', lunch: '11:00 – ca. 14:00', dinner: '18:00 – ca. 22:00' },
    { days: 'Mittwoch & Donnerstag', lunch: '11:00 – ca. 14:00', dinner: null },
    { days: 'Freitag', lunch: '11:00 – ca. 14:00', dinner: '18:00 – ca. 22:00' },
    { days: 'Samstag', lunch: null, dinner: '18:00 – ca. 22:00' },
    { days: 'Sonntag', lunch: '11:00 – ca. 16:00', dinner: null },
  ] as OpeningHourEntry[],

  openingHoursNote:
    'Das letzte Wochenende im Monat ist unser Restaurant ab Freitag 14:00 Uhr geschlossen.',
  reservationNote:
    'Aus organisatorischen Gründen freuen wir uns, wenn Sie telefonisch Ihre Reservation ankündigen. Bei Zeit & Kapazität gerne auch ohne Reservation.',

  payment: ['Maestro', 'Mastercard', 'Visa', 'PostCard'],

  features: [
    { icon: '🌿', title: 'Regional & Saisonal', text: 'Produkte aus der Region, liebevoll zubereitet' },
    { icon: '♻️', title: 'No Food Waste', text: 'Bewusster Umgang mit Lebensmitteln und Ressourcen' },
    { icon: '🎹', title: 'Live Musik', text: 'This Kundert am FEURICH-Flügel – ein besonderes Erlebnis' },
    { icon: '🍷', title: 'Feine Weine', text: 'Regionale und internationale Weine, viele im Offenausschank' },
  ],

  spaces: [
    {
      id: 'gaststube',
      name: 'Gaststube',
      description:
        'Gemütlich speisen in der Gaststube – das Herzstück unseres Restaurants mit rustikalem Charme und persönlicher Atmosphäre.',
    },
    {
      id: 'terrasse',
      name: 'Terrasse',
      description:
        'Bei schönem Wetter laden wir Sie auf unsere sonnige Terrasse ein. Genuss im Freien mit Blick ins Aargauer Seetal.',
    },
    {
      id: 'saal',
      name: 'Saal',
      description:
        'Abends lädt der Saal zum perfekten Dinner ein. Ideal für Gruppen und besondere Anlässe – mit dem FEURICH-Flügel als musikalischem Highlight.',
    },
    {
      id: 'saeli',
      name: 'Säli',
      description:
        'Unser Säli bietet den passenden Rahmen für Feste, Firmenfeiern und private Zusammenkünfte. Gerne erstellen wir eine individuelle Offerte.',
    },
  ],

  seo: {
    title: 'Restaurant zur Waage – Gontenschwil | Regionale Küche & Genuss',
    description:
      'Restaurant zur Waage in Gontenschwil. Täglich frische, regionale Küche von Esther Stieger & This Kundert. Mittagsmenü, Abendkarte, Säli für Events, FEURICH-Flügel. Reservieren Sie jetzt.',
    keywords:
      'Restaurant Gontenschwil, Restaurant zur Waage, Aargau Restaurant, regionale Küche, Mittagsmenü Aargau, Eventlocation Aargau',
    ogImage: '/og-image.jpg',
  },
} as const

export const navigation: NavItem[] = [
  {
    label: 'Essen & Trinken',
    href: '/essen',
    children: [
      { label: 'Mittagsmenü', href: '/essen#mittagsmenu' },
      { label: 'Abendkarte', href: '/essen#abendkarte' },
      { label: 'Saisonales', href: '/essen#saisonales' },
      { label: 'Wein', href: '/essen#wein' },
    ],
  },
  {
    label: 'Feiern & Gruppen',
    href: '/feiern',
    children: [
      { label: 'Der Säli', href: '/feiern#saeli' },
      { label: 'Gruppen', href: '/feiern#gruppen' },
      { label: 'Galerie', href: '/feiern#galerie' },
      { label: 'Anfrage stellen', href: '/feiern#anfrage' },
    ],
  },
  {
    label: 'Gutscheine',
    href: '/gutscheine',
  },
  {
    label: 'Aktuelles',
    href: '/aktuelles',
  },
  {
    label: 'Über uns',
    href: '/ueber-uns',
    children: [
      { label: 'Gastgeber', href: '/ueber-uns#gastgeber' },
      { label: 'Philosophie', href: '/ueber-uns#philosophie' },
      { label: 'Nachhaltigkeit', href: '/ueber-uns#nachhaltigkeit' },
      { label: 'Musik', href: '/ueber-uns#musik' },
    ],
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
    children: [
      { label: 'Öffnungszeiten', href: '/kontakt#oeffnungszeiten' },
      { label: 'Anfahrt', href: '/kontakt#anfahrt' },
      { label: 'Reservieren', href: '/kontakt#reservieren' },
      { label: 'FAQ', href: '/kontakt#faq' },
    ],
  },
]
