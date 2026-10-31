import type { Metadata } from "next";
import Link from "next/link";
import { JobCard } from "@/components/cards/job-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Recent jobs",
  description:
    "A sample of recent roofing work across Newcastle and the North East — emergency repairs, flat roofs, re-roofs, leak repairs, guttering and more.",
};

export default function RecentJobsPage() {
  const { heading, intro, jobs } = siteConfig.recentJobs;

  return (
    <Section>
      <Container>
        <h1 className="text-h1 text-ink">{heading}</h1>
        <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">{intro}</p>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <li key={job.id}>
              <JobCard {...job} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-3 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body text-ink">
            Got a job like one of these? We&rsquo;ll give you a free, no-obligation quote.
          </p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
