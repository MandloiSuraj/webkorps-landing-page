import HomePage from "@/components/pages/HomePage";
import StructuredData from "@/components/SEO/StructuredData";

const description =
  "Discover innovative IT solutions with Webkorps, a trusted IT service provider offering scalable and secure IT services to drive your digital transformation and business growth.";

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webkorps",
  url: "https://www.webkorps.com",
  logo: "https://www.webkorps.com/logo.png",
  sameAs: [
    "https://www.facebook.com/WebKorps/",
    "https://www.linkedin.com/company/webkorps/",
    "https://twitter.com/webkorps",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@webkorps.com",
      url: "https://www.webkorps.com/contact",
    },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webkorps",
  url: "https://www.webkorps.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.webkorps.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Webkorps",
  url: "https://www.webkorps.com",
  image: "https://www.webkorps.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, Winway World Offices, Vijay Nagar",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452010",
    addressCountry: "IN",
  },
};

export const metadata = {
  title: "Leading IT Solutions and IT Services Provider | Webkorps",
  description,
  openGraph: {
    title: "Leading IT Solutions and IT Services Provider | Webkorps",
    description,
    url: "https://www.webkorps.com/",
    type: "website",
    images: [
      {
        url: "https://webkorps-app.s3.us-east-1.amazonaws.com/it-solutions-and-it-services-provider.webp",
        width: 1200,
        height: 630,
        alt: "Leading IT solutions and IT services provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading IT Solutions and IT Services Provider | Webkorps",
    description,
    images: ["https://webkorps-app.s3.us-east-1.amazonaws.com/it-solutions-and-it-services-provider.webp"],
  },
  alternates: { canonical: "https://www.webkorps.com/" },
};

export default function Home() {
  return (
    <>
      <HomePage />
      <StructuredData id="org-ld" data={orgLd} />
      <StructuredData id="website-ld" data={websiteLd} />
      <StructuredData id="local-business-ld" data={localBusinessLd} />
    </>
  );
}
