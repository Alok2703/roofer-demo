import { Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";
import type { ServicePageConfig } from "@/types/service";

interface StepFlowProps {
  howItWorks: ServicePageConfig["howItWorks"];
}

/** De-risks contact: the process ends predictably. Ghost call CTA catches the feeling. */
export function StepFlow({ howItWorks }: StepFlowProps) {
  const { business } = siteConfig;

  return (
    <Section aria-labelledby="how-it-works-heading">
      <Container>
        <h2 id="how-it-works-heading" className="text-h2 text-ink">
          {howItWorks.heading}
        </h2>
        <ol className="mt-12 flex flex-col gap-3 md:flex-row md:gap-4">
          {howItWorks.steps.map((step, index) => (
            <li
              key={step}
              className="flex flex-1 items-center gap-3 rounded-md border border-border bg-surface px-6 py-4"
            >
              <span
                aria-hidden="true"
                className="text-caption text-text-muted"
              >
                {index + 1}
              </span>
              <span className="text-small font-semibold text-text-secondary">
                {step}
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button asChild variant="ghost">
            <a
              href={`tel:${business.phoneHref}`}
              aria-label={`${howItWorks.phoneCtaLabel}, ${business.phone}`}
            >
              <Phone aria-hidden="true" />
              {howItWorks.phoneCtaLabel} — <span className="tabular">{business.phone}</span>
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
