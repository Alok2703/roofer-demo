import { ProblemCard } from "@/components/cards/problem-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ServicePageConfig } from "@/types/service";

interface SymptomGridProps {
  symptoms: ServicePageConfig["symptoms"];
  ctaLabel?: string;
}

/** Service-level problem selector: symptoms in the homeowner's own words. */
export function SymptomGrid({ symptoms, ctaLabel = "Get help" }: SymptomGridProps) {
  return (
    <Section background="surface" aria-labelledby="symptoms-heading">
      <Container>
        <h2 id="symptoms-heading" className="text-h2 text-ink">
          {symptoms.heading}
        </h2>
        {symptoms.supportingText ? (
          <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">
            {symptoms.supportingText}
          </p>
        ) : null}
        <ul className="mt-12 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {symptoms.items.map((symptom) => (
            <li key={symptom.label}>
              <ProblemCard
                label={symptom.label}
                description={symptom.description}
                ariaLabel={symptom.ariaLabel}
                ctaLabel={ctaLabel}
                href={`/quote?problem=${encodeURIComponent(symptom.problemId)}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
