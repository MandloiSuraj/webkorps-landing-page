import ServicesData from "@/components/Services/servicesData";
import IndustryData from "@/components/Industries/IndustriData";
import TechData from "@/components/Technologies/TechData";
import projectsData from "@/components/CaseStudy/Project";

const baseUrl = "https://www.webkorps.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about-us",
    "/contact",
    "/join-us",
    "/case-study",
    "/event/ces",
    "/event/indiasoft",
    "/event/inbound",
    "/event/gitex-dubai",
    "/event/mwc",
    "/thankyou",
  ];

  const serviceRoutes = ServicesData.map((service) => `/${String(service?.id)}`);
  const technologyRoutes = TechData.map((tech) => `/technology/${String(tech?.id)}`);
  const industryRoutes = IndustryData.map((industry) => `/industry/${String(industry?.id)}`);
  const caseStudyRoutes = projectsData.map((project) => `/case-study/${project.id}`);

  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...technologyRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
  ];

  const lastModified = new Date();

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.startsWith("/") ? route : `/${route}`}`,
    lastModified,
  }));
}
