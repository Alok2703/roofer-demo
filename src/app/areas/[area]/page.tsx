import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { PageIntro } from "@/components/common/page-intro";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";

interface AreaPageProps {
  params: Promise<{ area: string }>;
}

function findArea(slug: string) {
  return siteConfig.footer.areas.find((area) => area.href === `/areas/${slug}`);
}

export function generateStaticParams() {
  return siteConfig.footer.areas.map((area) => ({
    area: area.href.split("/").pop() as string,
  }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { area } = await params;
  const match = findArea(area);
  return { title: match ? `Roofing in ${match.label}` : "Area not found" };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { area } = await params;
  const match = findArea(area);
  if (!match) notFound();

  const { business } = siteConfig;

  return (
    <PageIntro
      title={`Roofing services in ${match.label}`}
      intro={`We help homeowners in ${match.label} with emergency repairs, roof leaks and planned roofing work. Call for a free quote, or tell us what you need help with.`}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" fullWidth className="sm:w-auto">
          <a
            href={`tel:${business.phoneHref}`}
            aria-label={`Call now, ${business.phone}`}
          >
            <Phone aria-hidden="true" />
            Call Now
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg" fullWidth className="sm:w-auto">
          <Link href="/quote">Get a free quote</Link>
        </Button>
      </div>
    </PageIntro>
  );
}
