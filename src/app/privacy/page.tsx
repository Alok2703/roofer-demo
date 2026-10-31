import type { Metadata } from "next";
import { PageIntro } from "@/components/common/page-intro";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <PageIntro
      title="Privacy notice"
      intro="This is a demonstration website. No live enquiry processing is active yet: quote form submissions are validated and logged locally for development purposes only, are not sent to any business, and are not stored or shared. A full privacy policy will replace this notice before any live launch."
    />
  );
}
