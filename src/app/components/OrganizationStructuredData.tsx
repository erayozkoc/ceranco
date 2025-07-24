'use client';

export default function OrganizationStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CeranCo",
    url: "https://ceranco.com.tr",
    logo: "https://ceranco.com.tr/assets/logo.svg",
    sameAs: [
      "https://instagram.com/ceranco.tr",
      "https://twitter.com/cerancotr",
      "https://tiktok.com/@ceranco.tr"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90 532 671 58 42",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
