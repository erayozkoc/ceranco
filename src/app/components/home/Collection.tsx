"use client";
import ProductCard from "../ ProductCard";

const products = [
  {
    title: "White Oversize Tişört",
    img: "/img/urun1.jpg",
    hover: "/img/urun1-hover.jpg",
    delay: "0",
  },
  {
    title: "Siyah Oversize Tişört",
    img: "/img/urun2.jpg",
    hover: "/img/urun2-hover.jpg",
    delay: "100",
  },
  {
    title: "Gri Oversize Tişört",
    img: "/img/urun3.jpg",
    hover: "/img/urun3-hover.jpg",
    delay: "200",
  },
  {
    title: "Oversize Koleksiyon 2025",
    img: "/img/urun4.jpg",
    hover: "/img/urun4-hover.jpg",
    delay: "300",
  },
];

export default function Collection() {
  return (
    <section id="koleksiyon" className="bg-[#fff1f2] py-24">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 animate-fade-in-up">
          Koleksiyon
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
