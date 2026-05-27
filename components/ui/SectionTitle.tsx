import { cn } from '@/lib/utils'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  dark?: boolean
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = 'left',
  className,
  titleClassName,
  dark = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <p
          className={cn(
            'text-xs uppercase tracking-[0.22em] font-sans font-medium',
            dark ? 'text-gold-light' : 'text-gold'
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          'font-display font-normal leading-[1.08] tracking-tight text-balance',
          'text-4xl md:text-5xl',
          dark ? 'text-cream-light' : 'text-ink',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'font-sans text-base md:text-lg leading-relaxed max-w-2xl',
            dark ? 'text-cream-dark/80' : 'text-fog',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
