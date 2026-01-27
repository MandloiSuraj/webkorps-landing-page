import { cardsData } from "../CaseStudy";
import IndustryData from "../Industries/IndustriData";
import ServicesData from "../Services/servicesData";
import TechData from "../Technologies/TechData";
const staticRoutes = [
  { path: '/', changefreq: 'daily', priority: 1 },
  { path: '/about-us', changefreq: 'weekly', priority: 0.8 },
  { path: '/contact', changefreq: 'weekly', priority: 0.8 },
  { path: '/join-us', changefreq: 'monthly', priority: 0.8 },
  { path: '/case-study', changefreq: 'weekly', priority: 0.6 },
  { path: '/event/ces', changefreq: 'weekly', priority: 0.6 },
  { path: '/event/indiasoft', changefreq: 'weekly', priority: 0.6 },
];
IndustryData.forEach((industry, i) => {
  if (typeof industry?.id !== 'string' && typeof industry?.id !== 'number') {
    console.log(`⚠️ Bad industry id at index ${i}:`, industry?.id);
  }
});
ServicesData.forEach((service, i) => {
  if (typeof service?.id !== 'string' && typeof service?.id !== 'number') {
    console.log(`⚠️ Bad service id at index ${i}:`, service?.id);
  }
});

const dynamicCaseStudyRoutes = cardsData.map(card => ({
  path: `/case-study/${card.page}`,
  changefreq: 'weekly',
  priority: 0.6,
}));

const serviceRoutes = ServicesData.map(service => ({
  path: `/${String(service?.id)}`,
  changefreq: 'weekly',
  priority: 0.6,
}));

const technologyRoutes = TechData.map(tech => ({
  path: `/technology/${String(tech?.id)}`,
  changefreq: 'weekly',
  priority: 0.6,
}));

const industryRoutes = IndustryData.map(industry => ({
  path: `/industry/${String(industry?.id)}`,
  changefreq: 'weekly',
  priority: 0.6,
}));

const routes = [
  ...staticRoutes,
  ...serviceRoutes,
  ...technologyRoutes,
  ...industryRoutes,
  ...dynamicCaseStudyRoutes,
];

export default routes;
