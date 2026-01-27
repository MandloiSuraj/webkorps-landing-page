import EventIndiaSoftPage from "@/components/pages/EventIndiaSoftPage";

const description =
  "Connect with Webkorps at IndiaSoft to discuss scalable IT services, mobile and web development, cloud, and AI solutions.";

export const metadata = {
  title: "Webkorps at IndiaSoft | IT Solutions Partner",
  description,
  openGraph: {
    title: "Webkorps at IndiaSoft | IT Solutions Partner",
    description,
    url: "https://www.webkorps.com/event/indiasoft",
    type: "website",
  },
  alternates: { canonical: "https://www.webkorps.com/event/indiasoft" },
};

export default function Page() {
  return <EventIndiaSoftPage />;
}
