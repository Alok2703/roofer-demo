"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site.config";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScrolled();
  const { nav, business } = siteConfig;

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "z-40 w-full border-b border-border bg-white",
        "lg:sticky lg:top-0",
        "transition-shadow duration-200 ease-brand",
        scrolled && "lg:shadow-sm"
      )}
    >
      <Container as="nav" aria-label="Main">
        <div
          className={cn(
            "flex h-16 items-center justify-between",
            "transition-[height] duration-200 ease-brand",
            scrolled ? "lg:h-16" : "lg:h-20"
          )}
        >
          <Link
            href="/"
            className="text-h4 text-ink"
            aria-label={`${business.name} — home`}
          >
            {business.name}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-small font-medium text-text-secondary",
                    "transition-colors duration-150 ease-brand hover:text-ink"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden lg:inline-flex">
              <Link href={nav.cta.href}>{nav.cta.label}</Link>
            </Button>
            <button
              type="button"
              className={cn(
                "flex size-12 items-center justify-center rounded-md text-ink lg:hidden",
                "transition-colors duration-150 ease-brand hover:bg-surface"
              )}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-white lg:hidden"
      >
        <Container className="py-3">
          <ul>
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex h-12 items-center rounded-md px-3",
                    "text-body font-medium text-ink",
                    "transition-colors duration-150 ease-brand hover:bg-surface"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-3">
            <Button asChild fullWidth onClick={() => setOpen(false)}>
              <Link href={nav.cta.href}>{nav.cta.label}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
