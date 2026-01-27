import CaseStudyDetailsPage from "@/components/pages/CaseStudyDetailsPage";
import projectsData from "@/components/CaseStudy/Project";

export async function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }) {
  const project = projectsData.find((item) => item.id === params.id);
  if (!project) {
    return { title: "Case Study | Webkorps" };
  }
  return {
    title: project.metaTitle || project.title,
    description: project.metaDescription || project.description,
    alternates: { canonical: project.canonicalTag || `https://www.webkorps.com/case-study/${params.id}` },
    openGraph: {
      title: project.metaTitle || project.title,
      description: project.metaDescription || project.description,
      url: project.canonicalTag || `https://www.webkorps.com/case-study/${params.id}`,
      type: "article",
      images: [
        {
          url: project.image,
          alt: project.altText || project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle || project.title,
      description: project.metaDescription || project.description,
      images: [project.image],
    },
  };
}

export default function Page() {
  return <CaseStudyDetailsPage />;
}
