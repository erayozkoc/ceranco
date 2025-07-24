'use client';

export default function CerezStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Çerez Politikası",
    url: "https://ceranco.com.tr/cerez-politikasi",
    description: "Web sitemizde çerez kullanımına ilişkin politika detayları.",
    inLanguage: "tr"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
