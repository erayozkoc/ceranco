// app/layout.tsx
import './globals.css'
import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import WhatsAppButton from './components/WhatsAppButton'
import Header from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CeranCo.',
  description: 'Oversize giyim tarzının öncüsü CeranCo. Cesur ol, kalıpları yık, tarzını konuştur.',
  icons: {
    icon: [
      { url: '/assets/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/favicons/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/assets/favicons/favicon.ico',
    apple: '/assets/favicons/apple-touch-icon.png',
  },
  manifest: '/assets/favicons/site.webmanifest',
  robots: 'index, follow',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="tr" href="https://ceranco.com.tr/" />
      </head>
      <body className={`${poppins.className} overflow-x-hidden bg-brand`}>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
