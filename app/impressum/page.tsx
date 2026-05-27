import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { restaurant } from '@/content/restaurant'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum des Restaurant zur Waage, Gontenschwil.',
  robots: { index: false },
}

export default function ImpressumPage() {
  return (
    <>
      <section className="pt-36 pb-16 border-b border-line">
        <div className="container-waage">
          <FadeIn>
            <p className="label-gold mb-4">Rechtliches</p>
            <h1 className="font-display text-5xl md:text-6xl font-light italic text-ink leading-tight">
              Impressum
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-waage">
          <FadeIn>
            <div className="max-w-2xl space-y-12 font-sans text-sm text-fog leading-relaxed">

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">Betreiber</h2>
                <div className="bg-cream-light border border-line p-6 space-y-1">
                  <p className="font-medium text-ink">{restaurant.name}</p>
                  <p>{restaurant.owners.names}</p>
                  <p>{restaurant.address.street}</p>
                  <p>{restaurant.address.zip} {restaurant.address.city}</p>
                  <p>{restaurant.address.country}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">Kontakt</h2>
                <div className="space-y-2">
                  <p>
                    <span className="text-warm">Telefon:</span>{' '}
                    <a
                      href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                      className="text-gold hover:underline"
                    >
                      {restaurant.contact.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <span className="text-warm">E-Mail:</span>{' '}
                    <a
                      href={`mailto:${restaurant.contact.email}`}
                      className="text-gold hover:underline"
                    >
                      {restaurant.contact.email}
                    </a>
                  </p>
                  <p>
                    <span className="text-warm">Website:</span>{' '}
                    <a
                      href={`https://${restaurant.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline"
                    >
                      {restaurant.contact.website}
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">Haftungsausschluss</h2>
                <p>
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
                  Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich
                  deren Betreiber verantwortlich.
                </p>
                <p>
                  Alle Inhalte dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung,
                  Bearbeitung, Verbreitung oder jede Art der Verwertung ausserhalb der Grenzen des
                  Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">Datenschutz</h2>
                <p>
                  Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
                  <Link href="/datenschutz" className="text-gold hover:underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>

              <p className="text-xs text-fog/50 pt-4 border-t border-line">
                © {new Date().getFullYear()} {restaurant.name} – Alle Rechte vorbehalten.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
