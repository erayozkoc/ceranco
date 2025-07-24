import HeroBanner from "./components/home/HeroBanner";
import Collection from "./components/home/Collection";
import About from "./components/home/About";
import Subscriber from "./components/home/Subscriber";
import { Metadata } from "next";
import StructuredDataHome from "./components/home/StructuredDataHome";

export const metadata: Metadata = {
  title: 'CeranCo | Oversize Giyim',
  description: 'Oversize modasının en yenileriyle tarzını konuştur. Yeni koleksiyonları hemen keşfet!',
  alternates: {
    canonical: 'https://ceranco.com.tr/',
  },
  openGraph: {
    title: 'CeranCo | Oversize Giyim',
    description: 'Cesur ol, kalıpları yık, tarzını yansıt. Yeni oversize koleksiyonlarla tanış.',
    url: 'https://ceranco.com.tr/',
    type: 'website',
    siteName: 'CeranCo',
    images: [
      {
        url: 'https://ceranco.com.tr/assets/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'CeranCo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CeranCo | Oversize Giyim',
    description: 'Cesur ol, kalıpları yık, tarzını yansıt. Yeni oversize koleksiyonlarla tanış.',
    images: ['https://ceranco.com.tr/assets/images/logo.png'],
    site: '@cerancotr',
    creator: '@cerancotr',
  },
};


export default function Home() {
  return (
    <>
      <StructuredDataHome />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <HeroBanner />
          <Collection />
          <About />
          <Subscriber />
        </main>

      </div>
    </>
  );
}
