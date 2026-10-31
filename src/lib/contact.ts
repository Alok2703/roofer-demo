import { siteConfig } from "@/content/site.config";

const { phoneHref, whatsappNumber } = siteConfig.business;

/** tel: link for the business number. */
export const telHref = `tel:${phoneHref}`;

/** WhatsApp chat link with a friendly pre-filled message. */
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi, I found your website and I'd like a roofing quote."
)}`;
