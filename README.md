# Restaurant zur Waage – Website

Produktionsreife Next.js 15 Website für das Restaurant zur Waage, Gontenschwil.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Accordion:** Radix UI
- **Fonts:** Cormorant Garamond + DM Sans (Google Fonts)

## Schnellstart

```bash
npm install
npm run dev
```

Die Website ist dann unter `http://localhost:3000` verfügbar.

## Projektstruktur

```
zur-waage/
├── app/                    # Next.js App Router Pages
│   ├── page.tsx            # Homepage
│   ├── essen/page.tsx      # Speisekarte (Mittag, Abend, Saison, Wein)
│   ├── feiern/page.tsx     # Feiern & Gruppen (Säli, Anfrage)
│   ├── gutscheine/page.tsx # Gutscheine bestellen
│   ├── aktuelles/page.tsx  # Sondermenüs & News
│   ├── ueber-uns/page.tsx  # Gastgeber, Philosophie, Musik
│   ├── kontakt/page.tsx    # Kontakt, Öffnungszeiten, FAQ, Reservation
│   ├── datenschutz/        # Datenschutzerklärung
│   ├── impressum/          # Impressum
│   ├── sitemap.ts          # Auto-generierte Sitemap
│   └── robots.ts           # robots.txt
│
├── components/
│   ├── layout/             # Header, Footer, MobileNav
│   ├── sections/           # Client-Formulare (EventRequestForm, etc.)
│   └── ui/                 # FadeIn, SectionTitle, ReservationCTA, Accordion
│
├── content/                # HIER INHALTE EDITIEREN
│   ├── restaurant.ts       # Name, Adresse, Öffnungszeiten, Navigation
│   ├── menu.ts             # Mittagsmenü, Abendkarte, Saisonales, Weine
│   ├── faq.ts              # FAQ-Einträge
│   └── events.ts           # Aktuelle Events & Sondermenüs
│
├── lib/utils.ts            # Hilfsfunktionen
└── types/index.ts          # TypeScript-Typen
```

## Inhalte editieren

Alle Inhalte sind in `/content/*.ts` zentralisiert:

### Restaurant-Stammdaten (`content/restaurant.ts`)
- Name, Adresse, Kontakt
- Öffnungszeiten
- Navigation
- SEO-Texte

### Speisekarte (`content/menu.ts`)
- Mittagsmenü-Info
- Abendkarte-Sektionen und Gerichte
- Saisonale Highlights
- Weinkarte

### FAQ (`content/faq.ts`)
- Fragen und Antworten

### Events (`content/events.ts`)
- Aktuelle Sondermenüs
- Saisonale Angebote


| Token | Wert | Verwendung |
|-------|------|------------|
| `cream` | `#F7F4ED` | Hintergrund |
| `ink` | `#1A1714` | Text |
| `forest` | `#2B4030` | CTAs, Header |
| `gold` | `#9C7D3C` | Akzente, Labels |
| `fog` | `#8E8677` | Untertexte |

## Formulare / Backend

Die Formulare (Reservation, Veranstaltungsanfrage, Gutscheine) benötigen für den Produktionsbetrieb
einen Backend-Endpoint. Empfohlen:

- **Resend** oder **SendGrid** für E-Mail-Versand
- Next.js API Routes unter `app/api/`

Aktuell simulieren die Formulare den Submit (state: submitted = true).
