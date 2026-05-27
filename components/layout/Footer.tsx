import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { restaurant, navigation } from '@/content/restaurant'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream-light">
      {/* Main footer */}
      <div className="container-waage py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-5 lg:col-span-1">
            <div>
              <p className="font-display text-3xl italic font-light text-cream-light">zur Waage</p>
              <p className="text-xs uppercase tracking-[0.22em] text-fog font-sans mt-1">
                Restaurant · Gontenschwil
              </p>
            </div>
            <p className="font-sans text-sm text-cream-light/60 leading-relaxed">
              {restaurant.descriptionShort}
            </p>
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm font-sans text-cream-light/70 hover:text-gold transition-colors group"
              >
                <Phone size={14} className="text-gold shrink-0" />
                {restaurant.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${restaurant.contact.email}`}
                className="flex items-center gap-3 text-sm font-sans text-cream-light/70 hover:text-gold transition-colors"
              >
                <Mail size={14} className="text-gold shrink-0" />
                {restaurant.contact.email}
              </a>
              <a
                href={restaurant.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm font-sans text-cream-light/70 hover:text-gold transition-colors"
              >
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span>
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.zip} {restaurant.address.city}
                </span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.22em] font-sans font-medium text-gold">
              Navigation
            </h3>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-sans text-cream-light/70 hover:text-cream-light transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Opening Hours */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.22em] font-sans font-medium text-gold flex items-center gap-2">
              <Clock size={12} />
              Öffnungszeiten
            </h3>
            <div className="space-y-2.5">
              {restaurant.openingHours.map((entry, i) => (
                <div key={i} className="text-sm font-sans">
                  <p className="text-cream-light/90 font-medium">{entry.days}</p>
                  <div className="text-cream-light/50 text-xs mt-0.5 space-y-0.5">
                    {entry.lunch && <p>Mittag: {entry.lunch}</p>}
                    {entry.dinner && <p>Abend: {entry.dinner}</p>}
                    {!entry.lunch && !entry.dinner && <p>Geschlossen</p>}
                    {!entry.lunch && entry.dinner && !entry.lunch && (
                      <p className="text-fog">Mittag: –</p>
                    )}
                    {entry.lunch && !entry.dinner && (
                      <p className="text-fog">Abend: geschlossen</p>
                    )}
                  </div>
                </div>
              ))}
              <p className="text-xs text-cream-light/40 leading-snug pt-2 border-t border-cream-light/10">
                {restaurant.openingHoursNote}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.22em] font-sans font-medium text-gold">
              Schnellzugriff
            </h3>
            <div className="space-y-3">
              <Link
                href="/kontakt#reservieren"
                className="block text-sm font-sans text-cream-light/70 hover:text-cream-light transition-colors"
              >
                → Tisch reservieren
              </Link>
              <Link
                href="/essen#mittagsmenu"
                className="block text-sm font-sans text-cream-light/70 hover:text-cream-light transition-colors"
              >
                → Mittagsmenü
              </Link>
              <Link
                href="/feiern"
                className="block text-sm font-sans text-cream-light/70 hover:text-cream-light transition-colors"
              >
                → Feiern & Gruppen
              </Link>
              <Link
                href="/gutscheine"
                className="block text-sm font-sans text-cream-light/70 hover:text-cream-light transition-colors"
              >
                → Gutscheine
              </Link>
              <Link
                href="/aktuelles"
                className="block text-sm font-sans text-cream-light/70 hover:text-cream-light transition-colors"
              >
                → Aktuelles
              </Link>
            </div>
            <div className="pt-4 border-t border-cream-light/10">
              <p className="text-xs text-fog font-sans mb-2">Wir akzeptieren:</p>
              <div className="flex flex-wrap gap-2">
                {restaurant.payment.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-sans text-cream-light/50 bg-cream-light/5 border border-cream-light/10 px-2 py-1"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream-light/8">
        <div className="container-waage py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-cream-light/30">
            <p>
              © {currentYear} Restaurant zur Waage – Esther Stieger & This Kundert
            </p>
            <div className="flex items-center gap-5">
              <Link href="/impressum" className="hover:text-cream-light/60 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-cream-light/60 transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
