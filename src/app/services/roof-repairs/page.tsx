import type { Metadata } from "next";
import { AreasStrip } from "@/components/sections/areas-strip";
import { FinalCta } from "@/components/sections/final-cta";
import { PricingPromise } from "@/components/sections/pricing-promise";
import { RelatedServices } from "@/components/sections/related-services";
import { ReviewStrip } from "@/components/sections/review-strip";
import { ServiceFaq } from "@/components/sections/service-faq";
import { ServiceHero } from "@/components/sections/service-hero";
import { StepFlow } from "@/components/sections/step-flow";
import { SymptomGrid } from "@/components/sections/symptom-grid";
import { TrustList } from "@/components/sections/trust-list";
import { roofRepairsConfig as service } from "@/content/services/roof-repairs";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: service.h1,
  description: `${service.subhead} ${siteConfig.footer.strapline}`,
};

export default function RoofRepairsPage() {
  const quoteHref = `/quote?problem=${encodeURIComponent(service.problemId)}`;

  return (
    <>
      <ServiceHero service={service} />
      <SymptomGrid symptoms={service.symptoms} />
      <PricingPromise pricing={service.pricingPromise} quoteHref={quoteHref} />
      <TrustList trust={service.whyChooseUs} />
      <StepFlow howItWorks={service.howItWorks} />
      <ReviewStrip config={service.reviews} />
      <AreasStrip areas={service.areas} />
      <ServiceFaq faq={service.faq} />
      <RelatedServices related={service.related} />
      <FinalCta
        heading={service.finalCta.heading}
        blurb={service.finalCta.blurb}
        mode={service.mode}
        quoteHref={quoteHref}
        quoteLabel={service.quoteCtaLabel}
      />
    </>
  );
}
