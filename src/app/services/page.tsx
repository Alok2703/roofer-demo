import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services-list";

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "Roofing services across Newcastle and the North East — roof repairs, flat roofing, re-roofing, tile and slate, gutters and fascias, chimney and leadwork, emergency roofing and roof cleaning.",
};

/** Roof Repairs keeps its detailed flagship page; listed alongside the rest. */
const roofRepairs = {
  slug: "roof-repairs",
  name: "Roof Repairs",
  tagline: "Leaks, slipped tiles and storm damage put right.",
};

const allServices = [roofRepairs, ...services];

export default function ServicesPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-h1 text-ink">Roofing services</h1>
        <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">
          Whatever&rsquo;s gone wrong up top, there&rsquo;s a good chance we fix
          it. Every job starts with a free inspection and a clear quote — choose
          a service to learn more, or go straight to your quote.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
          {allServices.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 shadow-sm transition-[box-shadow,transform,border-color] duration-150 ease-brand hover:-translate-y-0.5 hover:border-action/30 hover:shadow-md"
              >
                <h2 className="text-h4 text-ink">{service.name}</h2>
                <p className="mt-2 text-small text-text-secondary">{service.tagline}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-small font-semibold text-action">
                  View service
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button asChild variant="ghost">
            <Link href="/quote">Not sure which? Get a free quote</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
