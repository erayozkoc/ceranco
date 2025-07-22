import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | CeranCo',
  description: 'CeranCo olarak kişisel verilerinizi gizli tutmak ve güvenliğini sağlamak önceliğimizdir. Gizlilik politikamızı inceleyin.',
  alternates: {
    canonical: 'https://ceranco.com.tr/gizlilik-politikasi',
  },
  openGraph: {
    title: 'Gizlilik Politikası | CeranCo',
    description: 'Kişisel verilerinizin gizliliği ve güvenliği bizim için önceliklidir. Detaylı gizlilik politikamızı inceleyin.',
    url: 'https://ceranco.com.tr/gizlilik-politikasi',
    type: 'article',
    siteName: 'CeranCo',
    images: [
      {
        url: 'https://ceranco.com.tr/assets/og-image.jpg', // ✅ Absolute path
        width: 1200,
        height: 630,
        alt: 'CeranCo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gizlilik Politikası | CeranCo',
    description: 'Veri güvenliği ve gizliliğe verdiğimiz önemi inceleyin.',
    images: ['https://ceranco.com.tr/assets/images/logo.png'],
    creator: '@ceranco.tr',
  },
};


export default function GizlilikPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>

      <p className="mb-4">
        CeranCo olarak kullanıcılarımızın gizliliğine önem veriyoruz. Bu politika, sizden hangi bilgileri topladığımızı ve bunları nasıl kullandığımızı açıklar.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Toplanan Bilgiler</h2>
      <p className="mb-4">Ad, soyad, e-posta adresi gibi kişisel veriler toplanabilir.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Kullanım Amaçları</h2>
      <p className="mb-4">İletişim, sipariş işlemleri ve kullanıcı deneyimini geliştirmek için kullanılır.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Bilgi Paylaşımı</h2>
      <p className="mb-4">Yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz.</p>

      <p className="text-sm text-gray-500 mt-12">Son güncelleme: 20 Temmuz 2025</p>
    </section>
  );
}
