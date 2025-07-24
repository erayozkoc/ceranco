import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | CeranCo',
  description: 'Kişisel verilerinizin nasıl işlendiğini ve saklandığını öğrenin.',
  alternates: {
    canonical: 'https://ceranco.com.tr/kvkk',
  },
  openGraph: {
    title: 'KVKK Aydınlatma Metni | CeranCo',
    description: 'Kişisel verilerinizin gizliliği ve güvenliği bizim için önceliklidir.',
    url: 'https://ceranco.com.tr/kvkk',
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
    title: 'KVKK Aydınlatma Metni | CeranCo',
    description: 'Kişisel verilerinizin gizliliği ve güvenliği bizim için önceliklidir.',
    images: ['https://ceranco.com.tr/assets/images/logo.png'],
    site: '@cerancotr',
    creator: '@cerancotr',
  },
};
export default function KVKKPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">KVKK Aydınlatma Metni</h1>

      <p className="mb-4">
        CeranCo olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında kişisel verilerinizin gizliliğini ve güvenliğini önemsiyoruz.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Veri Sorumlusu</h2>
      <p className="mb-4">Veri sorumlusu sıfatıyla CeranCo olarak kişisel verilerinizi işliyoruz.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Kişisel Verilerin İşlenme Amaçları</h2>
      <p className="mb-4">Ürün ve hizmet sunumu, sipariş yönetimi, iletişim, yasal yükümlülüklerin yerine getirilmesi gibi amaçlarla verileriniz işlenmektedir.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Haklarınız</h2>
      <p className="mb-4">KVKK’nın 11. maddesi uyarınca kişisel verilerinizle ilgili haklarınızı kullanabilirsiniz. Detaylı bilgi için bizimle iletişime geçebilirsiniz.</p>

      <p className="text-sm text-gray-500 mt-12">Son güncelleme: 20 Temmuz 2025</p>
    </section>
  );
}
