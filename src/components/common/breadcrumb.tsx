import Link from "next/link";
import type { NavLink } from "@/types/site";

interface BreadcrumbProps {
  /** Trail excluding the current page. */
  trail: NavLink[];
  /** Current page label (not linked). */
  current: string;
}

export function Breadcrumb({ trail, current }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-small text-text-muted">
        {trail.map((item) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link
              href={item.href}
              className="py-2 transition-colors duration-150 ease-brand hover:text-ink"
            >
              {item.label}
            </Link>
            <span aria-hidden="true">/</span>
          </li>
        ))}
        <li aria-current="page" className="py-2 font-medium text-text-secondary">
          {current}
        </li>
      </ol>
    </nav>
  );
}
