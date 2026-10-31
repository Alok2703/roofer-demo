/** The contract every trade config must satisfy (ARCHITECTURE.md rule 2). */

export interface NavLink {
  label: string;
  href: string;
}

export type TrustIcon = "star" | "check" | "shield" | "map" | "award";

export interface TrustChip {
  icon: TrustIcon;
  label: string;
}

export interface Problem {
  /** Stable identifier carried into the quote journey, e.g. "burst-pipe". */
  id: string;
  label: string;
  /** Natural accessible name, e.g. "Get help with a burst pipe". */
  ariaLabel: string;
  description?: string;
}

export interface ProblemSelectorConfig {
  heading: string;
  supportingText?: string;
  /** Affordance text on every card, e.g. "Get help". */
  ctaLabel: string;
  /** Route that receives the selection as ?problem=<id>. */
  destination: string;
  problems: Problem[];
}

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface Review {
  quote: string;
  name: string;
  area: string;
  /** Stable filter key, e.g. "boiler-repairs". */
  serviceId: string;
  /** Display label, e.g. "Boiler Repair". */
  service: string;
  /** Visual star rating only — never implies a verified source. */
  rating: Rating;
}

export interface ReviewsConfig {
  /** Small caption label above the heading, e.g. "Customer Feedback". */
  label: string;
  heading: string;
  /** Production supporting copy (optional). */
  supportingText?: string;
  /** Shown INSTEAD of supportingText while contentMode is "demo". */
  demoNotice: string;
  reviews: Review[];
}

export interface RecentJob {
  id: string;
  /** Headline, e.g. "Burst pipe repair under kitchen sink". */
  title: string;
  /** Category label shown as a chip, e.g. "Emergency Repair". */
  service: string;
  area: string;
  description: string;
}

export interface RecentJobsConfig {
  heading: string;
  intro: string;
  jobs: RecentJob[];
}

export interface FooterConfig {
  /** One-line business identity under the name. */
  strapline: string;
  services: NavLink[];
  areas: NavLink[];
  legal: NavLink[];
  /** Quiet disclaimer shown only while contentMode is "demo". */
  demoNotice: string;
}

export interface SiteConfig {
  /** "demo" shows sample-content disclaimers; "production" hides them. */
  contentMode: "demo" | "production";
  business: {
    name: string;
    /** Display format, e.g. "07440 165606". */
    phone: string;
    /** tel: URI format, e.g. "+447440165606". */
    phoneHref: string;
    /** wa.me digits only (country code + number, no +), e.g. "447440165606". */
    whatsappNumber: string;
    email?: string;
    area: string;
  };
  nav: {
    links: NavLink[];
    cta: NavLink;
  };
  hero: {
    headline: string;
    supportingText: string;
    primaryCta: NavLink;
    secondaryCtaLabel: string;
    trustBar: TrustChip[];
    /** Desktop hero photo (4:3). Hidden below lg per Bible §14. */
    image: { src: string; alt: string };
  };
  problemSelector: ProblemSelectorConfig;
  recentJobs: RecentJobsConfig;
  reviews: ReviewsConfig;
  footer: FooterConfig;
}
