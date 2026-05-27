import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@shared/lib/cn";

export type CardVariant = "default" | "lg" | "quiet";

const VARIANT: Record<CardVariant, string> = {
  default: "bg-[var(--ax-bg-elevated)] border border-[var(--ax-line-normal)] rounded-2xl py-[22px] px-6 dark:shadow-[var(--ax-shadow-card)]",
  lg: "bg-[var(--ax-bg-elevated)] border border-[var(--ax-line-normal)] rounded-[20px] py-7 px-[30px] dark:shadow-[var(--ax-shadow-card)]",
  quiet: "bg-[var(--ax-bg-elevated)] border border-[var(--ax-line-alternative)] rounded-2xl py-[22px] px-6",
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className, ...props }, ref) => (
    <div ref={ref} className={cn(VARIANT[variant], className)} {...props} />
  )
);
Card.displayName = "Card";
