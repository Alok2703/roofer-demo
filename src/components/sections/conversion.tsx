import { Search, Star, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const points = [
  {
    icon: Search,
    title: "Customers find you on Google",
    body: "When someone searches for a roofer in your area, your website puts you in front of them — day or night.",
  },
  {
    icon: Star,
    title: "They see your work and reviews",
    body: "Past jobs and real reviews build trust before anyone even calls, so you win better-quality enquiries.",
  },
  {
    icon: Smartphone,
    title: "Enquiries land on your phone",
    body: "Every quote request comes straight to you with the customer's details — ready to call back when you're free.",
  },
];

/** P0-14: value section — the site keeps working while the tradesperson is busy. */
export function ConversionSection() {
  return (
    <Section background="surface" aria-labelledby="conversion-heading">
      <Container>
        <h2 id="conversion-heading" className="max-w-[20ch] text-h2 text-ink">
          Your website works while you&rsquo;re on the job
        </h2>
        <p className="mt-4 max-w-[65ch] text-body-lg text-text-secondary">
          While you&rsquo;re up on a roof, your website keeps
          earning — showing your services, your work and your reviews, and
          sending every enquiry straight to your phone.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-lg border border-border bg-white p-6">
              <Icon aria-hidden="true" className="size-6 text-action" />
              <h3 className="mt-4 text-h4 text-ink">{title}</h3>
              <p className="mt-2 text-body text-text-secondary">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
