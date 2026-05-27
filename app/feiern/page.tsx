import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, CheckCircle, Phone, ArrowRight } from 'lucide-react'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ReservationCTA } from '@/components/ui/ReservationCTA'
import { EventRequestForm } from '@/components/sections/EventRequestForm'
import { restaurant } from '@/content/restaurant'

export const metadata: Metadata = {
  title: 'Feiern & Gruppen – Säli für Events und Anlässe',
  description:
    'Planen Sie Ihren Anlass im Restaurant zur Waage. Unser Säli eignet sich für Geburtstage, Firmenfeiern, Familientreffen und private Dinner. Individuelle Offerte auf Anfrage.',
}

const features = [
  'Individuelle Menüplanung',
  'Persönliche Betreuung',
  'Exklusive Raumnutzung',
  'Auf Wunsch Live-Musik',
  'Individuelle Offerte',
  'Weinberatung inklusive',
]

const occasions = [
  { title: 'Geburtstage', icon: '🎂', text: 'Feiern Sie Ihren Geburtstag im gemütlichen Rahmen unseres Sälis.' },
  { title: 'Firmenfeiern', icon: '🏢', text: 'Teamevents, Jubiläen und Weihnachtsfeiern – wir gestalten Ihren Anlass.' },
  { title: 'Familientreffen', icon: '👨‍👩‍👧‍👦', text: 'Taufen, Kommunionen, Konfirmationen – unvergessliche Momente im Säli.' },
  { title: 'Private Dinner', icon: '🍷', text: 'Exklusives Dinner für besondere Gelegenheiten – mit oder ohne Live-Musik.' },
]

export default function FeiernPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-forest grain-overlay border-b border-line">
        <div className="relative z-10 container-waage">
          <FadeIn>
            <p className="label-gold mb-4">Feiern & Gruppen</p>
            <h1 className="font-display text-6xl md:text-7xl font-light italic text-cream-light mb-6 leading-tight">
              Ihr Anlass,<br />unser Rahmen
            </h1>
            <p className="font-sans text-base text-cream-dark/70 max-w-2xl leading-relaxed">
              Sie planen ein Fest oder ein Treffen? Unser Säli bietet den passenden Rahmen.
              Gerne erstellen wir Ihnen eine individuelle Offerte.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="saeli" className="section-padding scroll-mt-24">
        <div className="container-waage">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <SectionTitle
                label="Der Säli"
                title="Ihr exklusiver Privatraum"
                subtitle="Unser Säli ist der ideale Rahmen für private und geschäftliche Anlässe. Wir kümmern uns um alle Details."
              />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-forest shrink-0" />
                    <span className="font-sans text-sm text-fog">{f}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`} className="btn-primary inline-flex">
                  <Phone size={15} />
                  {restaurant.contact.phoneDisplay}
                </a>
                <p className="font-sans text-xs text-fog">Sprechen Sie uns direkt an – wir beraten Sie gerne.</p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="bg-cream-light border border-line p-10 space-y-6">
                <h3 className="font-display text-2xl font-normal text-ink">Raum-Details auf einen Blick</h3>
                <div className="space-y-5 divide-y divide-line">
                  {[
                    { label: 'Kapazität', value: 'auf Anfrage' },
                    { label: 'Verfügbarkeit', value: 'nach Vereinbarung' },
                    { label: 'Menüplanung', value: 'individuell & saisonal' },
                    { label: 'Catering', value: 'Küche zur Waage' },
                    { label: 'Musik', value: 'auf Wunsch (FEURICH-Flügel)' },
                    { label: 'Offerte', value: 'kostenlos & unverbindlich' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between pt-4">
                      <span className="font-sans text-sm text-fog">{row.label}</span>
                      <span className="font-sans text-sm text-ink font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="gruppen" className="section-padding bg-cream-light border-y border-line scroll-mt-24">
        <div className="container-waage">
          <FadeIn>
            <SectionTitle
              label="Gruppen & Anlässe"
              title="Für jeden Anlass den passenden Rahmen"
              subtitle="Von der kleinen Familienfeier bis zum grossen Firmenevent – wir gestalten Ihren Abend."
              className="mb-14"
            />
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occ) => (
              <StaggerItem key={occ.title}>
                <div className="card-elevated p-8 text-center space-y-4 h-full">
                  <span className="text-4xl block">{occ.icon}</span>
                  <h3 className="font-display text-xl font-normal text-ink">{occ.title}</h3>
                  <p className="font-sans text-sm text-fog leading-relaxed">{occ.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section id="galerie" className="section-padding-sm scroll-mt-24">
        <div className="container-waage">
          <FadeIn>
            <SectionTitle label="Galerie" title="Einblicke" className="mb-10" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { bg: 'bg-forest-muted', label: 'Gaststube' },
                { bg: 'bg-gold-pale', label: 'Terrasse' },
                { bg: 'bg-cream-dark', label: 'Säli' },
                { bg: 'bg-ink/5', label: 'Saal' },
              ].map((item) => (
                <div key={item.label} className={`${item.bg} aspect-square border border-line flex items-end p-4`}>
                  <span className="font-display text-lg italic text-ink/60">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 font-sans text-xs text-fog">Kontaktieren Sie uns für aktuelle Bilder unserer Räumlichkeiten.</p>
          </FadeIn>
        </div>
      </section>

      <section id="anfrage" className="section-padding bg-cream-light border-y border-line scroll-mt-24">
        <div className="container-waage">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <SectionTitle
                label="Anfrage"
                title="Erzählen Sie uns von Ihrem Anlass"
                subtitle="Füllen Sie das Formular aus und wir melden uns innerhalb eines Werktages bei Ihnen."
                className="mb-10"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <EventRequestForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <ReservationCTA variant="banner" />
    </>
  )
}
