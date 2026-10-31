import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site.config";

/**
 * Where the tradesperson viewing the demo can reach Smartsparks Digital.
 * Points at WhatsApp so a "Get yours" tap opens a chat; swap for a website URL
 * any time.
 */
const SMARTSPARKS_CONTACT = `https://wa.me/447471860856?text=${encodeURIComponent(
  "Hi Smartsparks Digital, I saw the demo — I'd like a website for my business."
)}`;

/**
 * Soft pitch banner (P1-14/15): honest about being a demo, while giving the
 * tradesperson viewing it a subtle, non-intrusive way to reach Smartsparks
 * Digital. Shown only while contentMode is "demo".
 */
export function DemoBanner() {
  if (siteConfig.contentMode !== "demo") return null;

  return (
    <div className="bg-ink text-center text-small text-white">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2">
        <span className="text-white/85">
          Demo website by <span className="font-semibold">Smartsparks Digital</span>{" "}
          — see what your business could look like.
        </span>
        <a
          href={SMARTSPARKS_CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-2 hover:text-white/80"
        >
          Get yours
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </div>
  );
}
