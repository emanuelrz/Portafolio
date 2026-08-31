import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Emanuel Julian Ramirez — Full-Stack Developer',
  description:
    'Portafolio de Emanuel Julian Ramirez. Técnico Universitario en Programación (UTN FRCU) y Especialista en Desarrollo Web Full-Stack (ITBA & Santander).',
  metadataBase: new URL('https://emanuelrz.github.io/Portafolio'),
  openGraph: {
    title: 'Emanuel Julian Ramirez — Full-Stack Developer',
    description:
      'Técnico Universitario en Programación (UTN FRCU) y Especialista en Desarrollo Web Full-Stack (ITBA & Santander). Construyo sistemas robustos y soluciones digitales.',
    url: 'https://emanuelrz.github.io/Portafolio/',
    siteName: 'Emanuel Ramirez · Portfolio',
    images: [
      {
        url: 'https://emanuelrz.github.io/Portafolio/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FULL-STACK DEVELOPER — Emanuel Julian Ramirez',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emanuel Julian Ramirez — Full-Stack Developer',
    description:
      'Técnico Universitario en Programación (UTN FRCU) y Especialista en Desarrollo Web Full-Stack (ITBA & Santander).',
    images: ['https://emanuelrz.github.io/Portafolio/og-image.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141210',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
