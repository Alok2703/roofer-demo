import type { ServicePageConfig } from "@/types/service";

/**
 * Roof Repairs — master service page config (demo content).
 * Claims are deliberately cautious: nothing here asserts credentials,
 * prices or ratings the real client has not substantiated.
 */
export const roofRepairsConfig: ServicePageConfig = {
  slug: "roof-repairs",
  mode: "emergency",
  title: "Roof repairs",
  h1: "Roof repairs in Newcastle and the North East",
  subhead:
    "Leak, slipped tiles or storm damage? We'll help you take the next step with a free inspection, clear advice and a price agreed before any work starts.",
  problemId: "leaking-roof",
  quoteCtaLabel: "Get Roof Repair Quote",
  trustChips: [
    { icon: "check", label: "Free roof inspection" },
    { icon: "shield", label: "Fully insured" },
    { icon: "award", label: "Workmanship guarantee" },
  ],
  symptoms: {
    heading: "Is your roof showing any of these signs?",
    supportingText:
      "These signs can have several causes. A proper inspection finds the real problem before any work starts.",
    items: [
      {
        label: "Water coming through the ceiling",
        ariaLabel: "Get help with water coming through the ceiling",
        problemId: "leaking-roof",
      },
      {
        label: "Damp patch or staining",
        ariaLabel: "Get help with a damp patch or staining",
        problemId: "leaking-roof",
      },
      {
        label: "Slipped or missing tiles",
        ariaLabel: "Get help with slipped or missing tiles",
        problemId: "missing-tiles",
      },
      {
        label: "Storm or wind damage",
        ariaLabel: "Get help with storm or wind damage",
        problemId: "storm-damage",
      },
      {
        label: "Leak around the chimney",
        ariaLabel: "Get help with a leak around the chimney",
        problemId: "leaking-roof",
      },
      {
        label: "Tiles or debris in the garden",
        ariaLabel: "Get help after finding tiles or debris in the garden",
        problemId: "missing-tiles",
      },
    ],
  },
  pricingPromise: {
    heading: "Clear information before work begins",
    lede: "The roof is inspected first. The available options are explained clearly, and you decide whether to proceed before any repair work begins.",
    points: [
      "Free inspection before repair",
      "Options explained clearly",
      "Approval before work proceeds",
    ],
    ctaLabel: "Get your quote",
  },
  whyChooseUs: {
    heading: "Why homeowners choose us",
    items: [
      {
        title: "Clear explanation before work starts",
        body: "You hear what the problem is, what the options are and what each involves — before anything happens on the roof.",
      },
      {
        title: "Experienced and insured roofers",
        body: "Work on your roof is carried out by experienced roofers who are fully insured, with the right access equipment for the job.",
      },
      {
        title: "Respectful, tidy work",
        body: "Access set up safely, the area kept tidy, and everything cleared away when we leave — apart from the problem.",
      },
      {
        title: "Workmanship guarantee",
        body: "The guarantee that applies to your repair is confirmed with you before work begins, so you know exactly what's covered.",
      },
    ],
  },
  howItWorks: {
    heading: "What happens next",
    steps: [
      "Tell us what's happening",
      "Arrange a free inspection",
      "Find the real cause",
      "Explain the repair and cost",
      "Complete the work with approval",
    ],
    phoneCtaLabel: "Or just call us",
  },
  reviews: { heading: "Recent roof repair feedback", serviceId: "roof-repairs" },
  areas: {
    heading: "Roof repairs across Newcastle and the North East",
    blurb: "We help homeowners across Newcastle and the North East, including:",
    cta: { label: "Get a quote for your area", href: "/quote?problem=leaking-roof" },
  },
  faq: {
    heading: "Roof repair questions",
    items: [
      {
        question: "Will I know the cost before the repair starts?",
        answer:
          "Yes. The roof is inspected first, then the options and costs are explained to you. Work only proceeds once you have approved it. If any access or call-out charge applies, it is explained when you book.",
      },
      {
        question: "Do you charge for an inspection or quote?",
        answer:
          "Inspections and quotes for roof repairs are free. We take a proper look, explain what we find and give you a clear price, with no obligation to go ahead.",
      },
      {
        question: "My roof is leaking — what should I do right now?",
        answer:
          "If water is coming in, move valuables clear and place a bucket under the drip. If it's safe, catching the water and taking a photo of where it's coming in helps. Please don't go up on the roof yourself — get in touch and we'll make it safe.",
      },
      {
        question: "Can you deal with storm damage quickly?",
        answer:
          "Yes. Storm damage is treated as a priority. We can make a roof safe and watertight quickly, then talk you through any lasting repair once the weather allows.",
      },
      {
        question: "Is roof repair work guaranteed?",
        answer:
          "A workmanship guarantee applies to repair work, and its exact terms are confirmed with you before the work starts, so you know precisely what is covered.",
      },
      {
        question: "Which areas do you cover?",
        answer:
          "Homes across Newcastle and the North East, including Newcastle, Gateshead, Sunderland and Durham. If you're not sure whether your address is covered, call and we'll tell you straight away.",
      },
    ],
  },
  related: {
    heading: "Might it be something else?",
    items: [
      {
        label: "Flat Roofing",
        href: "/services/flat-roofing",
        description: "EPDM, felt and GRP flat roofs, repaired or replaced.",
      },
      {
        label: "All Services",
        href: "/services",
        description: "See everything we help homeowners with.",
      },
    ],
  },
  finalCta: {
    heading: "Need your roof looked at?",
    blurb: "Call now or request a free quote and we’ll help you take the next step.",
  },
};
