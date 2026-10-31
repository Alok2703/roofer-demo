"use server";

import { siteConfig } from "@/content/site.config";

export type ContactMethod = "phone" | "whatsapp" | "email";

export interface QuoteFormValues {
  name: string;
  phone: string;
  postcode: string;
  service: string;
  description: string;
  contact: ContactMethod;
  /** Filename of the attached photo, if any (demo: not stored). */
  photoName: string;
}

export interface QuoteFormState {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<keyof QuoteFormValues, string>>;
  values?: QuoteFormValues;
}

const PHONE_PATTERN = /^[0-9+()\s-]{7,20}$/;
const POSTCODE_PATTERN = /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/;
const CONTACT_METHODS: ContactMethod[] = ["phone", "whatsapp", "email"];

export async function submitQuote(
  _previous: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  const photo = formData.get("photo");
  const photoName =
    photo instanceof File && photo.size > 0 ? photo.name : "";

  const contactRaw = String(formData.get("contact") ?? "phone");
  const values: QuoteFormValues = {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    postcode: String(formData.get("postcode") ?? "").trim().toUpperCase(),
    service: String(formData.get("service") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    contact: (CONTACT_METHODS.includes(contactRaw as ContactMethod)
      ? contactRaw
      : "phone") as ContactMethod,
    photoName,
  };

  const errors: QuoteFormState["errors"] = {};

  if (!values.name) {
    errors.name = "Please enter your name so we know who to ask for.";
  }
  if (!PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Please enter a full phone number so we can call you back.";
  }
  if (!POSTCODE_PATTERN.test(values.postcode)) {
    errors.postcode = "Please enter a valid UK postcode (e.g. M1 4BT).";
  }
  if (!siteConfig.problemSelector.problems.some((p) => p.id === values.service)) {
    errors.service = "Please choose the service you need.";
  }
  if (values.description.length < 5) {
    errors.description = "A short description helps us give an accurate quote.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  // Demo: log the clean, structured enquiry the roofer would receive by email.
  console.log("[demo] Quote enquiry received (not sent anywhere):", {
    ...values,
    receivedAt: new Date().toISOString(),
  });

  return { status: "success", values };
}
