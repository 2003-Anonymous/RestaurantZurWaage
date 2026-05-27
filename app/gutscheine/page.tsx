import type { Metadata } from 'next'
import { Gift, Heart, CheckCircle } from 'lucide-react'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/FadeIn'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GutscheineForm } from '@/components/sections/GutscheineForm'

export const metadata: Metadata = {
  title: 'Gutscheine – Genuss verschenken',
  description:
    'Gutscheine vom Restaurant zur Waage in beliebiger Höhe. Das perfekte Geschenk für Geniesser. Einfach online bestellen oder direkt im Restaurant abholen.',
}

export default function GutscheinePage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-gold-pale border-b border-gold/20">
        <div className="container-waage">
          <FadeIn>
            <Gift size={36} className="text-gold mb-6" />
            <p className="label-gold mb-4">Gutscheine</p>
            <h1 className="font-display text-6xl md:text-7xl font-light italic text-ink mb-6 leading-tight">
              Verschenken Sie<br />Genuss
            </h1>
            <p className="font-sans text-base text-fog max-w-xl leading-relaxed">
              Teilen Sie uns in ein paar Worten mit, für wen und in welcher Höhe der Gutschein
              gelten soll. Wir bereiten ihn liebevoll für Sie vor.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding-sm border-b border-line">
        <div className="container-waage">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Heart size={20} className="text-gold" />, title: 'Persönlich', text: 'Wir gestalten jeden Gutschein von Hand – mit Liebe zum Detail.' },
              { icon: <Gift size={20} className="text-gold" />, title: 'Flexibel', text: 'In beliebiger Höhe – einlösbar für Speisen, Getränke oder Anlässe.' },
              { icon: <CheckCircle size={20} className="text-gold" />, title: 'Einfach bestellen', text: 'Formular ausfüllen, wir liefern oder Sie holen ab.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 bg-gold-pale border border-gold/20 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-normal text-ink mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-fog leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-waage">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <SectionTitle
                label="Gutschein bestellen"
                title="Für Ihre Liebsten"
                subtitle="Füllen Sie das Formular aus. Wir melden uns für die Übergabe des Gutscheins."
                className="mb-10"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <GutscheineForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
