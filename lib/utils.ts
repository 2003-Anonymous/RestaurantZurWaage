import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`
}

export function formatEmailHref(email: string): string {
  return `mailto:${email}`
}
