import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ServicePageConfig } from "@/types/service";

interface TrustListProps {
  trust: ServicePageConfig["whyChooseUs"];
}

/** Customer-outcome trust statements. No CTA by design (Bible §12). */
export function TrustList({ trust }: TrustListProps) {
  return (
    <Section background="surface" aria-labelledby="trust-heading">
      <Container>
        <h2 id="trust-heading" className="text-h2 text-ink">
          {trust.heading}
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:gap-6">
          {trust.items.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-border bg-white p-6"
            >
              <h3 className="text-h4 text-ink">{item.title}</h3>
              <p className="mt-2 text-body text-text-secondary">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
