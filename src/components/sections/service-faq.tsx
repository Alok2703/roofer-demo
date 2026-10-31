"use client";

import * as React from "react";
import { Phone, Plus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";
import type { ServicePageConfig } from "@/types/service";

interface ServiceFaqProps {
  faq: ServicePageConfig["faq"];
}

/**
 * ARIA disclosure accordion: button[aria-expanded][aria-controls] +
 * region[aria-labelledby]. One item open at a time; first item (the cost
 * question) open by default (Bible §12). Keyboard: native button semantics.
 */
export function ServiceFaq({ faq }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = React.useState(0);
  const baseId = React.useId();
  const { business } = siteConfig;

  return (
    <Section background="surface" aria-labelledby="faq-heading">
      <Container width="content">
        <h2 id="faq-heading" className="text-h2 text-ink">
          {faq.heading}
        </h2>
        <div className="mt-12 flex flex-col gap-3">
          {faq.items.map((item, index) => {
            const open = openIndex === index;
            const buttonId = `${baseId}-question-${index}`;
            const panelId = `${baseId}-answer-${index}`;
            return (
              <div key={item.question} className="rounded-md border border-border bg-white">
                <h3 className="text-h4">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className={cn(
                      "flex min-h-12 w-full items-center justify-between gap-3 rounded-md px-4 py-3 text-left text-h4 text-ink",
                      "transition-colors duration-150 ease-brand hover:bg-surface"
                    )}
                  >
                    {item.question}
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        "size-5 shrink-0 text-text-muted transition-transform duration-250 ease-brand",
                        open && "rotate-45"
                      )}
                    />
                  </button>
                </h3>
                <div
                  role="region"
                  id={panelId}
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="px-4 pb-4"
                >
                  <p className="text-body text-text-secondary">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Button asChild variant="ghost">
            <a
              href={`tel:${business.phoneHref}`}
              aria-label={`Still unsure? Call us, ${business.phone}`}
            >
              <Phone aria-hidden="true" />
              Still unsure? Call us
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
