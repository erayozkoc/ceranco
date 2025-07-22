import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez Politikası | CeranCo',
  description: 'Sitemizde kullanılan çerezler hakkında detaylı bilgi alın.',
  alternates: {
    canonical: 'https://ceranco.com.tr/cerez-politikasi',
  },
  openGraph: {
    title: 'Çerez Politikası | CeranCo',
    description: 'Ziyaret deneyiminizi iyileştirmek için kullandığımız çerezler hakkında bilgi alın.',
    url: 'https://ceranco.com.tr/cerez-politikasi',
    type: 'article',
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
    title: 'Çerez Politikası | CeranCo',
    description: 'Ziyaret deneyiminizi iyileştirmek için kullandığımız çerezler hakkında bilgi alın.',
    images: ['https://ceranco.com.tr/assets/images/logo.png'],
    site: '@ceranco.tr',
    creator: '@ceranco.tr',
  },
};


export default function CerezPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Çerez Politikası</h1>

      <p className="mb-4">
        CeranCo olarak sitemizde çerezler kullanıyoruz. Bu politika, hangi çerezleri kullandığımızı ve neden kullandığımızı açıklar.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Çerez Nedir?</h2>
      <p className="mb-4">Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Kullandığımız Çerezler</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Oturum Çerezleri</li>
        <li>Analitik Çerezler (Google Analytics vs.)</li>
        <li>Fonksiyonel Çerezler</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
      <p className="mb-4">Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz.</p>

      <p className="text-sm text-gray-500 mt-12">Son güncelleme: 20 Temmuz 2025</p>
    </section>
  );
}
