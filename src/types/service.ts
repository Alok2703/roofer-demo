import type { NavLink, TrustChip } from "@/types/site";

/** Drives CTA order, hero copy behaviour and step wording (Service Page Framework). */
export type ServiceMode = "emergency" | "planned";

export interface Symptom {
  label: string;
  /** Natural accessible name, e.g. "Get help with a boiler error code". */
  ariaLabel: string;
  /** Problem id passed to /quote?problem=<id>. */
  problemId: string;
  description?: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceTrustItem {
  title: string;
  body: string;
}

export interface RelatedServiceLink extends NavLink {
  description: string;
}

export interface ServicePageConfig {
  slug: string;
  mode: ServiceMode;
  /** Metadata title. */
  title: string;
  /** SEO formula: {Service} in {Area}. */
  h1: string;
  subhead: string;
  /** Default problem id for this service's quote CTAs. */
  problemId: string;
  quoteCtaLabel: string;
  trustChips: TrustChip[];
  symptoms: { heading: string; supportingText?: string; items: Symptom[] };
  pricingPromise: {
    heading: string;
    /** One calm sentence of reassurance. */
    lede: string;
    points: string[];
    /** Rendered only when the real client configures a true statement. */
    calloutNote?: string;
    ctaLabel: string;
  };
  whyChooseUs: { heading: string; items: ServiceTrustItem[] };
  howItWorks: { heading: string; steps: string[]; phoneCtaLabel: string };
  reviews: { heading: string; serviceId: string };
  areas: { heading: string; blurb: string; cta?: NavLink };
  faq: { heading: string; items: ServiceFaqItem[] };
  related: { heading: string; items: RelatedServiceLink[] };
  finalCta: { heading: string; blurb: string };
}
