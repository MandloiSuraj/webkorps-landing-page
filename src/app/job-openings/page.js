import JobOpeningListPage from "@/components/pages/JobOpeningListPage";

export const metadata = {
  title: "Job Openings | Webkorps",
  description: "Browse current job openings at Webkorps and apply to join our team.",
  alternates: { canonical: "https://www.webkorps.com/job-openings" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <JobOpeningListPage />;
}
