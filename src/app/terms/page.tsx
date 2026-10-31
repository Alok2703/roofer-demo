import type { Metadata } from "next";
import { PageIntro } from "@/components/common/page-intro";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <PageIntro
      title="Website terms"
      intro="This is a demonstration website provided by Smartsparks Digital for concept and evaluation purposes. The business details, services, reviews and content shown are samples and do not represent a real trading company. Full terms of service will replace this notice before any live launch."
    />
  );
}
