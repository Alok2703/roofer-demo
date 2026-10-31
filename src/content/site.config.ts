import type { SiteConfig } from "@/types/site";

/**
 * Trade configuration — roofing (Newcastle Roofing Co, demo content).
 * Launching a new trade means replacing this file. Components never
 * contain trade content (Design Bible §17 reuse contract).
 *
 * Demo website created by Smartsparks Digital.
 */
export const siteConfig: SiteConfig = {
  contentMode: "demo",
  business: {
    name: "Newcastle Roofing Co",
    phone: "07471 860856",
    phoneHref: "+447471860856",
    whatsappNumber: "447471860856",
    email: "hello@newcastleroofing.example",
    area: "Newcastle & the North East",
  },
  nav: {
    links: [
      { label: "Services", href: "/services" },
      { label: "Recent Jobs", href: "/recent-jobs" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: { label: "Get Quote", href: "/quote" },
  },
  hero: {
    headline: "Trusted Local Roofers in Newcastle — Repairs, Re-Roofs & Emergency Roofing",
    supportingText:
      "Leaking roof, missing tiles or storm damage? Our experienced local roofers cover Newcastle and the North East with free quotes, honest prices and a guarantee on every job.",
    primaryCta: { label: "Get a Free Quote", href: "/quote" },
    secondaryCtaLabel: "Call Now",
    trustBar: [
      { icon: "star", label: "4.9 Google Rating" },
      { icon: "shield", label: "Fully Insured" },
      { icon: "check", label: "Free Quotes & Inspections" },
      { icon: "map", label: "Local Roofers" },
      { icon: "award", label: "Work Guaranteed" },
    ],
    image: {
      // Placeholder reference only — the hero renders an illustration until a
      // real roofing photo is supplied, then set this to that image.
      src: "/images/roofing/roof-hero.jpg",
      alt: "Roofer replacing tiles on a pitched roof",
    },
  },
  problemSelector: {
    heading: "What's wrong with your roof?",
    supportingText:
      "Choose the problem that best matches what's happening. We'll help you take the next step.",
    ctaLabel: "Get help",
    destination: "/quote",
    problems: [
      {
        id: "leaking-roof",
        label: "Leaking roof",
        ariaLabel: "Get help with a leaking roof",
      },
      {
        id: "storm-damage",
        label: "Storm damage",
        ariaLabel: "Get help with storm damage",
      },
      {
        id: "missing-tiles",
        label: "Missing or slipped tiles",
        ariaLabel: "Get help with missing or slipped tiles",
      },
      {
        id: "flat-roof",
        label: "Flat roof problem",
        ariaLabel: "Get help with a flat roof problem",
      },
      {
        id: "gutters-fascias",
        label: "Gutters & fascias",
        ariaLabel: "Get help with gutters and fascias",
      },
      {
        id: "something-else",
        label: "Something else",
        ariaLabel: "Get help with something else",
      },
    ],
  },
  recentJobs: {
    heading: "Recent roofing jobs",
    intro:
      "A sample of the work we do for homeowners across Newcastle and the North East — from emergency storm repairs to full re-roofs.",
    jobs: [
      {
        id: "slipped-tiles-jesmond",
        title: "Slipped tiles replaced after high winds",
        service: "Roof Repair",
        area: "Jesmond, Newcastle",
        description:
          "Replaced a run of slipped and cracked tiles after a storm, re-bedded the ridge line and left the roof watertight — all in a single visit.",
      },
      {
        id: "flat-roof-gateshead",
        title: "New EPDM rubber flat roof",
        service: "Flat Roofing",
        area: "Gateshead",
        description:
          "Stripped a failing felt roof on a rear extension and installed a new EPDM rubber roof with a long-term guarantee. No more leaks, no more patch-ups.",
      },
      {
        id: "re-roof-gosforth",
        title: "Full roof replacement",
        service: "Re-Roofing",
        area: "Gosforth",
        description:
          "Stripped an old, worn-out roof and re-roofed with new felt, battens and tiles — a warm, watertight roof built to last for decades.",
      },
      {
        id: "leak-heaton",
        title: "Hidden leak traced and fixed",
        service: "Leak Repair",
        area: "Heaton, Newcastle",
        description:
          "Tracked a persistent leak staining a bedroom ceiling to a cracked valley. Repaired it properly and made good — the damp patch is gone for good.",
      },
      {
        id: "gutters-sunderland",
        title: "Gutters, fascias & soffits renewed",
        service: "Guttering",
        area: "Sunderland",
        description:
          "Replaced sagging gutters and tired fascias and soffits with clean new uPVC — no more overflow down the walls and a fresh look to the front of the house.",
      },
      {
        id: "chimney-whitley-bay",
        title: "Chimney repointed & lead flashing renewed",
        service: "Chimney & Leadwork",
        area: "Whitley Bay",
        description:
          "Repointed a weathered chimney stack and renewed the lead flashing around it to stop water tracking in behind the brickwork.",
      },
    ],
  },
  reviews: {
    label: "Customer Feedback",
    heading: "What our customers say",
    demoNotice:
      "See how a professional review section could look on your future website. This demonstration uses sample content only.",
    reviews: [
      {
        quote:
          "After the storm took half my tiles off, they came out the next day, sorted it and even showed me photos from up on the roof. Brilliant service.",
        name: "Sarah (sample)",
        area: "Jesmond",
        serviceId: "roof-repairs",
        service: "Roof Repair",
        rating: 5,
      },
      {
        quote:
          "New rubber roof on our extension — tidy job, fair price and not a scrap of mess left behind. Couldn't be happier with it.",
        name: "David (sample)",
        area: "Gateshead",
        serviceId: "flat-roofing",
        service: "Flat Roofing",
        rating: 5,
      },
      {
        quote:
          "Full re-roof done in a few days. They kept us informed the whole way through and the house looks fantastic now. Highly recommend.",
        name: "Priya (sample)",
        area: "Gosforth",
        serviceId: "re-roofing",
        service: "Re-Roofing",
        rating: 5,
      },
      {
        quote:
          "Two other roofers couldn't find where the leak was coming from. These lads traced it within the hour and fixed it properly. Honest and skilled.",
        name: "Mark (sample)",
        area: "Heaton",
        serviceId: "roof-repairs",
        service: "Leak Repair",
        rating: 5,
      },
      {
        quote:
          "Replaced all our gutters and fascias. Turned up exactly when they said, worked hard all day and left everything spotless. Great job.",
        name: "Joanne (sample)",
        area: "Sunderland",
        serviceId: "guttering",
        service: "Guttering",
        rating: 5,
      },
    ],
  },
  footer: {
    strapline: "Roofing services for homeowners across Newcastle and the North East.",
    services: [
      { label: "All Services", href: "/services" },
      { label: "Roof Repairs", href: "/services/roof-repairs" },
      { label: "Flat Roofing", href: "/services/flat-roofing" },
    ],
    areas: [
      { label: "Newcastle", href: "/areas/newcastle" },
      { label: "Gateshead", href: "/areas/gateshead" },
      { label: "Sunderland", href: "/areas/sunderland" },
      { label: "Durham", href: "/areas/durham" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    demoNotice:
      "Sample business, reviews and project content are shown for demonstration purposes.",
  },
};
