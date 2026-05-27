import type { Metadata } from 'next'
import { Phone, Leaf } from 'lucide-react'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ReservationCTA } from '@/components/ui/ReservationCTA'
import { restaurant } from '@/content/restaurant'
import { mittagsmenuInfo, abendkarte, saisonalesMenu, weine, weinNote } from '@/content/menu'

export const metadata: Metadata = {
  title: 'Speisekarte – Mittagsmenü, Abendkarte & Weine',
  description:
    'Täglich frische Mittagsmenüs, klassische Abendkarte mit Hausspezialitäten und eine ausgewählte Weinkarte. Regional, saisonal, mit Liebe zubereitet.',
}

export default function EssenPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-16 bg-cream-light border-b border-line">
        <div className="container-waage">
          <FadeIn>
            <p className="label-gold mb-4">Essen & Trinken</p>
            <h1 className="font-display text-6xl md:text-7xl font-light italic text-ink mb-6 leading-tight">
              Unsere Speisekarte
            </h1>
            <p className="font-sans text-base text-fog max-w-2xl leading-relaxed">
              Täglich frisch, regional und mit Herzblut zubereitet. Entdecken Sie unsere wechselnden
              Mittagsmenüs, klassische Hausspezialitäten und eine ausgewählte Weinkarte.
            </p>
          </FadeIn>

          {/* Anchor navigation */}
          <FadeIn delay={0.2} className="mt-10 flex flex-wrap gap-3">
            {[
              { label: 'Mittagsmenü', href: '#mittagsmenu' },
              { label: 'Abendkarte', href: '#abendkarte' },
              { label: 'Saisonales', href: '#saisonales' },
              { label: 'Wein', href: '#wein' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-5 py-2.5 border border-line text-sm font-sans text-ink/70 hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* MITTAGSMENÜ */}
      <section id="mittagsmenu" className="section-padding scroll-mt-24">
        <div className="container-waage">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <SectionTitle
                label={mittagsmenuInfo.label}
                title={mittagsmenuInfo.title}
                subtitle={mittagsmenuInfo.description}
              />

              <div className="mt-8 space-y-6">
                <div className="bg-cream-light border border-line p-6 space-y-4">
                  <h3 className="font-display text-xl font-normal text-ink">Das Menü umfasst typisch:</h3>
                  <ul className="space-y-2">
                    {mittagsmenuInfo.includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-sans text-sm text-fog">
                        <Leaf size={13} className="text-forest shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="label-gold">Servierzeit</p>
                  <p className="font-sans text-sm text-fog">{mittagsmenuInfo.servingTimes}</p>
                </div>

                <div className="space-y-2">
                  <p className="label-gold">Preis</p>
                  <p className="font-display text-3xl italic text-gold">{mittagsmenuInfo.typicalPrice}</p>
                </div>

                <p className="font-sans text-xs text-fog/70 leading-relaxed border-l-2 border-gold/30 pl-4">
                  {mittagsmenuInfo.note}
                </p>

                <a
                  href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                  className="btn-primary inline-flex"
                >
                  <Phone size={15} />
                  {restaurant.contact.phoneDisplay}
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="bg-forest grain-overlay overflow-hidden p-10 md:p-12 space-y-8">
                <div>
                  <p className="label-gold mb-3">Unsere Philosophie</p>
                  <blockquote className="font-display text-3xl italic text-cream-light leading-tight">
                    &ldquo;Was die Saison hergibt, kommt auf den Tisch.&rdquo;
                  </blockquote>
                </div>
                <div className="border-t border-cream-light/10 pt-8 space-y-4">
                  <p className="font-sans text-sm text-cream-dark/70 leading-relaxed">
                    Täglich werden wechselnde Fleisch- und vegetarische Menüs für jedermann zubereitet.
                    Ein bewusster Umgang mit Lebensmitteln und Ressourcen beeinflusst unser Angebot.
                  </p>
                  <p className="font-display text-xl italic text-gold-light">
                    &ldquo;no food waste&rdquo; – kein Fremdwort bei uns.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABENDKARTE */}
      <section id="abendkarte" className="section-padding bg-cream-light border-y border-line scroll-mt-24">
        <div className="container-waage">
          <FadeIn>
            <SectionTitle
              label="Abendkarte"
              title="Hausspezialitäten & Klassiker"
              subtitle="Unsere Abendkarte vereint Schweizer Küchentradition mit regionalen Produkten. Täglich frisch, liebevoll zubereitet."
              className="mb-14"
            />
          </FadeIn>

          <div className="space-y-16">
            {abendkarte.map((section, si) => (
              <FadeIn key={section.id} delay={si * 0.1}>
                <div>
                  {/* Section header */}
                  <div className="flex items-baseline gap-6 mb-8">
                    <h2 className="font-display text-3xl font-normal text-ink">{section.title}</h2>
                    {section.subtitle && (
                      <>
                        <div className="h-px flex-1 bg-line" />
                        <p className="font-display text-lg italic text-fog shrink-0">{section.subtitle}</p>
                      </>
                    )}
                  </div>

                  {/* Menu items grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between gap-4 py-5 border-b border-line group hover:border-gold/40 transition-colors"
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-display text-xl font-normal text-ink group-hover:text-gold transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex gap-1.5">
                              {item.isVegetarian && (
                                <span className="text-[9px] uppercase tracking-wider bg-forest-muted text-forest px-1.5 py-0.5 font-sans">
                                  Veg
                                </span>
                              )}
                              {item.isVegan && (
                                <span className="text-[9px] uppercase tracking-wider bg-forest-muted text-forest px-1.5 py-0.5 font-sans">
                                  Vegan
                                </span>
                              )}
                              {item.isSeasonal && (
                                <span className="text-[9px] uppercase tracking-wider bg-gold-pale text-warm px-1.5 py-0.5 font-sans">
                                  Saison
                                </span>
                              )}
                              {item.tags?.map((tag) => (
                                <span key={tag} className="text-[9px] uppercase tracking-wider bg-ink text-cream-light px-1.5 py-0.5 font-sans">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="font-sans text-sm text-fog leading-relaxed">{item.description}</p>
                        </div>
                        {item.price && (
                          <p className="font-display text-xl italic text-gold shrink-0">{item.price}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-12 text-sm font-sans text-fog/70 border-l-2 border-line pl-4">
            Alle Preise in CHF inkl. MwSt. Saisonale Abweichungen vorbehalten.
            Über Allergene und besondere Ernährungsbedürfnisse informieren wir Sie gerne persönlich.
          </FadeIn>
        </div>
      </section>

      {/* SAISONALES */}
      <section id="saisonales" className="section-padding scroll-mt-24">
        <div className="container-waage">
          <FadeIn>
            <SectionTitle
              label={saisonalesMenu.title}
              title="Was die Jahreszeit bringt"
              subtitle={saisonalesMenu.description}
              className="mb-14"
            />
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {saisonalesMenu.highlights.map((item) => (
              <StaggerItem key={item.id}>
                <div className="border border-gold/30 bg-gold-pale/40 p-8 h-full space-y-4 hover:border-gold/60 transition-colors">
                  <div>
                    {item.dateRange && (
                      <p className="text-xs uppercase tracking-[0.18em] font-sans text-warm mb-2">
                        {item.dateRange}
                      </p>
                    )}
                    <h3 className="font-display text-2xl font-normal text-ink">{item.name}</h3>
                  </div>
                  <p className="font-sans text-sm text-fog leading-relaxed">{item.description}</p>
                  <div className="pt-3 border-t border-gold/20 space-y-1">
                    {item.price && (
                      <p className="font-display text-2xl italic text-gold">{item.price}</p>
                    )}
                    {item.priceNote && (
                      <p className="text-xs text-fog font-sans">{item.priceNote}</p>
                    )}
                    {item.requiresReservation && (
                      <p className="text-xs text-warm font-sans pt-1">
                        ✓ Auf Vorbestellung
                      </p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3} className="mt-10">
            <a
              href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
              className="btn-primary inline-flex"
            >
              <Phone size={15} />
              Sondermenü reservieren
            </a>
          </FadeIn>
        </div>
      </section>

      {/* WEIN */}
      <section id="wein" className="section-padding bg-ink grain-overlay scroll-mt-24">
        <div className="relative z-10 container-waage">
          <FadeIn>
            <SectionTitle
              label="Wein"
              title="Unsere Weinkarte"
              subtitle={weinNote}
              dark
              className="mb-14"
            />
          </FadeIn>

          {(['Weiss', 'Rot', 'Rosé'] as const).map((type, ti) => {
            const filtered = weine.filter((w) => w.type === type)
            if (!filtered.length) return null
            return (
              <FadeIn key={type} delay={ti * 0.1} className="mb-12">
                <div className="flex items-center gap-6 mb-6">
                  <h2 className="font-display text-2xl font-normal text-cream-light">
                    {type}wein{type === 'Rosé' ? '' : 'e'}
                  </h2>
                  <div className="h-px flex-1 bg-cream-light/10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filtered.map((wine, wi) => (
                    <div
                      key={wi}
                      className="flex justify-between gap-4 py-5 border-b border-cream-light/10 group"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display text-xl font-normal text-cream-light">
                            {wine.name}
                          </h3>
                          {wine.isOpen && (
                            <span className="text-[9px] uppercase tracking-wider bg-gold/20 text-gold-light border border-gold/30 px-1.5 py-0.5 font-sans">
                              Offen
                            </span>
                          )}
                        </div>
                        <p className="text-xs uppercase tracking-[0.15em] text-fog font-sans">
                          {wine.region}
                        </p>
                        {wine.description && (
                          <p className="font-sans text-xs text-cream-dark/60 leading-relaxed mt-1">
                            {wine.description}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 text-right space-y-1">
                        {wine.priceGlass && (
                          <p className="font-display text-lg italic text-gold-light">
                            {wine.priceGlass}
                          </p>
                        )}
                        {wine.priceBottle && (
                          <p className="font-sans text-sm text-fog">{wine.priceBottle}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            )
          })}

          <FadeIn delay={0.4} className="mt-6 text-xs text-fog font-sans border-l-2 border-gold/30 pl-4">
            Preisangaben pro Glas (1,5 dl) / Flasche (75 cl). Alle Preise in CHF.
            Fragen Sie unser Team nach weiteren Empfehlungen aus unserem Keller.
          </FadeIn>
        </div>
      </section>

      <ReservationCTA variant="banner" />
    </>
  )
}
