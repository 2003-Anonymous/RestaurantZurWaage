import type { MenuSection, WineEntry } from '@/types'

export const mittagsmenuInfo = {
  label: 'Mittagsmenü',
  title: 'Täglich frisch & wechselnd',
  subtitle: 'Täglich frisch & wechselnd',
  description:
    'Täglich bereiten wir wechselnde Fleisch- und vegetarische Menüs für jedermann zu. Unsere Mittagsmenüs entstehen aus frischen, regionalen Zutaten – was die Saison hergibt, kommt auf den Tisch.',
  note: 'Das aktuelle Tagesmenü erfahren Sie telefonisch oder direkt bei uns vor Ort. Wir empfehlen eine kurze Anmeldung.',
  typicalPrice: 'CHF 18.50 – 26.–',
  includes: ['Suppe oder Salat', 'Hauptgang', 'Kaffee optional'],
  servingTimes: 'Mo – Fr: 11:00 bis ca. 14:00 Uhr / So: 11:00 bis ca. 16:00 Uhr',
}

export const abendkarte: MenuSection[] = [
  {
    id: 'vorspeisen',
    title: 'Vorspeisen',
    subtitle: 'Kleiner Auftakt',
    items: [
      {
        id: 'vs1',
        name: 'Hausgemachte Suppe',
        description: 'Tagessuppe nach Art des Hauses, frisch zubereitet',
        price: 'CHF 8.–',
        tags: ['Täglich wechselnd'],
      },
      {
        id: 'vs2',
        name: 'Gemischter Salat',
        description: 'Frische Blattsalate mit Hausdressing, Saison-Gemüse',
        price: 'CHF 12.50',
        isVegetarian: true,
      },
      {
        id: 'vs3',
        name: 'Bündnerfleisch & Käse',
        description: 'Hausschnitt, Brot aus der Region',
        price: 'CHF 16.–',
      },
      {
        id: 'vs4',
        name: 'Glarner Kalbsbratwurst-Happen',
        description: 'Knusprig angebraten, mit hausgemachter Senfsauce und frischem Brot',
        price: 'CHF 14.50',
        isSeasonal: true,
      },
    ],
  },
  {
    id: 'hauptgaenge',
    title: 'Hauptgänge',
    subtitle: 'Herzstück des Abends',
    items: [
      {
        id: 'hg1',
        name: 'Zürich Geschnetzeltes',
        description: 'Klassisch mit Champignons, Rösti, Saison-Gemüse – hausgemacht',
        price: 'CHF 38.–',
      },
      {
        id: 'hg2',
        name: 'Entrecôte vom Schweizer Rind',
        description: 'Reifgereift, mit Kräuterbutter, Pommes frites oder Rösti',
        price: 'CHF 46.–',
      },
      {
        id: 'hg3',
        name: 'Forellenfilet aus dem Seetal',
        description: 'Auf Gemüsebett, Zitronenbutter, Kartoffelstock',
        price: 'CHF 34.–',
        isSeasonal: true,
      },
      {
        id: 'hg4',
        name: 'Gemüsecurry mit Basmatireis',
        description: 'Saisonales Gemüse, hausgemachte Currysauce, frische Kräuter',
        price: 'CHF 28.–',
        isVegan: true,
        isVegetarian: true,
      },
      {
        id: 'hg5',
        name: 'Glarner Chalber-Wurst',
        description: 'Hausgemacht, mit Kartoffelpüree, Sauerkraut und Senf – unsere Hausspezialität',
        price: 'CHF 32.–',
        tags: ['Hausspezialität'],
      },
      {
        id: 'hg6',
        name: 'Cordon Bleu vom Schweizer Kalb',
        description: 'Handbatiert, mit Pommes frites und Saison-Salat',
        price: 'CHF 42.–',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'Süsser Abschluss',
    items: [
      {
        id: 'ds1',
        name: 'Crème brûlée',
        description: 'Klassisch, mit frischen Beeren',
        price: 'CHF 9.–',
        isVegetarian: true,
      },
      {
        id: 'ds2',
        name: 'Hausgemachter Apfelstrudel',
        description: 'Warm, mit Vanillesauce – Omas Rezept',
        price: 'CHF 10.–',
        isVegetarian: true,
      },
      {
        id: 'ds3',
        name: 'Käseauswahl',
        description: 'Schweizer Käse der Saison, Trauben, Feigensenf, Brot',
        price: 'CHF 16.–',
        isVegetarian: true,
      },
    ],
  },
]

export const saisonalesMenu = {
  title: 'Saisonales',
  subtitle: 'Was die Jahreszeit bringt',
  description:
    'Unser Angebot richtet sich nach dem Rhythmus der Natur. Saisonale Produkte aus der Region Aargau und dem Glarnerland stehen im Mittelpunkt. Diese Gerichte sind zeitlich begrenzt – geniessen Sie sie, solange sie verfügbar sind.',
  highlights: [
    {
      id: 'sa1',
      name: 'Glarner 4-Gang-Menu',
      description:
        'Auf Vorbestellung servieren wir abends ein exklusives 4-Gang-Menü mit Glarner Spezialitäten – inspiriert durch unseren beliebten Glarner Abend mit Chalber-Wurst.',
      price: 'CHF 49.–',
      priceNote: 'pro Person, auf Vorbestellung',
      requiresReservation: true,
    },
    {
      id: 'sa2',
      name: '4-Gang-Menu mit Rehrücken',
      description:
        'Vom 1. November bis Mitte Dezember: Ein festliches 4-Gang-Menü mit zartem Rehrücken oder einer vegetarischen Alternative – dazu eine Alternative für Nicht-Wild-Esser.',
      price: 'CHF 65.–',
      priceNote: 'pro Person, auf Vorbestellung',
      dateRange: '1. November – Mitte Dezember',
      requiresReservation: true,
    },
    {
      id: 'sa3',
      name: 'Spargelsaison',
      description:
        'Weisser und grüner Spargel aus der Region – gekocht, gebraten oder im Risotto. Frühling pur auf dem Teller.',
      price: 'auf Anfrage',
      dateRange: 'Mai – Juni',
      isSeasonal: true,
    },
  ],
}

export const weine: WineEntry[] = [
  // Weissweine
  {
    name: 'Aargauer Müller-Thurgau',
    region: 'Aargau, Schweiz',
    type: 'Weiss',
    description: 'Leicht fruchtig, frisch mit feiner Säure – unser Hauswein im Offenausschank',
    priceGlass: 'CHF 6.–',
    priceBottle: 'CHF 34.–',
    isOpen: true,
  },
  {
    name: 'Fendant du Valais',
    region: 'Wallis, Schweiz',
    type: 'Weiss',
    description: 'Trocken, mineralisch, mit feinem Blumenduft. Klassischer Walliser Wein.',
    priceGlass: 'CHF 7.50',
    priceBottle: 'CHF 42.–',
    isOpen: true,
  },
  {
    name: 'Grüner Veltliner Smaragd',
    region: 'Wachau, Österreich',
    type: 'Weiss',
    description: 'Elegant, vielschichtig – Pfeffer- und Kräuternoten, langer Abgang.',
    priceBottle: 'CHF 54.–',
  },
  {
    name: 'Chablis 1er Cru',
    region: 'Burgund, Frankreich',
    type: 'Weiss',
    description: 'Klassisch mineralisch, cremige Textur, Zitrusnoten.',
    priceBottle: 'CHF 68.–',
  },
  // Rotweine
  {
    name: 'Blauburgunder Aargau',
    region: 'Aargau, Schweiz',
    type: 'Rot',
    description: 'Seidiger Pinot Noir aus der Region – kirschig, samtig, regional verwurzelt.',
    priceGlass: 'CHF 7.–',
    priceBottle: 'CHF 40.–',
    isOpen: true,
  },
  {
    name: 'Dôle du Valais',
    region: 'Wallis, Schweiz',
    type: 'Rot',
    description: 'Kräftig und würzig – Schweizer Klassiker aus Pinot Noir und Gamay.',
    priceGlass: 'CHF 7.50',
    priceBottle: 'CHF 44.–',
    isOpen: true,
  },
  {
    name: 'Brunello di Montalcino DOCG',
    region: 'Toskana, Italien',
    type: 'Rot',
    description: 'Grosser Sangiovese – komplex, tanninreich, lagerfähig.',
    priceBottle: 'CHF 89.–',
  },
  {
    name: 'Côtes du Rhône Villages',
    region: 'Rhône, Frankreich',
    type: 'Rot',
    description: 'Vollmundig, würzige Kräuternoten, Grenache-Syrah-Cuvée.',
    priceBottle: 'CHF 52.–',
  },
  // Rosé
  {
    name: 'Rosé de Provence',
    region: 'Provence, Frankreich',
    type: 'Rosé',
    description: 'Blass-lachsfarben, trocken, frisch – perfekt zur Terrasse.',
    priceGlass: 'CHF 7.–',
    priceBottle: 'CHF 42.–',
    isOpen: true,
  },
]

export const weinNote =
  'Unsere Weinkarte umfasst regionale und internationale Spezialitäten. Viele Weine bieten wir auch im Offenausschank an. Lassen Sie sich von unserem Team beraten – wir helfen Ihnen gerne bei der Wahl.'
