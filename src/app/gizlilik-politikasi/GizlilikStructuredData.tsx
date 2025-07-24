'use client';

export default function GizlilikStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gizlilik Politikası",
    url: "https://ceranco.com.tr/gizlilik-politikasi",
    description: "Kişisel verilerin nasıl toplandığı ve korunduğu hakkında bilgiler içeren gizlilik politikası.",
    inLanguage: "tr"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
