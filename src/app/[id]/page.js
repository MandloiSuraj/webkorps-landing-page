import ServicesPage from "@/components/pages/ServicesPage";
import ServicesData from "@/components/Services/servicesData";

export async function generateStaticParams() {
  return ServicesData.map((service) => ({ id: String(service.id) }));
}

export function generateMetadata({ params }) {
  const service = ServicesData.find((item) => String(item.id) === params.id);
  if (!service) {
    return { title: "Service | Webkorps" };
  }
  const description = service.metaDescription || service.description || "";
  const url = service.canonical || `https://www.webkorps.com/${params.id}`;
  const title = service.metaTitle || service.title || "Webkorps Services";
  const image = service.OGImage || service.twitterImage || service.image;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: image ? [{ url: image, alt: service.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default function Page() {
  return <ServicesPage />;
}
