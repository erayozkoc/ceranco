export const metadata = {
  title: 'Gizlilik Politikası | CeranCo',
  description: 'Gizliliğiniz bizim için önemlidir. Verilerinizin nasıl işlendiğini öğrenin.',
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
