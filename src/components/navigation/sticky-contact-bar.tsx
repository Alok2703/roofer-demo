import Link from "next/link";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/whatsapp-icon";
import { siteConfig } from "@/content/site.config";
import { telHref, whatsappHref } from "@/lib/contact";

/**
 * Mobile-only sticky action bar (P0-04). Fixed to the bottom of the viewport so
 * Call, WhatsApp and Quote are always one tap away while scrolling. Hidden on
 * lg+ where the header CTAs are already visible. Respects the iOS safe area.
 */
export function StickyContactBar() {
  const { phone } = siteConfig.business;

  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-white shadow-lg lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telHref}
        aria-label={`Call now, ${phone}`}
        className="flex h-14 flex-col items-center justify-center gap-0.5 text-action"
      >
        <Phone aria-hidden="true" className="size-5" />
        <span className="text-xs font-semibold">Call</span>
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="flex h-14 flex-col items-center justify-center gap-0.5 border-x border-border text-[#25D366]"
      >
        <WhatsAppIcon className="size-5" />
        <span className="text-xs font-semibold text-ink">WhatsApp</span>
      </a>
      <Link
        href="/quote"
        className="flex h-14 flex-col items-center justify-center gap-0.5 bg-action text-white"
      >
        <span className="text-sm font-semibold">Get a Quote</span>
      </Link>
    </nav>
  );
}
