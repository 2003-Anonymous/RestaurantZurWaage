import type { Metadata } from 'next'
import { FadeIn } from '@/components/ui/FadeIn'
import { restaurant } from '@/content/restaurant'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung des Restaurant zur Waage, Gontenschwil.',
  robots: { index: false },
}

export default function DatenschutzPage() {
  return (
    <>
      <section className="pt-36 pb-16 border-b border-line">
        <div className="container-waage">
          <FadeIn>
            <p className="label-gold mb-4">Rechtliches</p>
            <h1 className="font-display text-5xl md:text-6xl font-light italic text-ink leading-tight">
              Datenschutzerklärung
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-waage">
          <FadeIn>
            <div className="max-w-3xl space-y-12 font-sans text-sm text-fog leading-relaxed">

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">
                  1. Verantwortliche Stelle
                </h2>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-cream-light border border-line p-6 space-y-1">
                  <p className="font-medium text-ink">{restaurant.name}</p>
                  <p>{restaurant.owners.names}</p>
                  <p>{restaurant.address.street}</p>
                  <p>{restaurant.address.zip} {restaurant.address.city}</p>
                  <p>
                    <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`} className="text-gold hover:underline">
                      {restaurant.contact.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${restaurant.contact.email}`} className="text-gold hover:underline">
                      {restaurant.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">
                  2. Erhebung und Verarbeitung von Daten
                </h2>
                <p>
                  Wir erheben personenbezogene Daten, wenn Sie uns über das Kontaktformular, das
                  Reservationsformular oder per E-Mail kontaktieren. Diese Daten umfassen typischerweise:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Vor- und Nachname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Ihre Nachricht oder Anfrage</li>
                </ul>
                <p>
                  Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Kommunikation
                  mit Ihnen verwendet. Wir geben Ihre Daten nicht an Dritte weiter.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">
                  3. Zweck der Datenverarbeitung
                </h2>
                <p>Wir verwenden Ihre Daten für folgende Zwecke:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Bearbeitung von Reservationsanfragen</li>
                  <li>Beantwortung von Kontaktanfragen</li>
                  <li>Abwicklung von Gutscheinbestellungen</li>
                  <li>Bearbeitung von Veranstaltungsanfragen</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">
                  4. Speicherdauer
                </h2>
                <p>
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie es zur Erfüllung des
                  jeweiligen Zwecks notwendig ist, oder bis Sie uns zur Löschung auffordern.
                  Gesetzliche Aufbewahrungsfristen bleiben vorbehalten.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">
                  5. Cookies und Tracking
                </h2>
                <p>
                  Diese Website verwendet keine Tracking-Cookies und verzichtet auf den Einsatz von
                  Analyse-Tools wie Google Analytics. Es werden ausschliesslich technisch notwendige
                  Mechanismen eingesetzt, um die Funktionalität der Website sicherzustellen.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">
                  6. Google Maps
                </h2>
                <p>
                  Diese Website verwendet Google Maps zur Darstellung des Standorts. Bei der Nutzung
                  von Google Maps werden Daten an Google LLC übertragen. Weitere Informationen finden
                  Sie in der Datenschutzerklärung von Google:{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    policies.google.com/privacy
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">
                  7. Ihre Rechte
                </h2>
                <p>Sie haben das Recht auf:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Auskunft über die von uns gespeicherten Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten</li>
                  <li>Einschränkung der Verarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                  <li>Widerspruch gegen die Verarbeitung</li>
                </ul>
                <p>
                  Wenden Sie sich dazu an:{' '}
                  <a href={`mailto:${restaurant.contact.email}`} className="text-gold hover:underline">
                    {restaurant.contact.email}
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-3xl font-normal text-ink">
                  8. Änderungen
                </h2>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern. Die jeweils
                  aktuelle Version ist auf dieser Seite verfügbar.
                </p>
                <p className="text-xs text-fog/60">Stand: Januar 2025</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
