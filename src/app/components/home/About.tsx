import Image from 'next/image';

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Metin */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-brand">
            CeranCo. ile Tanış
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Markamız, giyiminde kalıpların dışına çıkan özgün tasarımlar sunmak amacıyla kuruldu.
            Standartlaşmış baskılardan uzak, karakteri olan ve fark yaratan tişörtler tasarlıyoruz.
          </p>
          <p className="mt-4 text-gray-600 text-base">
            Her ürünümüzde kaliteyi, özgünlüğü ve kendini ifade etme özgürlüğünü ön planda tutuyoruz.
            Amacımız; giyimi sıradanlıktan çıkarıp, tarzı kişisel bir imzaya dönüştürmek.
          </p>
        </div>

        {/* Görsel */}
        <div>
          <Image
            src="/assets/images/hakkinda.png"
            alt="CeranCo. Hakkında"
            width={800}
            height={500}
            className="w-full object-cover object-top h-[480px] rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
