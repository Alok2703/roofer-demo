import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  className?: string;
}

/**
 * Reserves a fixed 4:3 media slot (zero CLS, Bible §14/§16) until a real
 * job photo is supplied via next/image. Decorative: hidden from
 * assistive technology.
 */
function MediaPlaceholder({ className }: MediaPlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("aspect-[4/3] w-full rounded-lg border border-border bg-muted", className)}
    />
  );
}

export { MediaPlaceholder };
