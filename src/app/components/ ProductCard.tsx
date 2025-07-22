"use client";
import Image from "next/image";

interface ProductProps {
  title: string;
  img: string;
  hover: string;
  delay?: string;
}

export default function ProductCard({ title, img, hover, delay = "0" }: ProductProps) {
  return (
    <div className="group">
      <div
        className={`relative w-full aspect-[4/5] overflow-hidden rounded-lg shadow-md animate-fade-in-up delay-${delay}`}
      >
        <Image
          src={img}
          alt={title}
          width={400}
          height={500}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Image
          src={hover}
          alt={`${title} Hover`}
          width={400}
          height={500}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      <h3
        className={`mt-4 text-center text-lg font-medium text-gray-800 animate-fade-in-up delay-${Number(delay) + 100}`}
      >
        {title}
      </h3>
    </div>
  );
}
