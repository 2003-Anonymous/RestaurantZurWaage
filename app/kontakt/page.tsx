import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FAQAccordion } from '@/components/ui/Accordion'
import { ReservationForm } from '@/components/sections/ReservationForm'
import { restaurant } from '@/content/restaurant'
import { faqItems } from '@/content/faq'

export const metadata: Metadata = {
  title: 'Kontakt & Reservation – Tisch reservieren',
  description:
    'Reservieren Sie Ihren Tisch im Restaurant zur Waage, Gontenschwil. Telefon 062 773 31 50 oder online anfragen. Öffnungszeiten und Anfahrt.',
}

export default function KontaktPage() {
  return (
    <>
      <section className="pt-36 pb-16 border-b border-line bg-cream-light">
        <div className="container-waage">
          <FadeIn>
            <p className="label-gold mb-4">Kontakt & Reservation</p>
            <h1 className="font-display text-6xl md:text-7xl font-light italic text-ink mb-6 leading-tight">
              Wir freuen uns<br />auf Sie
            </h1>
            <p className="font-sans text-base text-fog max-w-xl leading-relaxed">
              {restaurant.reservationNote}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`} className="btn-primary">
                <Phone size={15} />
                {restaurant.contact.phoneDisplay}
              </a>
              <a href={`mailto:${restaurant.contact.email}`} className="btn-secondary">
                <Mail size={15} />
                {restaurant.contact.email}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="oeffnungszeiten" className="section-padding scroll-mt-24">
        <div className="container-waage">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <SectionTitle label="Öffnungszeiten" title="Wann wir für Sie da sind" className="mb-8" />
              <div className="divide-y divide-line">
                {restaurant.openingHours.map((entry, i) => (
                  <div key={i} className="py-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                    <p className="font-sans text-sm font-medium text-ink">{entry.days}</p>
                    <div className="sm:col-span-2 space-y-0.5">
                      {entry.lunch
                        ? <p className="font-sans text-sm text-fog"><span className="text-xs uppercase tracking-wider text-warm mr-2">Mittag</span>{entry.lunch}</p>
                        : <p className="font-sans text-sm text-fog/40"><span className="text-xs uppercase tracking-wider mr-2">Mittag</span>–</p>
                      }
                      {entry.dinner
                        ? <p className="font-sans text-sm text-fog"><span className="text-xs uppercase tracking-wider text-warm mr-2">Abend</span>{entry.dinner}</p>
                        : <p className="font-sans text-sm text-fog/40"><span className="text-xs uppercase tracking-wider mr-2">Abend</span>–</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 bg-gold-pale border border-gold/20">
                <div className="flex items-start gap-3">
                  <Clock size={15} className="text-warm shrink-0 mt-0.5" />
                  <p className="font-sans text-sm text-warm leading-relaxed">{restaurant.openingHoursNote}</p>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <p className="label-gold">Zahlungsmittel</p>
                <div className="flex flex-wrap gap-2">
                  {restaurant.payment.map((p) => (
                    <span key={p} className="text-xs font-sans text-fog border border-line px-3 py-1.5 bg-cream-light">{p}</span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div id="anfahrt" className="scroll-mt-24 space-y-8">
                <SectionTitle label="Anfahrt" title="Wo Sie uns finden" />
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-sm font-medium text-ink">{restaurant.address.street}</p>
                      <p className="font-sans text-sm text-fog">{restaurant.address.zip} {restaurant.address.city}</p>
                      <a href={restaurant.address.mapsUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-sans text-gold hover:text-gold-light transition-colors link-underline">
                        In Google Maps öffnen →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                    <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                      className="font-sans text-sm font-medium text-ink hover:text-gold transition-colors">
                      {restaurant.contact.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                    <a href={`mailto:${restaurant.contact.email}`}
                      className="font-sans text-sm font-medium text-ink hover:text-gold transition-colors">
                      {restaurant.contact.email}
                    </a>
                  </div>
                </div>
                <div className="aspect-video bg-cream-dark border border-line overflow-hidden">
                  <iframe
                    title="Restaurant zur Waage Standort"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(restaurant.address.full)}&output=embed&z=14`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="reservieren" className="section-padding bg-cream-light border-y border-line scroll-mt-24">
        <div className="container-waage">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <SectionTitle
                label="Reservieren"
                title="Tisch reservieren"
                subtitle="Füllen Sie das Formular aus oder rufen Sie uns direkt an. Wir freuen uns auf Sie."
                className="mb-10"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <ReservationForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding scroll-mt-24">
        <div className="container-waage">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <SectionTitle
                label="FAQ"
                title="Häufige Fragen"
                subtitle="Finden Sie Ihre Antwort nicht? Rufen Sie uns einfach an."
                className="mb-12"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <FAQAccordion items={faqItems} />
            </FadeIn>
            <FadeIn delay={0.3} className="mt-12 p-8 bg-forest text-cream-light">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-normal text-cream-light mb-1">Noch eine Frage?</h3>
                  <p className="font-sans text-sm text-cream-dark/70">Wir sind gerne für Sie da.</p>
                </div>
                <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                  className="shrink-0 inline-flex items-center gap-2 bg-gold text-cream-light px-6 py-3 text-sm font-sans font-medium hover:bg-gold-light transition-colors">
                  <Phone size={14} />
                  {restaurant.contact.phoneDisplay}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
