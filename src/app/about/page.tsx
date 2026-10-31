import type { Metadata } from "next";
import Link from "next/link";
import { Award, HeartHandshake, ShieldCheck, Hammer } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Local, experienced and insured roofers covering Newcastle and the North East. Honest advice, fair prices and work that's guaranteed.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Honest advice first",
    body: "If a small repair will do, we'll say so. We'd rather talk you out of work you don't need than sell you a new roof you don't.",
  },
  {
    icon: ShieldCheck,
    title: "Experienced & insured",
    body: "Work is carried out by experienced roofers with the right access equipment, and we're fully insured on every job.",
  },
  {
    icon: Hammer,
    title: "Tidy, careful work",
    body: "We set up access safely, keep the area clean, and clear everything away when we leave — including the old materials.",
  },
  {
    icon: Award,
    title: "Guaranteed",
    body: "Our workmanship is guaranteed. If something isn't right after we leave, we come back and put it right.",
  },
];

export default function AboutPage() {
  const { business } = siteConfig;

  return (
    <>
      <Section aria-labelledby="about-heading">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 id="about-heading" className="text-h1 text-ink">
                Local roofers you can actually rely on
              </h1>
              <p className="mt-4 text-body-lg text-text-secondary">
                {business.name} is a local roofing team covering {business.area}.
                Our aim is simple: roofing people can trust, explained in plain
                English, at a price agreed before we start.
              </p>
              <p className="mt-4 text-body text-text-secondary">
                From a storm-damaged roof to a planned re-roof, we treat every
                home like our own — turning up when we say, doing the job
                properly, and leaving it clean and tidy. Most of our work comes
                from repeat customers and their recommendations, and we intend to
                keep it that way.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-border bg-muted">
                <span className="text-small font-medium text-text-muted">
                  Team / owner photo
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="surface" aria-labelledby="experience-heading">
        <Container width="content">
          <h2 id="experience-heading" className="text-h2 text-ink">
            Experience you can lean on
          </h2>
          <p className="mt-4 text-body text-text-secondary">
            Our roofers work across the full range of domestic roofing — emergency
            and storm repairs, leaks, flat roofs, re-roofs, tiling and slating,
            guttering, and chimney and leadwork. Years on the roofs of the North
            East mean there aren&rsquo;t many roofing problems we haven&rsquo;t
            seen and solved before.
          </p>

          <h2 className="mt-10 text-h2 text-ink">Qualifications &amp; insurance</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              "Experienced roofers with the right access equipment",
              "Fully insured, including public liability",
              "Workmanship guaranteed on every job",
              "Clear, written quotes before work begins",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
                <ShieldCheck aria-hidden="true" className="mt-1 size-5 shrink-0 text-success" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="values-heading">
        <Container>
          <h2 id="values-heading" className="text-h2 text-ink">
            What we value
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {values.map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-lg border border-border bg-white p-6">
                <Icon aria-hidden="true" className="size-6 text-action" />
                <h3 className="mt-4 text-h4 text-ink">{title}</h3>
                <p className="mt-2 text-body text-text-secondary">{body}</p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-small text-text-muted">
            This is a Smartsparks Digital concept website. The business name, team
            and content shown here are samples for demonstration purposes only.
          </p>

          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
