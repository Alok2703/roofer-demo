import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "text-button rounded-md",
    "transition-colors duration-150 ease-brand",
    "active:translate-y-px",
    "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-muted disabled:text-text-muted",
    "aria-busy:cursor-wait",
    "[&_svg]:size-5 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-action text-white hover:bg-action-hover",
        secondary:
          "border-[1.5px] border-border-strong bg-white text-ink hover:border-ink hover:bg-surface",
        ghost: "text-action hover:bg-action-subtle",
        text: "text-action underline underline-offset-[3px] hover:text-action-hover",
        danger: "bg-error text-white",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      { variant: "text", size: ["sm", "md", "lg"], class: "h-auto rounded-none p-0" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render styles onto the child element (e.g. next/link or a tel: anchor). */
  asChild?: boolean;
  /** Spinner replaces content; width stays locked (Bible §9). Real buttons only. */
  loading?: boolean;
}

function Button({
  className,
  variant,
  size,
  fullWidth,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild && !loading ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      disabled={Comp === "button" ? disabled || loading : undefined}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <>
          <span className="absolute inset-0 flex items-center justify-center">
            <Loader2 aria-hidden="true" className="animate-spin" />
          </span>
          <span aria-hidden="true" className="invisible inline-flex items-center gap-2">
            {children}
          </span>
          <span className="sr-only">Loading</span>
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
