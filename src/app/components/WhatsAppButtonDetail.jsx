'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButtonDetail({ productName }) {
  const phone = '905326715842';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const text = `Merhaba, *${productName}* hakkında bilgi almak istiyorum.%0A${currentUrl}`;
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition text-base font-medium"
    >
      <FaWhatsapp className="text-xl" />
      WhatsApp'tan Sipariş Ver
    </a>
  );
}
