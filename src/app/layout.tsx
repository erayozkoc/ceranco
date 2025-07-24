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
    <>
      <html lang="tr" suppressHydrationWarning>
        <body className={`${poppins.className} overflow-x-hidden bg-brand`}>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MV8JQQ7V"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
          <OrganizationStructuredData />
          <Header />
          {children}
          <WhatsAppButton />
          <Footer />

        </body>
      </html>
    </>
  );
}
