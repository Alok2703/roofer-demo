import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProblemCardProps {
  label: string;
  href: string;
  ctaLabel: string;
  /** Natural accessible name, e.g. "Get help with a burst pipe". */
  ariaLabel: string;
  description?: string;
  className?: string;
}

/**
 * One problem, one link. The whole card is a single anchor — no nested
 * interactive elements (Bible §15). Hover response exists only because
 * the card is clickable (Bible §11).
 */
function ProblemCard({ label, href, ctaLabel, ariaLabel, description, className }: ProblemCardProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "group flex h-full min-h-22 flex-col rounded-lg border border-border bg-white p-6 shadow-sm",
        "transition-[box-shadow,transform,border-color] duration-150 ease-brand",
        "hover:-translate-y-0.5 hover:border-action/30 hover:shadow-md",
        className
      )}
    >
      <span className="text-h4 text-ink">{label}</span>
      {description ? (
        <span className="mt-1 text-small text-text-secondary">{description}</span>
      ) : null}
      <span className="mt-auto inline-flex items-center gap-1 pt-3 text-small font-medium text-action">
        {ctaLabel}
        <ArrowRight aria-hidden="true" className="size-5" />
      </span>
    </Link>
  );
}

export { ProblemCard };
