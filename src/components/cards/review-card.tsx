import { Star } from "lucide-react";
import type { Review } from "@/types/site";

const MAX_RATING = 5;

/**
 * Static evidence card (Bible §11): no hover response because it is not
 * clickable. Star rating is visual only and carries a text equivalent
 * for assistive technology.
 */
function ReviewCard({ quote, name, area, service, rating }: Review) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-border bg-white p-6 shadow-sm">
      <p aria-hidden="true" className="flex gap-1 text-ink">
        {Array.from({ length: MAX_RATING }, (_, index) => (
          <Star
            key={index}
            className={index < rating ? "size-5 fill-current" : "size-5 text-border"}
          />
        ))}
      </p>
      <span className="sr-only">{`Rated ${rating} out of ${MAX_RATING}`}</span>

      <blockquote className="mt-4">
        <p className="text-body text-text-secondary">&ldquo;{quote}&rdquo;</p>
      </blockquote>

      <figcaption className="mt-auto pt-4 text-small text-text-muted">
        <span className="font-medium text-ink">{name}</span>
        {" · "}
        {area}
        {" · "}
        {service}
      </figcaption>
    </figure>
  );
}

export { ReviewCard };
