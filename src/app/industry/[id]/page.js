import IndustryPage from "@/components/pages/IndustryPage";
import IndustryData from "@/components/Industries/IndustriData";

export async function generateStaticParams() {
  return IndustryData.map((industry) => ({ id: String(industry.id) }));
}

export function generateMetadata({ params }) {
  const industry = IndustryData.find((item) => String(item.id) === params.id);
  if (!industry) {
    return { title: "Industry | Webkorps" };
  }
  const description = industry.metaDescription || industry.description || "";
  const url = industry.canonical || `https://www.webkorps.com/industry/${params.id}`;
  const title = industry.metaTitle || industry.title || "Webkorps Industry Solutions";
  const image = industry.OGImage || industry.image;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: image ? [{ url: image, alt: industry.title }] : undefined,
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
  return <IndustryPage />;
}
