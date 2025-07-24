'use client';

export default function KVKKStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "KVKK Aydınlatma Metni",
    url: "https://ceranco.com.tr/kvkk",
    description: "Kişisel verilerin korunmasına ilişkin aydınlatma metni.",
    inLanguage: "tr"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
