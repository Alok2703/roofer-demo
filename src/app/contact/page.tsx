import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { PageIntro } from "@/components/common/page-intro";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const { business } = siteConfig;

  return (
    <PageIntro
      title="Contact"
      intro="The fastest way to reach us is by phone. Prefer writing? Email us or request a quote and we will get back to you."
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild size="lg" fullWidth className="sm:w-auto">
          <a
            href={`tel:${business.phoneHref}`}
            aria-label={`Call now, ${business.phone}`}
          >
            <Phone aria-hidden="true" />
            <span className="tabular">{business.phone}</span>
          </a>
        </Button>
        <Button asChild variant="secondary" size="lg" fullWidth className="sm:w-auto">
          <Link href="/quote">Get a free quote</Link>
        </Button>
      </div>
      {business.email ? (
        <p className="mt-6 text-body text-text-secondary">
          Email:{" "}
          <a
            href={`mailto:${business.email}`}
            className="font-medium text-action underline underline-offset-[3px] hover:text-action-hover"
          >
            {business.email}
          </a>
        </p>
      ) : null}
    </PageIntro>
  );
}
