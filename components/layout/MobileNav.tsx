'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, ChevronDown, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navigation, restaurant } from '@/content/restaurant'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-cream shadow-2xl flex flex-col lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <div>
                <span className="font-display text-xl italic font-light text-ink">zur Waage</span>
                <p className="text-[9px] uppercase tracking-[0.25em] text-fog font-sans mt-0.5">
                  Restaurant · Gontenschwil
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center text-ink/60 hover:text-ink transition-colors"
                aria-label="Menü schliessen"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto py-4">
              {navigation.map((item) => (
                <div key={item.href} className="border-b border-line/50">
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedItem(expandedItem === item.href ? null : item.href)
                        }
                        className="flex items-center justify-between w-full px-6 py-4 text-left"
                      >
                        <span className="font-sans text-base font-medium text-ink">
                          {item.label}
                        </span>
                        <ChevronDown
                          size={16}
                          className={cn(
                            'text-fog transition-transform duration-200',
                            expandedItem === item.href && 'rotate-180'
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="overflow-hidden bg-cream-dark/20"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="block px-10 py-3 text-sm font-sans text-ink/70 hover:text-gold transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block px-6 py-4 font-sans text-base font-medium text-ink hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-line px-6 py-6 space-y-4">
              <Link
                href="/kontakt#reservieren"
                onClick={onClose}
                className="flex items-center justify-center bg-forest text-cream-light py-3.5 text-sm font-sans font-medium tracking-wide transition-all hover:bg-forest-light w-full"
              >
                Tisch reservieren
              </Link>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${restaurant.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm font-sans text-ink/70 hover:text-gold transition-colors"
                >
                  <Phone size={14} />
                  {restaurant.contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${restaurant.contact.email}`}
                  className="flex items-center gap-3 text-sm font-sans text-ink/70 hover:text-gold transition-colors"
                >
                  <Mail size={14} />
                  {restaurant.contact.email}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
