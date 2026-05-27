export interface OpeningHourEntry {
  days: string
  lunch: string | null
  dinner: string | null
}

export interface MenuCategory {
  id: string
  label: string
  icon?: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price?: string
  tags?: string[]
  isVegetarian?: boolean
  isVegan?: boolean
  isSeasonal?: boolean
}

export interface MenuSection {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

export interface WineEntry {
  name: string
  region: string
  type: 'Weiss' | 'Rot' | 'Rosé' | 'Schaum'
  description?: string
  priceGlass?: string
  priceBottle?: string
  isOpen?: boolean
}

export interface EventItem {
  id: string
  title: string
  subtitle?: string
  description: string
  price?: string
  priceNote?: string
  date?: string
  dateRange?: string
  requiresReservation?: boolean
}

export interface FAQItem {
  question: string
  answer: string
}

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}
