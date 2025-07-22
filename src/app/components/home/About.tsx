'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="hakkimizda"
      className="py-24 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="w-full max-w-7xl px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Metin */}
        <div
          className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
        >
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
        <div
          className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
        >
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
