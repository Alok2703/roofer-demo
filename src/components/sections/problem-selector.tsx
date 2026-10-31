import { ProblemCard } from "@/components/cards/problem-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/content/site.config";

export function ProblemSelector() {
  const { heading, supportingText, ctaLabel, destination, problems } =
    siteConfig.problemSelector;

  return (
    <Section background="surface" aria-labelledby="problem-selector-heading">
      <Container>
        <h2 id="problem-selector-heading" className="text-h2 text-ink">
          {heading}
        </h2>
        {supportingText ? (
          <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">
            {supportingText}
          </p>
        ) : null}

        <ul className="mt-12 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {problems.map((problem) => (
            <li key={problem.id}>
              <ProblemCard
                label={problem.label}
                ariaLabel={problem.ariaLabel}
                description={problem.description}
                ctaLabel={ctaLabel}
                href={`${destination}?problem=${encodeURIComponent(problem.id)}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
