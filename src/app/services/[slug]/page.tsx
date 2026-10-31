import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/whatsapp-icon";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services-list";
import { siteConfig } from "@/content/site.config";
import { telHref, whatsappHref } from "@/lib/contact";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return { title: "Service not found" };
  return { title: service.name, description: service.metaDescription };
}

const WHY_CHOOSE_US = [
  "Experienced & fully insured roofers",
  "The price agreed before we start",
  "Local team covering Newcastle and the North East",
  "Work guaranteed — we come back if needed",
];

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const { business } = siteConfig;
  const quoteHref = `/quote?problem=${encodeURIComponent(service.problemId)}`;

  return (
    <>
      <Section aria-labelledby="service-heading">
        <Container width="content">
          <nav aria-label="Breadcrumb" className="text-small text-text-muted">
            <Link href="/services" className="hover:text-ink">
              Services
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-text-secondary">{service.name}</span>
          </nav>

          <h1 id="service-heading" className="mt-6 text-h1 text-ink">
            {service.h1}
          </h1>
          <p className="mt-4 text-body-lg text-text-secondary">{service.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" fullWidth className="sm:w-auto">
              <a href={telHref} aria-label={`Call now, ${business.phone}`}>
                <Phone aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              fullWidth
              className="bg-[#25D366] text-white hover:bg-[#1da851] sm:w-auto"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" fullWidth className="sm:w-auto">
              <Link href={quoteHref}>Get a Free Quote</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section background="surface" aria-labelledby="problems-heading">
        <Container width="content">
          <h2 id="problems-heading" className="text-h2 text-ink">
            Common problems we fix
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {service.commonProblems.map((problem) => (
              <li key={problem} className="flex items-start gap-3 text-body text-text-secondary">
                <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-success" />
                {problem}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="why-heading">
        <Container width="content">
          <h2 id="why-heading" className="text-h2 text-ink">
            Why homeowners choose us
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHY_CHOOSE_US.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 text-body text-ink"
              >
                <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-action" />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section background="ink" aria-labelledby="service-cta-heading">
        <Container width="content" className="text-center">
          <h2 id="service-cta-heading" className="text-h2 text-white">
            Need help with {service.name.toLowerCase()}?
          </h2>
          <p className="mx-auto mt-4 max-w-[55ch] text-body-lg text-white/75">
            Call or message for a fast response, or send a few details for a free quote.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" fullWidth className="bg-white text-action hover:bg-muted sm:w-auto">
              <a href={telHref} aria-label={`Call now, ${business.phone}`}>
                <Phone aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" fullWidth className="bg-[#25D366] text-white hover:bg-[#1da851] sm:w-auto">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp">
                <WhatsAppIcon />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              fullWidth
              className="border-[1.5px] border-white/40 bg-transparent text-white hover:border-white sm:w-auto"
            >
              <Link href={quoteHref}>Get a Free Quote</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
