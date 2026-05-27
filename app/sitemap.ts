import type { MetadataRoute } from 'next'

const BASE_URL = 'https://zur-waage.ch'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/essen', changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: '/feiern', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/gutscheine', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: '/aktuelles', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/ueber-uns', changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: '/kontakt', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/datenschutz', changeFrequency: 'yearly' as const, priority: 0.2 },
    { url: '/impressum', changeFrequency: 'yearly' as const, priority: 0.2 },
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
