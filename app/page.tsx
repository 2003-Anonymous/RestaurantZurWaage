import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Leaf, Music, Wine, Users, Gift } from 'lucide-react'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ReservationCTA } from '@/components/ui/ReservationCTA'
import { restaurant } from '@/content/restaurant'
import { currentEvents } from '@/content/events'

export const metadata: Metadata = {
  title: 'Herzlich willkommen – Restaurant zur Waage Gontenschwil',
  description: restaurant.seo.description,
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* WILLKOMMEN */}
      <WelcomeSection />

      {/* KULINARIK */}
      <KulinarikSection />

      {/* ERLEBNIS */}
      <ErlebnisSection />

      {/* AKTUELLES teaser */}
      <AktuellesTeaser />

      {/* FEIERN */}
      <FeiernSection />

      {/* GUTSCHEINE */}
      <GutscheineSection />

      {/* RESERVATION BANNER */}
      <ReservationCTA variant="banner" />
    </>
  )
}

/* ─── HERO ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(43,64,48,0.18) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(156,125,60,0.12) 0%, transparent 50%),
            linear-gradient(170deg, #EDE9DD 0%, #F7F4ED 40%, #EDE9DD 100%)
          `,
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-line" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1A1714 0px, #1A1714 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(90deg, #1A1714 0px, #1A1714 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <div className="relative container-waage pb-20 pt-40 md:pt-48">
        <div className="max-w-4xl">
          {/* Label */}
          <FadeIn delay={0.1}>
            <p className="label-gold mb-6">Herzlich willkommen</p>
          </FadeIn>

          {/* Main heading */}
          <FadeIn delay={0.2}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light italic leading-[0.95] tracking-tight text-ink mb-8">
              Restaurant
              <br />
              <span className="text-forest">zur Waage</span>
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.35}>
            <p className="font-sans text-base md:text-lg text-fog max-w-xl leading-relaxed mb-10">
              {restaurant.description}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                className="btn-primary"
              >
                <Phone size={15} />
                Tisch reservieren
              </a>
              <Link href="/essen" className="btn-secondary">
                Speisekarte
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.6}>
            <div className="flex items-center gap-6 mt-14 pt-8 border-t border-line">
              <p className="font-display text-xl italic text-warm">
                &ldquo;love for food&rdquo;
              </p>
              <div className="w-px h-6 bg-line" />
              <p className="font-display text-xl italic text-warm">
                &ldquo;no food waste&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fog/50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-line" />
      </div>
    </section>
  )
}

/* ─── WILLKOMMEN ────────────────────────────────────────────────────── */
function WelcomeSection() {
  return (
    <section className="section-padding bg-cream-light border-y border-line">
      <div className="container-waage">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right">
            <div className="space-y-8">
              <SectionTitle
                label="Willkommen"
                title="Persönlich. Regional. Mit Herzblut."
                subtitle={restaurant.description}
              />
              <div className="space-y-4 text-sm font-sans text-fog leading-relaxed">
                <p>
                  Wir legen grossen Wert auf regionale und frische Produkte, liebevoll zubereitet.
                  Ein bewusster Umgang mit Lebensmitteln und Ressourcen beeinflusst auch unser Speisenangebot.
                </p>
                <p>
                  Gemütlich speisen in der Gaststube – und bei schönem Wetter auf der Terrasse.
                  Abends lädt der Saal zum perfekten Dinner ein.
                </p>
              </div>
              <Link href="/ueber-uns" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-gold hover:text-gold-light transition-colors link-underline">
                Mehr über uns
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            {/* Owners image placeholder - styled card */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-forest-muted to-cream-dark overflow-hidden">
                {/* Actual image from website */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://zur-waage.ch/media/images/this-und-esther-bearbeitet-26-04-_2019_06-32-29.jpg"
                  alt="Esther Stieger und This Kundert, Gastgeber Restaurant zur Waage"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Caption card */}
              <div className="absolute -bottom-5 -left-5 bg-cream-light border border-line px-6 py-4 shadow-sm">
                <p className="font-display text-lg italic text-ink">Esther & This</p>
                <p className="text-xs uppercase tracking-[0.18em] text-fog font-sans mt-1">Ihre Gastgeber</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Feature icons */}
        <div className="mt-20 pt-16 border-t border-line">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {restaurant.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="space-y-3">
                  <span className="text-2xl block">{feature.icon}</span>
                  <h3 className="font-display text-xl font-normal text-ink">{feature.title}</h3>
                  <p className="font-sans text-sm text-fog leading-relaxed">{feature.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}

/* ─── KULINARIK ─────────────────────────────────────────────────────── */
function KulinarikSection() {
  const items = [
    {
      icon: <Leaf size={20} className="text-forest" />,
      label: 'Mittagsmenü',
      title: 'Täglich wechselnd',
      text: 'Jeden Tag bereiten wir frische Fleisch- und vegetarische Menüs zu. Regional, saisonal, mit Liebe.',
      price: 'ab CHF 18.50',
      href: '/essen#mittagsmenu',
    },
    {
      icon: <Wine size={20} className="text-gold" />,
      label: 'Abendkarte',
      title: 'Hausspezialitäten',
      text: 'Unsere Abendkarte bietet Schweizer Klassiker und Hausspezialitäten – von Zürich Geschnetzeltem bis zur Glarner Chalber-Wurst.',
      price: 'ab CHF 28.–',
      href: '/essen#abendkarte',
    },
    {
      icon: <Wine size={20} className="text-warm" />,
      label: 'Weine',
      title: 'Regional & international',
      text: 'Unsere Weinkarte umfasst ausgewählte regionale und internationale Weine – viele auch im Offenausschank.',
      href: '/essen#wein',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-waage">
        <FadeIn>
          <SectionTitle
            label="Kulinarik"
            title="Was uns auf den Tisch kommt"
            subtitle="Täglich frisch, mit regionalen Produkten und saisonalem Rhythmus. Kein Food Waste – kein Fremdwort."
            className="mb-14"
          />
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href={item.href}
                className="group block card-elevated p-8 h-full hover:border-gold/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-cream-dark flex items-center justify-center">
                      {item.icon}
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-fog group-hover:text-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <p className="label-gold mb-1">{item.label}</p>
                    <h3 className="font-display text-2xl font-normal text-ink">{item.title}</h3>
                  </div>
                  <p className="font-sans text-sm text-fog leading-relaxed">{item.text}</p>
                  {item.price && (
                    <p className="font-display text-lg italic text-warm">{item.price}</p>
                  )}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <Link href="/essen" className="btn-primary">
            Zur vollständigen Speisekarte
            <ArrowRight size={15} />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── ERLEBNIS ──────────────────────────────────────────────────────── */
function ErlebnisSection() {
  const spaces = restaurant.spaces

  return (
    <section className="section-padding bg-forest grain-overlay overflow-hidden">
      <div className="relative z-10 container-waage">
        <FadeIn>
          <SectionTitle
            label="Das Erlebnis"
            title="Mehr als nur ein Abendessen"
            subtitle="Bei uns kommen Genuss, Atmosphäre und Musik zusammen. Jeder Besuch wird zum Erlebnis."
            dark
            className="mb-14"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spaces.map((space, i) => (
            <FadeIn key={space.id} delay={i * 0.1}>
              <div className="border border-cream-light/10 bg-cream-light/5 p-8 hover:bg-cream-light/8 transition-colors duration-300">
                <h3 className="font-display text-2xl font-normal text-cream-light mb-3">
                  {space.name}
                </h3>
                <p className="font-sans text-sm text-cream-dark/70 leading-relaxed">
                  {space.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Piano callout */}
        <FadeIn delay={0.4}>
          <div className="mt-10 border border-gold/30 bg-gold/5 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <Music size={32} className="text-gold shrink-0" />
              <div>
                <p className="label-gold mb-2">Live Musik</p>
                <h3 className="font-display text-2xl font-normal text-cream-light mb-2">
                  This Kundert am FEURICH-Flügel
                </h3>
                <p className="font-sans text-sm text-cream-dark/70">
                  Lassen Sie sich überraschen – This Kundert verwöhnt Sie nicht nur kulinarisch,
                  sondern auch musikalisch an unserem neuen FEURICH-Konzertflügel.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── AKTUELLES TEASER ──────────────────────────────────────────────── */
function AktuellesTeaser() {
  return (
    <section className="section-padding-sm bg-gold-pale border-y border-gold/20">
      <div className="container-waage">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-2">
              <p className="label-gold">Voranzeige & Aktuelles</p>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-ink">
                Besondere Menüs
              </h2>
            </div>
            <Link href="/aktuelles" className="shrink-0 btn-secondary self-start">
              Alle Neuigkeiten
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentEvents.map((event, i) => (
            <FadeIn key={event.id} delay={i * 0.1}>
              <div className="bg-cream-light border border-gold/30 p-8 space-y-4">
                <div>
                  {event.dateRange && (
                    <p className="text-xs uppercase tracking-[0.18em] font-sans text-warm mb-2">
                      {event.dateRange}
                    </p>
                  )}
                  <h3 className="font-display text-2xl font-normal text-ink">{event.title}</h3>
                  {event.subtitle && (
                    <p className="font-sans text-sm text-fog mt-1">{event.subtitle}</p>
                  )}
                </div>
                <p className="font-sans text-sm text-fog leading-relaxed">{event.description}</p>
                <div className="flex items-center justify-between pt-2 border-t border-line">
                  {event.price && (
                    <span className="font-display text-2xl italic text-gold">{event.price}</span>
                  )}
                  {event.priceNote && (
                    <span className="text-xs text-fog font-sans">{event.priceNote}</span>
                  )}
                </div>
                {event.requiresReservation && (
                  <p className="text-xs text-warm font-sans">
                    ✓ Auf Vorbestellung – Tel. {restaurant.contact.phoneDisplay}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FEIERN ────────────────────────────────────────────────────────── */
function FeiernSection() {
  return (
    <section className="section-padding">
      <div className="container-waage">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="space-y-8">
              <SectionTitle
                label="Feiern & Gruppen"
                title="Ihr Anlass, unser Säli"
                subtitle="Sie planen ein Fest oder ein Treffen? Unser Säli bietet den passenden Rahmen – für Geburtstage, Firmenfeiern und private Zusammenkünfte."
              />
              <p className="font-sans text-sm text-fog leading-relaxed">
                Gerne erstellen wir Ihnen eine individuelle Offerte für Ihren Anlass. Sprechen Sie uns an –
                wir planen den Abend gemeinsam mit Ihnen und sorgen für ein unvergessliches Erlebnis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/feiern" className="btn-primary">
                  <Users size={15} />
                  Mehr erfahren
                </Link>
                <Link href="/feiern#anfrage" className="btn-secondary">
                  Anfrage stellen
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-forest-muted border border-forest/10 p-6 aspect-square flex flex-col justify-end">
                  <p className="font-display text-4xl italic text-forest font-light">Säli</p>
                  <p className="font-sans text-xs text-forest/60 mt-1">Ihr Privatraum</p>
                </div>
                <div className="bg-gold-pale border border-gold/20 p-6">
                  <p className="font-display text-2xl italic text-warm font-light">Individuelle Offerte</p>
                  <p className="font-sans text-xs text-warm/60 mt-2">Auf Ihre Bedürfnisse zugeschnitten</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-cream-dark border border-line p-6">
                  <p className="font-display text-2xl italic text-ink font-light">Geburtstage</p>
                  <p className="font-sans text-xs text-fog mt-2">& private Feiern</p>
                </div>
                <div className="bg-ink border border-ink p-6 aspect-square flex flex-col justify-end">
                  <p className="font-display text-4xl italic text-cream-light font-light">Events</p>
                  <p className="font-sans text-xs text-cream-light/50 mt-1">Firmen & Gruppen</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── GUTSCHEINE ─────────────────────────────────────────────────────── */
function GutscheineSection() {
  return (
    <section className="section-padding-sm bg-cream-dark border-y border-line">
      <div className="container-waage">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <FadeIn>
            <Gift size={36} className="text-gold mx-auto" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle
              label="Gutscheine"
              title="Verschenken Sie Genuss"
              subtitle="Teilen Sie uns in ein paar Worten mit, für wen und in welcher Höhe der Gutschein gelten soll. Wir bereiten ihn liebevoll vor."
              align="center"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/gutscheine" className="btn-gold inline-flex">
              Gutschein bestellen
              <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
