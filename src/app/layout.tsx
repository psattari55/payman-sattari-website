// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import MainNav from '@/components/layout/MainNav'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { siteConfig } from '@/config/metadata'
import JsonLd, {
  generateSchemaOrgPerson,
  generateSchemaOrgWebsite
} from '@/components/ui/JsonLd'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B6D1RK9WGF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B6D1RK9WGF');
          `}
        </Script>
      </head>
      <body className={`${inter.className} text-gray-700`}>
        <JsonLd data={generateSchemaOrgPerson()} />
        <JsonLd data={generateSchemaOrgWebsite()} />
        <MainNav />
        <main className="min-h-screen">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  )
}