import { ProblemCard } from "@/components/cards/problem-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ServicePageConfig } from "@/types/service";

interface RelatedServicesProps {
  related: ServicePageConfig["related"];
}

/** Catches misdiagnosed visitors; builds the internal-link mesh. */
export function RelatedServices({ related }: RelatedServicesProps) {
  return (
    <Section aria-labelledby="related-heading">
      <Container>
        <h2 id="related-heading" className="text-h2 text-ink">
          {related.heading}
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:gap-6">
          {related.items.map((item) => (
            <li key={item.href}>
              <ProblemCard
                label={item.label}
                description={item.description}
                href={item.href}
                ctaLabel="View service"
                ariaLabel={`View ${item.label.toLowerCase()}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
