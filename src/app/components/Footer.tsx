'use client';

import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#1a1a1a] via-[#1f1f1f] to-[#2a2a2a] text-white pt-10 pb-3 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Marka */}
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-brand">CeranCo.</h3>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Oversize giyimin cesur ve rahat markası. Tarzını yansıt, kalıpları kır.
          </p>
        </div>

        {/* Menü */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-100">Hızlı Erişim</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="#koleksiyon" className="hover:text-white transition">Koleksiyon</Link></li>
            <li><Link href="#hakkimizda" className="hover:text-white transition">Hakkımızda</Link></li>
            <li><Link href="#abone" className="hover:text-white transition">Abone Ol</Link></li>
          </ul>
        </div>

        {/* Yasal */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-100">Yasal</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/kvkk" className="hover:text-white transition">KVKK Aydınlatma Metni</Link></li>
            <li><Link href="/gizlilik-politikasi" className="hover:text-white transition">Gizlilik Politikası</Link></li>
            <li><Link href="/cerez-politikasi" className="hover:text-white transition">Çerez Politikası</Link></li>
          </ul>
        </div>

        {/* Sosyal Medya */}

        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-100">Bizi Takip Et</h4>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/ceranco.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark transition rounded-full p-2"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://twitter.com/cerancotr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark transition rounded-full p-2"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://tiktok.com/@ceranco.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark transition rounded-full p-2"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-white">CeranCo.</span> Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
