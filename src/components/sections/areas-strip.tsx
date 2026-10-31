import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/content/site.config";
import type { ServicePageConfig } from "@/types/service";

interface AreasStripProps {
  areas: ServicePageConfig["areas"];
}

/** Compact coverage strip — service+area co-occurrence without homepage duplication. */
export function AreasStrip({ areas }: AreasStripProps) {
  return (
    <Section aria-labelledby="areas-heading">
      <Container width="content">
        <h2 id="areas-heading" className="text-h2 text-ink">
          {areas.heading}
        </h2>
        <p className="mt-4 text-body text-text-secondary">{areas.blurb}</p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {siteConfig.footer.areas.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="inline-flex py-2 text-small font-medium text-action underline underline-offset-[3px] transition-colors duration-150 ease-brand hover:text-action-hover"
              >
                {area.label}
              </Link>
            </li>
          ))}
        </ul>
        {areas.cta ? (
          <div className="mt-8">
            <Button asChild variant="ghost">
              <Link href={areas.cta.href}>{areas.cta.label}</Link>
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
