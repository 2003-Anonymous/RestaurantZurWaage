import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Calendar } from 'lucide-react'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ReservationCTA } from '@/components/ui/ReservationCTA'
import { restaurant } from '@/content/restaurant'
import { currentEvents, eventsInfo } from '@/content/events'
import { saisonalesMenu } from '@/content/menu'

export const metadata: Metadata = {
  title: 'Aktuelles – Sondermenüs & Voranzeigen',
  description:
    'Aktuelle Sondermenüs, saisonale Highlights und Voranzeigen vom Restaurant zur Waage. Glarner 4-Gang-Menü und Rehrücken-Menü auf Vorbestellung.',
}

export default function AktuellesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 border-b border-line">
        <div className="container-waage">
          <FadeIn>
            <p className="label-gold mb-4">Aktuelles</p>
            <h1 className="font-display text-6xl md:text-7xl font-light italic text-ink mb-6 leading-tight">
              Besonderes auf
              <br />dem Tisch
            </h1>
            <p className="font-sans text-base text-fog max-w-xl leading-relaxed">
              {eventsInfo.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SONDERMENÜS */}
      <section className="section-padding">
        <div className="container-waage">
          <FadeIn>
            <SectionTitle
              label="Sondermenüs & Voranzeigen"
              title="Aktuelle Angebote"
              className="mb-14"
            />
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentEvents.map((event) => (
              <StaggerItem key={event.id}>
                <article className="border border-line bg-cream-light h-full flex flex-col hover:border-gold/40 transition-colors duration-300">
                  {/* Card header */}
                  <div className="bg-forest p-8 space-y-3">
                    {event.dateRange && (
                      <div className="flex items-center gap-2">
                        <Calendar size={13} className="text-gold" />
                        <p className="text-xs uppercase tracking-[0.18em] font-sans text-gold">
                          {event.dateRange}
                        </p>
                      </div>
                    )}
                    <h2 className="font-display text-3xl font-normal text-cream-light leading-tight">
                      {event.title}
                    </h2>
                    {event.subtitle && (
                      <p className="font-sans text-sm text-cream-dark/70">{event.subtitle}</p>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-8 flex-1 flex flex-col gap-6">
                    <p className="font-sans text-sm text-fog leading-relaxed flex-1">
                      {event.description}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-line">
                      <div className="flex items-end justify-between">
                        {event.price && (
                          <div>
                            <p className="font-display text-4xl italic text-gold">{event.price}</p>
                            {event.priceNote && (
                              <p className="text-xs text-fog font-sans mt-0.5">{event.priceNote}</p>
                            )}
                          </div>
                        )}
                      </div>

                      {event.requiresReservation && (
                        <div className="space-y-3">
                          <p className="text-xs text-warm font-sans flex items-center gap-2">
                            <span className="w-4 h-4 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-[10px]">✓</span>
                            Auf Vorbestellung – mindestens 2 Tage im Voraus
                          </p>
                          <a
                            href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                            className="inline-flex items-center gap-2 bg-forest text-cream-light px-6 py-3 text-sm font-sans font-medium transition-all hover:bg-forest-light"
                          >
                            <Phone size={14} />
                            Jetzt reservieren
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3} className="mt-8 p-5 bg-gold-pale border border-gold/20">
            <p className="font-sans text-sm text-warm">
              <strong>Hinweis:</strong> {eventsInfo.reservationHint}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SAISONALE HIGHLIGHTS */}
      <section className="section-padding bg-cream-light border-y border-line">
        <div className="container-waage">
          <FadeIn>
            <SectionTitle
              label="Saisonales"
              title="Was die Jahreszeit bringt"
              subtitle={saisonalesMenu.description}
              className="mb-14"
            />
          </FadeIn>

          <StaggerChildren className="space-y-6">
            {saisonalesMenu.highlights.map((item) => (
              <StaggerItem key={item.id}>
                <div className="flex flex-col md:flex-row md:items-start gap-6 p-8 border border-line bg-cream-light hover:border-gold/30 transition-colors">
                  <div className="flex-1 space-y-2">
                    {item.dateRange && (
                      <p className="text-xs uppercase tracking-[0.18em] font-sans text-warm">
                        {item.dateRange}
                      </p>
                    )}
                    <h3 className="font-display text-2xl font-normal text-ink">{item.name}</h3>
                    <p className="font-sans text-sm text-fog leading-relaxed">{item.description}</p>
                    {item.requiresReservation && (
                      <p className="text-xs text-warm font-sans">✓ Auf Vorbestellung</p>
                    )}
                  </div>
                  <div className="shrink-0 text-right md:text-right">
                    {item.price && (
                      <p className="font-display text-3xl italic text-gold">{item.price}</p>
                    )}
                    {item.priceNote && (
                      <p className="text-xs text-fog font-sans mt-1">{item.priceNote}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/essen" className="btn-primary inline-flex">
              Zur Speisekarte
              <ArrowRight size={15} />
            </Link>
            <Link href="/kontakt" className="btn-secondary inline-flex">
              Kontakt & Reservation
            </Link>
          </FadeIn>
        </div>
      </section>

      <ReservationCTA variant="banner" />
    </>
  )
}
