import Link from "next/link";
import { Phone } from "lucide-react";
import { TrustChip } from "@/components/common/trust-chip";
import { WhatsAppIcon } from "@/components/common/whatsapp-icon";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";
import { telHref, whatsappHref } from "@/lib/contact";

export function Hero() {
  const { hero, business } = siteConfig;

  return (
    <Section aria-labelledby="hero-heading">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 id="hero-heading" className="text-display text-ink">
              {hero.headline}
            </h1>
            <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">
              {hero.supportingText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" fullWidth className="sm:w-auto">
                <a href={telHref} aria-label={`Call now, ${business.phone}`}>
                  <Phone aria-hidden="true" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                fullWidth
                className="bg-[#25D366] text-white hover:bg-[#1da851] sm:w-auto"
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message us on WhatsApp"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                fullWidth
                className="sm:w-auto"
              >
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap gap-3" aria-label="Why homeowners trust us">
              {hero.trustBar.map((chip) => (
                <li key={chip.label}>
                  <TrustChip {...chip} />
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            {/* Illustration placeholder — swap for a real roofing photo by
                restoring next/image and pointing at hero.image.src. */}
            <RoofIllustration alt={hero.image.alt} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * Lightweight, brand-coloured roofing illustration used in place of a hero
 * photo while the demo uses placeholder imagery. Decorative: the accessible
 * name is carried by the alt-style label for assistive tech.
 */
function RoofIllustration({ alt }: { alt: string }) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-action-subtle">
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-label={alt}
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* sky */}
        <rect width="400" height="300" fill="var(--color-action-subtle)" />
        <circle cx="330" cy="62" r="30" fill="#ffffff" opacity="0.85" />
        {/* house body */}
        <rect x="96" y="176" width="208" height="104" fill="#ffffff" stroke="var(--color-border)" />
        {/* door + windows */}
        <rect x="186" y="214" width="34" height="66" fill="var(--color-ink)" opacity="0.85" />
        <rect x="120" y="206" width="40" height="34" fill="var(--color-action-subtle)" stroke="var(--color-border)" />
        <rect x="244" y="206" width="40" height="34" fill="var(--color-action-subtle)" stroke="var(--color-border)" />
        {/* chimney */}
        <rect x="236" y="92" width="26" height="46" fill="var(--color-ink)" />
        {/* roof */}
        <polygon points="200,70 312,178 88,178" fill="var(--color-action)" />
        {/* roof tile rows */}
        <g stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2">
          <line x1="123" y1="160" x2="277" y2="160" />
          <line x1="140" y1="142" x2="260" y2="142" />
          <line x1="157" y1="124" x2="243" y2="124" />
          <line x1="174" y1="106" x2="226" y2="106" />
        </g>
        {/* ridge line */}
        <polygon points="200,70 312,178 88,178" fill="none" stroke="var(--color-ink)" strokeOpacity="0.15" strokeWidth="2" />
        {/* ladder */}
        <g stroke="var(--color-ink)" strokeWidth="4" strokeLinecap="round" opacity="0.8">
          <line x1="300" y1="280" x2="330" y2="150" />
          <line x1="318" y1="280" x2="348" y2="150" />
          <line x1="306" y1="258" x2="330" y2="258" />
          <line x1="312" y1="230" x2="336" y2="230" />
          <line x1="318" y1="202" x2="342" y2="202" />
          <line x1="324" y1="174" x2="348" y2="174" />
        </g>
      </svg>
    </div>
  );
}
