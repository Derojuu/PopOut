import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-block font-semibold uppercase", {
  variants: {
    variant: {
      /** Bordered pill used by the How It Works, Pricing and FAQ eyebrows. */
      eyebrow: "rounded-full border border-purple-200 bg-background px-4 py-2 text-xs tracking-[0.24em] text-purple-700 dark:border-purple-900/50 dark:text-purple-200",
      /** Filled pill used by the Live Events eyebrow. */
      soft: "rounded-full bg-purple-4 px-3 py-1 text-xs tracking-widest text-purple-1",
      /** On-gradient pill used inside the purple feature and CTA cards. */
      onGradient: "rounded-full bg-white/15 px-3 py-1 text-xs tracking-widest text-white/80",
      /** "Popular now" pill on the trending drawer. */
      warning: "rounded-full bg-orange-100 px-3 py-1 text-xs normal-case tracking-normal text-orange-800 dark:bg-orange-900/50 dark:text-orange-200",
      /** "Most Used" pill on the featured pricing plan. */
      featured: "rounded-full bg-purple-1 px-2.5 py-1 text-[0.6875rem] text-white",
      /** Category pill overlaid on an event poster. */
      category: "rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium normal-case tracking-normal text-white backdrop-blur-sm",
    },
  },
  defaultVariants: { variant: "eyebrow" },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
