"use client";
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
export default function HeroBanner() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden bg-white">
      {/* Kırmızı blur arka plan efekti */}
      <div className="absolute w-[600px] h-[600px] bg-brand opacity-20 blur-3xl rounded-full animate-pulse z-0 top-10 left-1/2 -translate-x-1/2" />

      {/* Logo */}
      <Image
        src="/assets/images/logo.png"
        alt="CeranCo. Logo"
        width={150}
        height={150}
        className="mb-8 z-10 animate-fade-in-up"
      />

      {/* Ana Başlık */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 z-10 animate-fade-in-up">
        Oversize Giy, Özgür Hisset
      </h1>

      {/* Alt açıklama */}
      <p className="text-lg text-gray-700 mb-6 max-w-xl z-10 animate-fade-in-up delay-200">
        Kalıpları yıkan oversize tasarımlar. Cesur ol, rahat hisset, tarzını yansıt.
      </p>

      {/* Instagram Butonu */}
      <a
        href="https://instagram.com/ceranco.tr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand text-white px-6 py-3 rounded-full text-lg hover:scale-110 hover:bg-brand-dark transition-all duration-300 z-10 animate-fade-in-up delay-300 shadow-lg inline-flex items-center gap-2"
      >
        <FaInstagram className="w-5 h-5" />
        Instagram&apos;da Keşfet
      </a>
    </section>
  );
}
