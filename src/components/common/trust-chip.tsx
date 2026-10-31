import { Award, Check, MapPin, ShieldCheck, Star } from "lucide-react";
import type { TrustChip as TrustChipData, TrustIcon } from "@/types/site";

const icons: Record<TrustIcon, typeof Check> = {
  star: Star,
  check: Check,
  shield: ShieldCheck,
  map: MapPin,
  award: Award,
};

function TrustChip({ icon, label }: TrustChipData) {
  const Icon = icons[icon];

  return (
    <span className="inline-flex items-center gap-1 rounded-pill border border-border bg-surface px-3 py-2 text-small font-medium text-text-secondary">
      <Icon aria-hidden="true" className="size-5" />
      {label}
    </span>
  );
}

export { TrustChip };
