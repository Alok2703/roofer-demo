import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/whatsapp-icon";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";
import { telHref, whatsappHref } from "@/lib/contact";

/** Homepage closing CTA band — the three contact routes, one more time. */
export function HomeFinalCta() {
  const { business } = siteConfig;

  return (
    <Section background="ink" aria-labelledby="home-cta-heading">
      <Container className="text-center">
        <h2 id="home-cta-heading" className="text-h1 text-white">
          Need a roofer in {business.area}?
        </h2>
        <p className="mx-auto mt-4 max-w-[55ch] text-body-lg text-white/75">
          Call or message now for a fast response, or send a few details and
          we&rsquo;ll get back to you with a free quote.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg" fullWidth className="bg-white text-action hover:bg-muted sm:w-auto">
            <a href={telHref} aria-label={`Call now, ${business.phone}`}>
              <Phone aria-hidden="true" />
              Call Now
            </a>
          </Button>
          <Button asChild size="lg" fullWidth className="bg-[#25D366] text-white hover:bg-[#1da851] sm:w-auto">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp">
              <WhatsAppIcon />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            fullWidth
            className="border-[1.5px] border-white/40 bg-transparent text-white hover:border-white hover:bg-transparent sm:w-auto"
          >
            <Link href="/quote">Get a Free Quote</Link>
          </Button>
        </div>

        <p className="mt-6">
          <a href={telHref} className="tabular text-h3 text-white hover:text-white/75">
            {business.phone}
          </a>
        </p>
      </Container>
    </Section>
  );
}
