// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/research',
    '/books',
    '/articles',
    '/practice',
    '/contact',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}