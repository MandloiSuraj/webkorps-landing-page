"use client";

import Script from "next/script";

export default function StructuredData({ data, id }) {
  if (!data) return null;
  return (
    <Script
      id={id || "structured-data"}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
