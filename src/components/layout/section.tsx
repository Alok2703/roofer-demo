import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("py-12 md:py-16 lg:py-24", {
  variants: {
    background: {
      white: "bg-white",
      surface: "bg-surface",
      ink: "bg-ink text-white",
    },
  },
  defaultVariants: {
    background: "white",
  },
});

type SectionProps = React.ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants>;

function Section({ background, className, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ background }), className)}
      {...props}
    />
  );
}

export { Section };
