import TechnologyPage from "@/components/pages/TechnologyPage";
import TechData from "@/components/Technologies/TechData";

export async function generateStaticParams() {
  return TechData.map((tech) => ({ id: String(tech.id) }));
}

export function generateMetadata({ params }) {
  const technology = TechData.find((item) => String(item.id) === params.id);
  if (!technology) {
    return { title: "Technology | Webkorps" };
  }
  const description = technology.metaDescription || technology.description || "";
  const url = technology.canonical || `https://www.webkorps.com/technology/${params.id}`;
  const title = technology.metaTitle || technology.title || "Webkorps Technology";
  const image = technology.OGImage || technology.image;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: image ? [{ url: image, alt: technology.title }] : undefined,
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
  return <TechnologyPage />;
}
