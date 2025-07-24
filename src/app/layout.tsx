import './globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header';
import Footer from './components/Footer';
import OrganizationStructuredData from './components/OrganizationStructuredData';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CeranCo.',
  description: 'Oversize giyim tarzının öncüsü CeranCo. Cesur ol, kalıpları yık, tarzını konuştur.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/assets/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/favicons/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/assets/favicons/apple-touch-icon.png'
  },
  manifest: '/assets/favicons/site.webmanifest',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ceranco.com.tr/',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="icon" href="/assets/favicons/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/assets/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/favicons/apple-touch-icon.png" />
        <link rel="alternate" hrefLang="tr" href="https://ceranco.com.tr/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MV8JQQ7V');`,
          }}
        />
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
        <OrganizationStructuredData />
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
