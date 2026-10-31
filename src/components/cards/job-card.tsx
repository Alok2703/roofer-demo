import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { RecentJob } from "@/types/site";

/**
 * Recent job card (P0-06/07/08): before→after frames, job type, area,
 * description and a per-card quote CTA. Before/after use labelled placeholders
 * until real photos are supplied (swap in via next/image, same 4:3 frame).
 */
export function JobCard({ title, service, area, description }: RecentJob) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm">
      <div className="grid grid-cols-2 gap-px bg-border">
        <BeforeAfterFrame label="Before" tone="before" />
        <BeforeAfterFrame label="After" tone="after" />
      </div>

      <figcaption className="flex flex-1 flex-col p-5">
        <span className="inline-flex w-fit items-center rounded-pill bg-action-subtle px-3 py-1 text-xs font-semibold text-action">
          {service}
        </span>
        <h3 className="mt-3 text-h4 text-ink">{title}</h3>
        <p className="mt-1 inline-flex items-center gap-1 text-small text-text-muted">
          <MapPin aria-hidden="true" className="size-4" />
          {area}
        </p>
        <p className="mt-3 text-small text-text-secondary">{description}</p>

        <Link
          href="/quote"
          className="mt-auto inline-flex items-center gap-1 pt-4 text-small font-semibold text-action transition-colors duration-150 ease-brand hover:text-action-hover"
        >
          Have a similar problem? Get a Free Quote
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </figcaption>
    </figure>
  );
}

function BeforeAfterFrame({
  label,
  tone,
}: {
  label: string;
  tone: "before" | "after";
}) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center ${
        tone === "before" ? "bg-muted" : "bg-surface"
      }`}
    >
      <span className="absolute left-2 top-2 rounded-pill bg-ink/80 px-2 py-0.5 text-xs font-semibold text-white">
        {label}
      </span>
      <span className="text-xs font-medium text-text-muted">Sample photo</span>
    </div>
  );
}
