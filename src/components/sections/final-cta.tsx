import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";
import type { ServiceMode } from "@/types/service";

interface FinalCtaProps {
  heading: string;
  blurb: string;
  mode: ServiceMode;
  quoteHref: string;
  quoteLabel: string;
}

/** The page's only dark band (Bible §12): white primary on Ink + large tel link. */
export function FinalCta({ heading, blurb, mode, quoteHref, quoteLabel }: FinalCtaProps) {
  const { business } = siteConfig;

  const callButton = (
    <Button
      asChild
      size="lg"
      fullWidth
      /* Bible §12 CTABand spec: primary on Ink = white bg, Action text */
      className="bg-white text-action hover:bg-muted sm:w-auto"
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
      className="border-[1.5px] border-white/40 bg-transparent text-white hover:border-white hover:bg-transparent sm:w-auto"
    >
      <Link href={quoteHref}>{quoteLabel}</Link>
    </Button>
  );

  return (
    <Section background="ink" aria-labelledby="final-cta-heading">
      <Container className="text-center">
        <h2 id="final-cta-heading" className="text-h1 text-white">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[65ch] text-body-lg text-white/75">{blurb}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {mode === "emergency" ? (
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
        <p className="mt-6">
          <a
            href={`tel:${business.phoneHref}`}
            className="tabular text-h3 text-white transition-colors duration-150 ease-brand hover:text-white/75"
          >
            {business.phone}
          </a>
        </p>
      </Container>
    </Section>
  );
}
