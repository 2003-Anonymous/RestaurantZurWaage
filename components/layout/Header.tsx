'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, ChevronDown, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navigation, restaurant } from '@/content/restaurant'
import { MobileNav } from './MobileNav'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-line shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-waage">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex flex-col leading-none">
              <span
                className={cn(
                  'font-display text-2xl italic font-light transition-colors duration-300',
                  scrolled ? 'text-ink' : 'text-ink'
                )}
              >
                zur Waage
              </span>
              <span
                className={cn(
                  'text-[9px] uppercase tracking-[0.28em] font-sans transition-colors duration-300',
                  scrolled ? 'text-fog' : 'text-fog'
                )}
              >
                Restaurant · Gontenschwil
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3.5 py-2 text-sm font-sans font-medium transition-colors duration-200 rounded-sm',
                      isActive(item.href)
                        ? 'text-gold'
                        : 'text-ink/80 hover:text-ink'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={13}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === item.href && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 pt-2 min-w-[200px]"
                      >
                        <div className="bg-cream-light border border-line shadow-lg py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-2.5 text-sm font-sans text-ink/80 hover:text-gold hover:bg-gold-pale/50 transition-colors duration-150"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                className={cn(
                  'hidden md:inline-flex items-center gap-2 text-sm font-sans font-medium transition-colors duration-200',
                  'text-ink/70 hover:text-gold'
                )}
                aria-label="Anrufen"
              >
                <Phone size={14} />
                <span className="hidden xl:block">{restaurant.contact.phoneDisplay}</span>
              </a>

              <Link
                href="/kontakt#reservieren"
                className="hidden md:inline-flex items-center bg-forest text-cream-light px-5 py-2.5 text-xs font-sans font-medium tracking-wide transition-all duration-300 hover:bg-forest-light"
              >
                Reservieren
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 text-ink hover:text-gold transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Menü öffnen"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
