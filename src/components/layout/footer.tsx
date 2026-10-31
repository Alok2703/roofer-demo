import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site.config";
import type { NavLink } from "@/types/site";

function FooterLinkGroup({ heading, links }: { heading: string; links: NavLink[] }) {
  return (
    <nav aria-label={`Footer: ${heading}`}>
      <p className="text-caption text-white/60">{heading}</p>
      <ul className="mt-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex py-2 text-small text-white/75 transition-colors duration-150 ease-brand hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const { business, footer, contentMode } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-h4">{business.name}</p>
            <p className="mt-2 max-w-[35ch] text-small text-white/75">
              {footer.strapline}
            </p>
          </div>

          <FooterLinkGroup heading="Services" links={footer.services} />
          <FooterLinkGroup heading="Areas" links={footer.areas} />

          <div>
            <p className="text-caption text-white/60">Contact</p>
            <address className="mt-3 not-italic">
              <p>
                <a
                  href={`tel:${business.phoneHref}`}
                  className="tabular inline-flex py-2 text-small font-medium text-white transition-colors duration-150 ease-brand hover:text-white/75"
                >
                  {business.phone}
                </a>
              </p>
              {business.email ? (
                <p>
                  <a
                    href={`mailto:${business.email}`}
                    className="inline-flex py-2 text-small text-white/75 transition-colors duration-150 ease-brand hover:text-white"
                  >
                    {business.email}
                  </a>
                </p>
              ) : null}
            </address>
          </div>
        </div>

        {contentMode === "demo" ? (
          <p className="mt-12 text-small text-white/60">{footer.demoNotice}</p>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-white/60">
            © {year} {business.name}. All rights reserved.
          </p>
          <nav aria-label="Footer: Legal">
            <ul className="flex flex-wrap gap-6">
              {footer.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex py-2 text-small text-white/60 transition-colors duration-150 ease-brand hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
