import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import type { ServicePageConfig } from "@/types/service";

interface PricingPromiseProps {
  pricing: ServicePageConfig["pricingPromise"];
  quoteHref: string;
}

/** The promise, not a price list — answers the #1 objection early. */
export function PricingPromise({ pricing, quoteHref }: PricingPromiseProps) {
  return (
    <Section aria-labelledby="pricing-heading">
      <Container width="content">
        <h2 id="pricing-heading" className="text-h2 text-ink">
          {pricing.heading}
        </h2>
        <p className="mt-4 text-body-lg text-text-secondary">{pricing.lede}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {pricing.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-body text-text-secondary">
              <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-success" />
              {point}
            </li>
          ))}
        </ul>
        {pricing.calloutNote ? (
          <p className="mt-6 text-small text-text-muted">{pricing.calloutNote}</p>
        ) : null}
        <div className="mt-8">
          <Button asChild variant="ghost">
            <Link href={quoteHref}>{pricing.ctaLabel}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
