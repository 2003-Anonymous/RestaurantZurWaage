import Link from 'next/link'
import { Phone, CalendarDays } from 'lucide-react'
import { restaurant } from '@/content/restaurant'
import { cn } from '@/lib/utils'

interface ReservationCTAProps {
  variant?: 'banner' | 'card' | 'inline'
  dark?: boolean
  className?: string
}

export function ReservationCTA({ variant = 'banner', dark = false, className }: ReservationCTAProps) {
  if (variant === 'card') {
    return (
      <div
        className={cn(
          'border p-8 md:p-10 space-y-6',
          dark ? 'bg-forest border-forest-light text-cream-light' : 'bg-cream-light border-line',
          className
        )}
      >
        <div className="space-y-2">
          <p className={cn('label-gold text-xs')}>Tisch reservieren</p>
          <h3 className={cn('font-display text-3xl font-normal', dark ? 'text-cream-light' : 'text-ink')}>
            Wir freuen uns auf Sie
          </h3>
          <p className={cn('font-sans text-sm leading-relaxed', dark ? 'text-cream-dark/80' : 'text-fog')}>
            {restaurant.reservationNote}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-medium transition-all duration-300',
              dark
                ? 'bg-gold text-cream-light hover:bg-gold-light'
                : 'bg-forest text-cream-light hover:bg-forest-light'
            )}
          >
            <Phone size={15} />
            {restaurant.contact.phoneDisplay}
          </a>
          <Link
            href="/kontakt#reservieren"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 text-sm font-sans font-medium border transition-all duration-300',
              dark
                ? 'border-cream-light/40 text-cream-light hover:bg-cream-light/10'
                : 'border-ink text-ink hover:bg-ink hover:text-cream-light'
            )}
          >
            <CalendarDays size={15} />
            Online anfragen
          </Link>
        </div>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={cn('flex flex-col sm:flex-row gap-3', className)}>
        <a
          href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
          className="btn-primary"
        >
          <Phone size={15} />
          Tisch reservieren
        </a>
        <Link href="/essen" className="btn-secondary">
          Speisekarte ansehen
        </Link>
      </div>
    )
  }

  // banner variant
  return (
    <section className={cn('bg-forest py-14 md:py-20', className)}>
      <div className="container-waage">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-2">
            <p className="label-gold">Jetzt reservieren</p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-cream-light">
              Wir freuen uns auf Ihren Besuch
            </h2>
            <p className="font-sans text-sm text-cream-dark/70 max-w-md">
              {restaurant.reservationNote}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-gold text-cream-light px-7 py-3.5 text-sm font-sans font-medium tracking-wide transition-all duration-300 hover:bg-gold-light"
            >
              <Phone size={15} />
              {restaurant.contact.phoneDisplay}
            </a>
            <Link
              href="/kontakt#reservieren"
              className="inline-flex items-center gap-2 border border-cream-light/40 text-cream-light px-7 py-3.5 text-sm font-sans font-medium tracking-wide transition-all duration-300 hover:bg-cream-light/10"
            >
              <CalendarDays size={15} />
              Online anfragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
