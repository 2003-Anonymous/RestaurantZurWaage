import type { Metadata } from 'next'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ReservationCTA } from '@/components/ui/ReservationCTA'
import { restaurant } from '@/content/restaurant'

export const metadata: Metadata = {
  title: 'Über uns – Gastgeber, Philosophie & Musik',
  description:
    'Lernen Sie Esther Stieger und This Kundert kennen. Ihre Geschichte, Philosophie, Nachhaltigkeit und die Leidenschaft für Musik am FEURICH-Flügel.',
}

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 border-b border-line">
        <div className="container-waage">
          <FadeIn>
            <p className="label-gold mb-4">Über uns</p>
            <h1 className="font-display text-6xl md:text-7xl font-light italic text-ink mb-6 leading-tight">
              Mit Leidenschaft
              <br />für Genuss
            </h1>
            <p className="font-sans text-base text-fog max-w-xl leading-relaxed">
              {restaurant.owners.bio}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* GASTGEBER */}
      <section id="gastgeber" className="section-padding scroll-mt-24">
        <div className="container-waage">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-forest-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://zur-waage.ch/media/images/this-und-esther-bearbeitet-26-04-_2019_06-32-29.jpg"
                    alt="Esther Stieger und This Kundert"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gold text-cream-light px-6 py-4">
                  <p className="font-display text-2xl italic">Seit Leidenschaft</p>
                  <p className="text-xs uppercase tracking-[0.2em] mt-1 opacity-80">Gastronomie mit Herz</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="space-y-8">
                <SectionTitle
                  label="Gastgeber"
                  title="Esther Stieger & This Kundert"
                />
                <div className="space-y-5 font-sans text-sm text-fog leading-relaxed">
                  <p>
                    Im gemütlich eingerichteten Restaurant zur Waage freuen sich Esther Stieger und
                    This Kundert, ihre Gäste mit feinen Gerichten und Getränken zu verwöhnen.
                    Der persönliche Kontakt steht dabei stets im Mittelpunkt.
                  </p>
                  <p>
                    Mit Erfahrung, Kreativität und einem tiefen Respekt vor dem Handwerk schaffen
                    die beiden Gastgeber ein Umfeld, in dem sich jeder Gast willkommen und geborgen fühlt.
                  </p>
                  <p>
                    Ob ein entspanntes Mittagessen, ein festlicher Abend im Säli oder ein spontaner
                    Besuch nach einem langen Tag – zur Waage ist immer ein Ort der Gastfreundschaft.
                  </p>
                </div>

                <blockquote className="border-l-2 border-gold pl-6">
                  <p className="font-display text-2xl italic text-ink">
                    &ldquo;Der persönliche Kontakt zu unseren Gästen ist uns sehr wichtig.&rdquo;
                  </p>
                  <footer className="mt-3 text-xs uppercase tracking-[0.18em] text-fog font-sans">
                    Esther Stieger & This Kundert
                  </footer>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section id="philosophie" className="section-padding bg-cream-light border-y border-line scroll-mt-24">
        <div className="container-waage">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <SectionTitle
                label="Philosophie"
                title="Wie wir kochen – und warum"
                align="center"
                className="mb-14"
              />
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  icon: '🌿',
                  title: 'Love for food',
                  text: 'Jedes Gericht entsteht mit Sorgfalt und Leidenschaft. Wir kochen nicht für die Masse, sondern für den Moment – für den Gast, der am Tisch sitzt und sich wohlfühlen soll.',
                },
                {
                  icon: '♻️',
                  title: 'No food waste',
                  text: 'Ein bewusster Umgang mit Lebensmitteln und Ressourcen ist für uns selbstverständlich. Was nicht auf den Teller kommt, findet anderweitig Verwendung – Abfall ist ein Fremdwort.',
                },
                {
                  icon: '🏡',
                  title: 'Regional & saisonal',
                  text: 'Wir legen grossen Wert auf regionale und frische Produkte. Was die Jahreszeit bringt, kommt auf den Tisch. So schmeckt es am besten – und gut für die Umwelt ist es auch.',
                },
                {
                  icon: '👐',
                  title: 'Persönlicher Kontakt',
                  text: 'Gastronomie ist mehr als Essen. Es geht um Begegnung, um Verbundenheit, um Momente, die man in Erinnerung behält. Deshalb kennen wir unsere Stammgäste beim Namen.',
                },
              ].map((item) => (
                <FadeIn key={item.title}>
                  <div className="space-y-4">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="font-display text-2xl font-normal text-ink">{item.title}</h3>
                    <p className="font-sans text-sm text-fog leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NACHHALTIGKEIT */}
      <section id="nachhaltigkeit" className="section-padding scroll-mt-24">
        <div className="container-waage">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="bg-forest-muted border border-forest/10 p-12 space-y-6">
                <span className="text-5xl block">🌱</span>
                <h2 className="font-display text-4xl font-normal text-ink">
                  Nachhaltig denken,
                  <br />bewusst kochen
                </h2>
                <div className="space-y-3 text-sm font-sans text-fog leading-relaxed">
                  {[
                    'Einkauf bei regionalen Bauern und Produzenten',
                    'Saisonale Menüplanung – kein Importfleisch ausser Saison',
                    'Konsequente Restverwertung in der Küche',
                    'Kurze Transportwege – weniger CO₂',
                    'Bewusster Umgang mit Wasser und Energie',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="text-forest shrink-0 mt-0.5">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="space-y-8">
                <SectionTitle
                  label="Nachhaltigkeit"
                  title="Verantwortung auf dem Teller"
                />
                <div className="space-y-5 font-sans text-sm text-fog leading-relaxed">
                  <p>
                    Nachhaltigkeit ist für uns keine Marketingstrategie, sondern gelebte Überzeugung.
                    Wir kaufen dort ein, wo wir wissen, wie die Tiere leben und wie die Felder
                    bewirtschaftet werden.
                  </p>
                  <p>
                    Unsere Menüplanung richtet sich nach dem, was die Saison hergibt – nicht nach
                    dem, was der Grossist gerade im Angebot hat. Das bedeutet manchmal auch
                    Kreativität und Flexibilität in der Küche.
                  </p>
                  <p>
                    &ldquo;No food waste&rdquo; ist bei uns kein Slogan. Jede Zutat wird vollständig
                    verwendet, verarbeitet oder sinnvoll weitergenutzt. Wir sind stolz darauf.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MUSIK */}
      <section id="musik" className="section-padding bg-ink grain-overlay scroll-mt-24">
        <div className="relative z-10 container-waage">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="space-y-8">
                <SectionTitle
                  label="Musik"
                  title="Der FEURICH-Flügel"
                  subtitle="This Kundert verwöhnt Sie nicht nur kulinarisch, sondern auch musikalisch an unserem neuen FEURICH-Konzertflügel."
                  dark
                />
                <div className="space-y-5 font-sans text-sm text-cream-dark/70 leading-relaxed">
                  <p>
                    Musik und Kulinarik gehören zusammen – das ist die Überzeugung von This Kundert.
                    An ausgewählten Abenden spielt er für unsere Gäste an unserem FEURICH-Konzertflügel.
                  </p>
                  <p>
                    Ob Jazz, Klassik oder eigene Kompositionen – die musikalische Untermalung macht
                    den Abend zu einem ganzheitlichen Erlebnis. Fragen Sie bei der Reservation,
                    wann der nächste Musikabend stattfindet.
                  </p>
                </div>
                <a
                  href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                  className="btn-outline-cream inline-flex"
                >
                  Nach Musikabenden fragen
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="border border-gold/30 bg-gold/5 p-12 text-center space-y-6">
                <div className="text-6xl">🎹</div>
                <div>
                  <p className="font-display text-4xl italic text-cream-light font-light">
                    FEURICH
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold font-sans mt-2">
                    Konzertflügel
                  </p>
                </div>
                <p className="font-sans text-sm text-cream-dark/60 leading-relaxed">
                  Lassen Sie sich musikalisch überraschen –
                  ein Abend bei uns ist immer auch ein Konzert.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ReservationCTA variant="banner" />
    </>
  )
}
