'use client'

import * as RadixAccordion from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { FAQItem } from '@/types'

interface AccordionProps {
  items: FAQItem[]
  className?: string
  dark?: boolean
}

export function FAQAccordion({ items, className, dark = false }: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      value={openItem}
      onValueChange={setOpenItem}
      className={cn('space-y-0 divide-y', dark ? 'divide-cream-light/10' : 'divide-line', className)}
    >
      {items.map((item, index) => (
        <RadixAccordion.Item key={index} value={`item-${index}`} className="group">
          <RadixAccordion.Trigger
            className={cn(
              'flex w-full items-start justify-between gap-6 py-6 text-left',
              'font-display text-xl font-normal leading-snug',
              'transition-colors duration-200',
              dark
                ? 'text-cream-light hover:text-gold-light'
                : 'text-ink hover:text-gold',
              'focus:outline-none focus-visible:ring-1 focus-visible:ring-gold'
            )}
          >
            <span>{item.question}</span>
            <span className={cn('shrink-0 mt-1 transition-colors', dark ? 'text-gold-light' : 'text-gold')}>
              {openItem === `item-${index}` ? <Minus size={18} /> : <Plus size={18} />}
            </span>
          </RadixAccordion.Trigger>
          <RadixAccordion.Content
            className={cn(
              'overflow-hidden',
              'data-[state=open]:animate-[accordion-down_0.25s_ease-out]',
              'data-[state=closed]:animate-[accordion-up_0.25s_ease-out]'
            )}
          >
            <p
              className={cn(
                'pb-6 font-sans text-sm md:text-base leading-relaxed max-w-3xl',
                dark ? 'text-cream-dark/70' : 'text-fog'
              )}
            >
              {item.answer}
            </p>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}
