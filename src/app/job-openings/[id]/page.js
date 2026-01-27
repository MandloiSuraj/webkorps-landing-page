import JobOpeningPage from "@/components/pages/JobOpeningPage";

export const metadata = {
  title: "Job Opening Details | Webkorps",
  description: "View job opening details and apply to Webkorps.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <JobOpeningPage />;
}
