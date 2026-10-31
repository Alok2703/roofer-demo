import { ReviewCard } from "@/components/cards/review-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/content/site.config";
import type { ServicePageConfig } from "@/types/service";

interface ReviewStripProps {
  config: ServicePageConfig["reviews"];
}

/**
 * Service-tagged reviews with the framework's empty-state rule:
 * fewer than two tagged reviews → fall back to the general set,
 * with no visible difference.
 */
export function ReviewStrip({ config }: ReviewStripProps) {
  const all = siteConfig.reviews.reviews;
  const tagged = all.filter((review) => review.serviceId === config.serviceId);
  const reviews = (tagged.length >= 2 ? tagged : all).slice(0, 3);
  const isDemo = siteConfig.contentMode === "demo";

  return (
    <Section background="surface" aria-labelledby="service-reviews-heading">
      <Container>
        <h2 id="service-reviews-heading" className="text-h2 text-ink">
          {config.heading}
        </h2>
        {isDemo ? (
          <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">
            {siteConfig.reviews.demoNotice}
          </p>
        ) : null}
        <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
          {reviews.map((review) => (
            <li key={`${review.area}-${review.service}`}>
              <ReviewCard {...review} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
