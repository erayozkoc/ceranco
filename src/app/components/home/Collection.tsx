'use client';

import { useEffect, useRef, useState } from 'react';
import ProductCard from '../ProductCard';
const products = [
  {
    title: 'White Oversize Tişört',
    img: '/img/urun1.jpg',
    hover: '/img/urun1-hover.jpg',
    delay: '0',
  },
  {
    title: 'Siyah Oversize Tişört',
    img: '/img/urun2.jpg',
    hover: '/img/urun2-hover.jpg',
    delay: '100',
  },
  {
    title: 'Gri Oversize Tişört',
    img: '/img/urun3.jpg',
    hover: '/img/urun3-hover.jpg',
    delay: '200',
  },
  {
    title: 'Oversize Koleksiyon 2025',
    img: '/img/urun4.jpg',
    hover: '/img/urun4-hover.jpg',
    delay: '300',
  },
];

export default function Collection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="koleksiyon" className="bg-[#fff1f2] py-24" ref={sectionRef}>
      <div className="w-full max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          Koleksiyon
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 transition-all duration-700 delay-200 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {products.map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              img={product.img}
              hover={product.hover}
              delay={product.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
