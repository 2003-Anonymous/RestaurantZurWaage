'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Send } from 'lucide-react'
import { restaurant } from '@/content/restaurant'

const amounts = [50, 100, 150, 200]

export function GutscheineForm() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 space-y-5 border border-gold/30 bg-gold-pale/40">
        <CheckCircle size={40} className="text-forest mx-auto" />
        <h3 className="font-display text-3xl font-normal text-ink">Bestellung erhalten!</h3>
        <p className="font-sans text-sm text-fog max-w-sm mx-auto">
          Vielen Dank. Wir melden uns in Kürze bei Ihnen, um den Gutschein zu übergeben oder zuzusenden.
        </p>
        <button
          onClick={() => { setSubmitted(false); setSelectedAmount(null); setCustomAmount('') }}
          className="text-sm font-sans text-gold hover:underline"
        >
          Weiteren Gutschein bestellen
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Amount */}
      <div>
        <label className="form-label mb-4 block">Betrag (CHF) *</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {amounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => { setSelectedAmount(amt); setCustomAmount('') }}
              className={`py-4 border text-center font-display text-2xl italic transition-all duration-200 ${
                selectedAmount === amt
                  ? 'bg-forest text-cream-light border-forest'
                  : 'bg-cream-light border-line text-ink hover:border-gold/50'
              }`}
            >
              {amt}.–
            </button>
          ))}
        </div>
        <div>
          <label className="form-label">Oder anderen Betrag eingeben</label>
          <input
            type="number"
            min={20}
            className="form-input"
            placeholder="z.B. 75"
            value={customAmount}
            onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }}
          />
        </div>
      </div>

      <div className="divider" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Ihr Vorname *</label>
          <input type="text" required className="form-input" placeholder="Max" />
        </div>
        <div>
          <label className="form-label">Ihr Nachname *</label>
          <input type="text" required className="form-input" placeholder="Mustermann" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">E-Mail *</label>
          <input type="email" required className="form-input" placeholder="max@beispiel.ch" />
        </div>
        <div>
          <label className="form-label">Telefon</label>
          <input type="tel" className="form-input" placeholder="079 123 45 67" />
        </div>
      </div>

      <div>
        <label className="form-label">Für wen ist der Gutschein?</label>
        <input type="text" className="form-input" placeholder="z.B. Zum Geburtstag für Oma Maria" />
      </div>

      <div>
        <label className="form-label">Persönliche Widmung (optional)</label>
        <textarea
          rows={3}
          className="form-input resize-none"
          placeholder="Eine kurze Botschaft, die auf dem Gutschein erscheinen soll..."
        />
      </div>

      <div>
        <label className="form-label">Übergabe</label>
        <select className="form-input">
          <option>Abholung im Restaurant</option>
          <option>Zusenden per Post (Porto zzgl.)</option>
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="datenschutz-gut" required className="mt-1 accent-forest" />
        <label htmlFor="datenschutz-gut" className="font-sans text-sm text-fog leading-relaxed">
          Ich habe die{' '}
          <Link href="/datenschutz" className="text-gold hover:underline">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und akzeptiere sie.
        </label>
      </div>

      <button
        type="submit"
        disabled={!selectedAmount && !customAmount}
        className="btn-gold w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Send size={15} />
        Gutschein bestellen
      </button>

      <p className="text-xs text-center font-sans text-fog">
        Oder rufen Sie uns an:{' '}
        <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`} className="text-gold hover:underline">
          {restaurant.contact.phoneDisplay}
        </a>
      </p>
    </form>
  )
}
