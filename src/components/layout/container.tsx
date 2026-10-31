import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType> = {
  /** Semantic wrapper element. Defaults to div. */
  as?: T;
  /** Cap width at the 720px text measure instead of the 1140px site container (Bible §5). */
  width?: "site" | "content";
} & React.ComponentPropsWithoutRef<T>;

function Container<T extends React.ElementType = "div">({
  as,
  width = "site",
  className,
  ...props
}: ContainerProps<T>) {
  const Comp = as ?? "div";

  return (
    <Comp
      data-slot="container"
      className={cn(
        "mx-auto w-full px-4 md:px-6 lg:px-8",
        width === "site" ? "max-w-site" : "max-w-content",
        className
      )}
      {...props}
    />
  );
}

export { Container };
