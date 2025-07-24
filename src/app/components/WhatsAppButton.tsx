'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Merhaba, CeranCo Destek Ekibi’ne hoş geldiniz.\nÜrünlerimiz veya sipariş süreciyle ilgili sorularınızı buradan iletebilirsiniz. En kısa sürede yanıt vereceğiz.`
  );

  return (
    <a
      href={`https://wa.me/905326715842?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="w-11 h-11" />
    </a>
  );
}
