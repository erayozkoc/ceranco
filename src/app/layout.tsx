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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MV8JQQ7V');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="tr" href="https://ceranco.com.tr/" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${poppins.className} overflow-x-hidden bg-brand`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MV8JQQ7V"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
