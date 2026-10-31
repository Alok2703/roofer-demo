import { ReviewCard } from "@/components/cards/review-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/content/site.config";

export function Reviews() {
  const { label, heading, supportingText, demoNotice, reviews } = siteConfig.reviews;
  const isDemo = siteConfig.contentMode === "demo";
  const intro = isDemo ? demoNotice : supportingText;

  return (
    <Section aria-labelledby="reviews-heading">
      <Container>
        <p className="text-caption text-text-muted">{label}</p>
        <h2 id="reviews-heading" className="mt-2 text-h2 text-ink">
          {heading}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">{intro}</p>
        ) : null}

        <ul className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
          {reviews.slice(0, 3).map((review) => (
            <li key={`${review.area}-${review.service}`}>
              <ReviewCard {...review} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
