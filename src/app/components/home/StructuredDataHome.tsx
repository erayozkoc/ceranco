'use client';

export default function StructuredDataHome() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CeranCo",
    url: "https://ceranco.com.tr",
    description: "Oversize giyim tarzının öncüsü CeranCo. Cesur ol, kalıpları yık, tarzını konuştur.",
    inLanguage: "tr",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ceranco.com.tr/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
