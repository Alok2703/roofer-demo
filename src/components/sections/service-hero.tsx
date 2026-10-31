import Link from "next/link";
import { Phone } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { TrustChip } from "@/components/common/trust-chip";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";
import type { ServicePageConfig } from "@/types/service";

interface ServiceHeroProps {
  service: ServicePageConfig;
}

/** Service page hero. Mode decides CTA order: emergency = Call first. */
export function ServiceHero({ service }: ServiceHeroProps) {
  const { business } = siteConfig;
  const quoteHref = `/quote?problem=${encodeURIComponent(service.problemId)}`;

  const callButton = (
    <Button
      asChild
      size="lg"
      fullWidth
      variant={service.mode === "emergency" ? "primary" : "secondary"}
      className="sm:w-auto"
    >
      <a href={`tel:${business.phoneHref}`} aria-label={`Call now, ${business.phone}`}>
        <Phone aria-hidden="true" />
        Call now
      </a>
    </Button>
  );

  const quoteButton = (
    <Button
      asChild
      size="lg"
      fullWidth
      variant={service.mode === "emergency" ? "secondary" : "primary"}
      className="sm:w-auto"
    >
      <Link href={quoteHref}>{service.quoteCtaLabel}</Link>
    </Button>
  );

  return (
    <Section aria-labelledby="service-hero-heading">
      <Container>
        <Breadcrumb
          trail={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]}
          current={service.title}
        />
        <div className="mt-8 max-w-content">
          <h1 id="service-hero-heading" className="text-h1 text-ink">
            {service.h1}
          </h1>
          <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">
            {service.subhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {service.mode === "emergency" ? (
              <>
                {callButton}
                {quoteButton}
              </>
            ) : (
              <>
                {quoteButton}
                {callButton}
              </>
            )}
          </div>
          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Why homeowners trust us">
            {service.trustChips.map((chip) => (
              <li key={chip.label}>
                <TrustChip {...chip} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
