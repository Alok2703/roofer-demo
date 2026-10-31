import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/quote-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = { title: "Get a free quote" };

interface QuotePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const requested = typeof params.problem === "string" ? params.problem : undefined;
  const defaultProblem = siteConfig.problemSelector.problems.some(
    (problem) => problem.id === requested
  )
    ? requested
    : undefined;

  return (
    <Section>
      <Container width="content">
        <h1 className="text-h1 text-ink">Get a free quote</h1>
        <p className="mt-4 text-body-lg text-text-secondary">
          Tell us what&rsquo;s happening and how to reach you — add a photo if it
          helps. No obligation, and we&rsquo;ll come back to you quickly.
        </p>
        <div className="mt-8 max-w-md">
          <QuoteForm defaultProblem={defaultProblem} />
        </div>
      </Container>
    </Section>
  );
}
