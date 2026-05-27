'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Send } from 'lucide-react'
import { restaurant } from '@/content/restaurant'

export function EventRequestForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 space-y-4">
        <CheckCircle size={40} className="text-forest mx-auto" />
        <h3 className="font-display text-3xl font-normal text-ink">Anfrage gesendet!</h3>
        <p className="font-sans text-sm text-fog">
          Vielen Dank. Wir melden uns innerhalb eines Werktages bei Ihnen.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-sans text-gold hover:underline"
        >
          Neue Anfrage stellen
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Vorname *</label>
          <input type="text" required className="form-input" placeholder="Max" />
        </div>
        <div>
          <label className="form-label">Nachname *</label>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="form-label">Gewünschtes Datum *</label>
          <input type="date" required className="form-input" />
        </div>
        <div>
          <label className="form-label">Anzahl Personen *</label>
          <select required className="form-input">
            <option value="">Bitte wählen</option>
            <option>bis 10 Personen</option>
            <option>11 – 20 Personen</option>
            <option>21 – 30 Personen</option>
            <option>mehr als 30 Personen</option>
          </select>
        </div>
      </div>

      <div>
        <label className="form-label">Anlass</label>
        <select className="form-input">
          <option value="">Bitte wählen</option>
          <option>Geburtstag</option>
          <option>Firmenessen / Team-Event</option>
          <option>Familienfeier</option>
          <option>Taufe / Kommunion / Konfirmation</option>
          <option>Jubiläum</option>
          <option>Weihnachtsessen</option>
          <option>Sonstiges</option>
        </select>
      </div>

      <div>
        <label className="form-label">Ihre Wünsche & Anmerkungen</label>
        <textarea
          rows={5}
          className="form-input resize-none"
          placeholder="Beschreiben Sie Ihren Anlass, besondere Wünsche bezüglich Menü, Dekoration, Musik..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="datenschutz" required className="mt-1 accent-forest" />
        <label htmlFor="datenschutz" className="font-sans text-sm text-fog leading-relaxed">
          Ich habe die{' '}
          <Link href="/datenschutz" className="text-gold hover:underline">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und akzeptiere sie.
        </label>
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={15} />
        Anfrage absenden
      </button>

      <p className="text-xs text-fog font-sans text-center">
        Oder rufen Sie uns an:{' '}
        <a href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`} className="text-gold hover:underline">
          {restaurant.contact.phoneDisplay}
        </a>
      </p>
    </form>
  )
}
