'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaTimes,
} from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="w-full max-w-7xl px-6 mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand" aria-label="Anasayfa">
          CeranCo.
        </Link>
        <nav className="hidden md:flex gap-6 text-base font-medium text-gray-700">
          <Link href="/" className="hover:text-brand transition">Anasayfa</Link>
          <Link href="#koleksiyon" className="hover:text-brand transition">Koleksiyon</Link>
          <Link href="#hakkimizda" className="hover:text-brand transition">Hakkımızda</Link>
          <Link href="#abone" className="hover:text-brand transition">Abone Ol</Link>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-brand focus:outline-none"
          aria-label={menuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
        >
          {menuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-[calc(100vh-72px)] px-6 pt-20 pb-4">
          {/* Menü Linkleri */}
          <div className="flex flex-col items-center gap-6 text-xl font-semibold text-gray-800 text-center">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-brand">Anasayfa</Link>
            <Link href="#koleksiyon" onClick={() => setMenuOpen(false)} className="hover:text-brand">Koleksiyon</Link>
            <Link href="#hakkimizda" onClick={() => setMenuOpen(false)} className="hover:text-brand">Hakkımızda</Link>
            <Link href="#abone" onClick={() => setMenuOpen(false)} className="hover:text-brand">Abone Ol</Link>

            <p className="text-gray-500 text-sm max-w-xs mt-2">
              Yeni koleksiyonlardan, özel fırsatlardan ve stil önerilerinden ilk sen haberdar ol.
            </p>
          </div>

          {/* Sosyal Medya */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-sm uppercase tracking-wide text-gray-400 text-center mb-3">Bizi Takip Et</h4>
            <div className="flex justify-center gap-4 text-white">
              <a
                href="https://instagram.com/ceranco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-pink-500 hover:bg-pink-600 transition p-3 rounded-full"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@ceranco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="bg-black hover:bg-gray-800 transition p-3 rounded-full"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ceranco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="bg-blue-500 hover:bg-blue-600 transition p-3 rounded-full"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
