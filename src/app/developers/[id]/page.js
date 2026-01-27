import DeveloperPage from "@/components/pages/DeveloperPage";
import DevloperData from "@/components/DeveloperHire/DeveloperData";

export async function generateStaticParams() {
  return (DevloperData || []).map((developer) => ({ id: String(developer.id) }));
}

export function generateMetadata({ params }) {
  const developer = (DevloperData || []).find((item) => String(item.id) === params.id);
  if (!developer) {
    return { title: "Hire Developers | Webkorps" };
  }
  const title = developer.metaTitle || developer.title || "Hire Developers | Webkorps";
  const description = developer.metaDescription || developer.description || "";
  const url = developer.canonical || `https://www.webkorps.com/developers/${params.id}`;
  const image = developer.OGImage || developer.image;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: image ? [{ url: image, alt: developer.title }] : undefined,
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
  return <DeveloperPage />;
}
