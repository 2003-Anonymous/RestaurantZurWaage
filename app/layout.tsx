import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { restaurant } from '@/content/restaurant'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zur-waage.ch'),
  title: {
    default: restaurant.seo.title,
    template: `%s | Restaurant zur Waage`,
  },
  description: restaurant.seo.description,
  keywords: restaurant.seo.keywords,
  authors: [{ name: 'Restaurant zur Waage' }],
  creator: 'Restaurant zur Waage',
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://zur-waage.ch',
    siteName: 'Restaurant zur Waage',
    title: restaurant.seo.title,
    description: restaurant.seo.description,
    images: [
      {
        url: restaurant.seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'Restaurant zur Waage – Gontenschwil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: restaurant.seo.title,
    description: restaurant.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://zur-waage.ch',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurant.name,
  description: restaurant.description,
  url: 'https://zur-waage.ch',
  telephone: restaurant.contact.phone,
  email: restaurant.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: restaurant.address.street,
    postalCode: restaurant.address.zip,
    addressLocality: restaurant.address.city,
    addressRegion: restaurant.address.region,
    addressCountry: 'CH',
  },
  servesCuisine: ['Schweizer Küche', 'Regionale Küche', 'Saisonale Küche'],
  priceRange: '$$',
  paymentAccepted: restaurant.payment.join(', '),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday'],
      opens: '11:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday'],
      opens: '11:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '11:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '18:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '11:00',
      closes: '16:00',
    },
  ],
  hasMenu: 'https://zur-waage.ch/essen',
  acceptsReservations: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-cream text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
