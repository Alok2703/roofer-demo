"use client";

import { useActionState, useState } from "react";
import { Paperclip } from "lucide-react";
import { submitQuote, type QuoteFormState } from "@/app/quote/actions";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/utils";

const initialState: QuoteFormState = { status: "idle" };

const inputClasses = cn(
  "w-full rounded-md border-[1.5px] border-border-strong bg-white px-3.5 py-3 text-body text-ink",
  "transition-[border-color,box-shadow] duration-150 ease-brand",
  "focus:border-action focus:shadow-[0_0_0_3px_var(--color-action-subtle)] focus:outline-none"
);

const CONTACT_OPTIONS = [
  { value: "phone", label: "Phone call" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
] as const;

interface QuoteFormProps {
  /** Problem id from ?problem=<id>, already validated server-side. */
  defaultProblem?: string;
}

export function QuoteForm({ defaultProblem }: QuoteFormProps) {
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  const [photoName, setPhotoName] = useState("");
  const { problems } = siteConfig.problemSelector;
  const isDemo = siteConfig.contentMode === "demo";

  if (state.status === "success" && state.values) {
    const v = state.values;
    const serviceLabel =
      problems.find((p) => p.id === v.service)?.label ?? v.service;
    const contactLabel =
      CONTACT_OPTIONS.find((c) => c.value === v.contact)?.label ?? v.contact;

    return (
      <div className="flex flex-col gap-6">
        <div
          role="status"
          className="rounded-lg border border-success bg-success-subtle p-6"
        >
          <p className="text-h4 text-success">
            Thanks{v.name ? `, ${v.name.split(" ")[0]}` : ""} — we&rsquo;ve
            received your enquiry.
          </p>
          <p className="mt-2 text-body text-text-secondary">
            We&rsquo;ll contact you shortly by {contactLabel.toLowerCase()}.
          </p>
        </div>

        {/* P0-12: show the clean, structured enquiry the roofer receives. */}
        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="text-caption text-text-muted">
            What the roofer receives
          </p>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-small">
            <dt className="font-semibold text-ink">Name</dt>
            <dd className="text-text-secondary">{v.name}</dd>
            <dt className="font-semibold text-ink">Phone</dt>
            <dd className="tabular text-text-secondary">{v.phone}</dd>
            <dt className="font-semibold text-ink">Postcode</dt>
            <dd className="text-text-secondary">{v.postcode}</dd>
            <dt className="font-semibold text-ink">Service</dt>
            <dd className="text-text-secondary">{serviceLabel}</dd>
            <dt className="font-semibold text-ink">Problem</dt>
            <dd className="text-text-secondary">{v.description}</dd>
            <dt className="font-semibold text-ink">Prefers</dt>
            <dd className="text-text-secondary">{contactLabel}</dd>
            <dt className="font-semibold text-ink">Photo</dt>
            <dd className="text-text-secondary">
              {v.photoName ? v.photoName : "None attached"}
            </dd>
          </dl>
          {isDemo ? (
            <p className="mt-4 text-small text-text-muted">
              This is a demonstration. Your enquiry has not been sent to a real
              business and nothing is stored.
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  const errors = state.errors ?? {};
  const selectedService = state.values?.service ?? defaultProblem ?? "";

  return (
    <form action={formAction} noValidate encType="multipart/form-data">
      <div className="flex flex-col gap-6">
        <Field id="quote-name" label="Your name" error={errors.name}>
          <input
            id="quote-name"
            name="name"
            type="text"
            autoComplete="name"
            defaultValue={state.values?.name}
            aria-invalid={errors.name ? true : undefined}
            className={cn(inputClasses, errors.name && "border-error")}
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field id="quote-phone" label="Phone number" error={errors.phone}>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              defaultValue={state.values?.phone}
              aria-invalid={errors.phone ? true : undefined}
              className={cn(inputClasses, "tabular", errors.phone && "border-error")}
            />
          </Field>

          <Field id="quote-postcode" label="Postcode" error={errors.postcode}>
            <input
              id="quote-postcode"
              name="postcode"
              type="text"
              autoComplete="postal-code"
              placeholder="e.g. M1 4BT"
              defaultValue={state.values?.postcode}
              aria-invalid={errors.postcode ? true : undefined}
              className={cn(inputClasses, "uppercase", errors.postcode && "border-error")}
            />
          </Field>
        </div>

        <Field id="quote-service" label="Service required" error={errors.service}>
          <select
            id="quote-service"
            name="service"
            defaultValue={selectedService}
            aria-invalid={errors.service ? true : undefined}
            className={cn(inputClasses, errors.service && "border-error")}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {problems.map((problem) => (
              <option key={problem.id} value={problem.id}>
                {problem.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="quote-description"
          label="Describe the problem"
          error={errors.description}
        >
          <textarea
            id="quote-description"
            name="description"
            rows={4}
            placeholder="Tell us what's happening — the more detail, the more accurate your quote."
            defaultValue={state.values?.description}
            aria-invalid={errors.description ? true : undefined}
            className={cn(inputClasses, "resize-y", errors.description && "border-error")}
          />
        </Field>

        <div>
          <span className="mb-2 block text-label text-ink">
            Preferred contact method
          </span>
          <div className="flex flex-wrap gap-2">
            {CONTACT_OPTIONS.map((option, index) => (
              <label
                key={option.value}
                className="inline-flex cursor-pointer items-center gap-2 rounded-md border-[1.5px] border-border-strong px-4 py-2.5 text-small text-ink has-[:checked]:border-action has-[:checked]:bg-action-subtle has-[:checked]:text-action"
              >
                <input
                  type="radio"
                  name="contact"
                  value={option.value}
                  defaultChecked={
                    state.values?.contact
                      ? state.values.contact === option.value
                      : index === 0
                  }
                  className="size-4 accent-action"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        {/* P0-10: attach a photo of the problem. */}
        <div>
          <span className="mb-2 block text-label text-ink">
            Add a photo of the problem{" "}
            <span className="font-normal text-text-muted">(optional)</span>
          </span>
          <label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md border-[1.5px] border-dashed border-border-strong px-4 py-3 text-small text-text-secondary hover:bg-surface">
            <Paperclip aria-hidden="true" className="size-5 shrink-0 text-text-muted" />
            <span className="truncate">
              {photoName || "Tap to attach a photo"}
            </span>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="sr-only"
              onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? "")}
            />
          </label>
        </div>

        <Button type="submit" size="lg" fullWidth loading={pending}>
          Request my free quote
        </Button>

        {isDemo ? (
          <p className="text-small text-text-muted">
            Demo form — submissions are validated and shown back to you only.
            Nothing is sent to a real business.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-label text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-small font-medium text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
