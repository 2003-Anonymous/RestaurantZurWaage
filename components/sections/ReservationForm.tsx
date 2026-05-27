'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Send } from 'lucide-react'
import { restaurant } from '@/content/restaurant'

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16 space-y-4 border border-forest/20 bg-forest-muted">
        <CheckCircle size={40} className="text-forest mx-auto" />
        <h3 className="font-display text-3xl font-normal text-ink">Anfrage gesendet!</h3>
        <p className="font-sans text-sm text-fog max-w-sm mx-auto leading-relaxed">
          Vielen Dank. Wir bestätigen Ihre Reservation per Telefon oder E-Mail innerhalb eines Werktages.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-sans text-gold hover:underline"
        >
          Neue Anfrage
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
          <label className="form-label">Telefon *</label>
          <input type="tel" required className="form-input" placeholder="079 123 45 67" />
        </div>
        <div>
          <label className="form-label">E-Mail</label>
          <input type="email" className="form-input" placeholder="max@beispiel.ch" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="sm:col-span-2">
          <label className="form-label">Datum *</label>
          <input type="date" required className="form-input" />
        </div>
        <div>
          <label className="form-label">Uhrzeit *</label>
          <select required className="form-input">
            <option value="">Zeit</option>
            <optgroup label="Mittag">
              <option>11:30</option>
              <option>12:00</option>
              <option>12:30</option>
              <option>13:00</option>
              <option>13:30</option>
            </optgroup>
            <optgroup label="Abend">
              <option>18:00</option>
              <option>18:30</option>
              <option>19:00</option>
              <option>19:30</option>
              <option>20:00</option>
              <option>20:30</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div>
        <label className="form-label">Anzahl Personen *</label>
        <select required className="form-input">
          <option value="">Bitte wählen</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? 'Person' : 'Personen'}
            </option>
          ))}
          <option value="9+">9+ Personen (Gruppenanfrage)</option>
        </select>
      </div>

      <div>
        <label className="form-label">Anmerkungen</label>
        <textarea
          rows={4}
          className="form-input resize-none"
          placeholder="Allergien, besondere Wünsche, Anlass..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="datenschutz-res" required className="mt-1 accent-forest" />
        <label htmlFor="datenschutz-res" className="font-sans text-sm text-fog leading-relaxed">
          Ich habe die{' '}
          <Link href="/datenschutz" className="text-gold hover:underline">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und akzeptiere sie.
        </label>
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        <Send size={15} />
        Reservierungsanfrage senden
      </button>

      <p className="text-xs text-fog font-sans text-center">
        Oder direkt anrufen:{' '}
        <a
          href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
          className="text-gold hover:underline"
        >
          {restaurant.contact.phoneDisplay}
        </a>
      </p>
    </form>
  )
}
