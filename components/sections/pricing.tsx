import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import { PRICING } from "@/constants/content";
import { cn } from "@/lib/utils";

const outlineCtaClass =
  "inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted";
const solidCtaClass =
  "inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-purple-1 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-2";

export function Pricing() {
  return (
    <section id="pricing" className="wrapper px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <Badge className="mb-4">{PRICING.eyebrow}</Badge>
        <h2 className="text-5xl font-black tracking-[-0.04em] text-foreground md:text-6xl">
          {PRICING.titleLineOne}
          <span className="block text-purple-1">{PRICING.titleLineTwo}</span>
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          {PRICING.description} <strong className="text-foreground">{PRICING.descriptionHighlightOne}</strong>
          {PRICING.descriptionMiddle}{" "}
          <strong className="text-foreground">{PRICING.descriptionHighlightTwo}</strong>
          {PRICING.descriptionEnd}
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
        {PRICING.plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex h-full flex-col rounded-2xl border bg-card p-6",
              plan.featured
                ? "border-purple-1/50 shadow-lg shadow-purple-1/10 ring-1 ring-purple-1/15 dark:border-purple-1/40"
                : "border-border shadow-sm",
            )}
          >
            {plan.featured && plan.featuredLabel ? (
              <span className="absolute right-5 top-5">
                <Badge variant="featured">{plan.featuredLabel}</Badge>
              </span>
            ) : null}

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {plan.name}
            </p>

            <div className="mt-5 flex min-h-[3.75rem] flex-wrap items-end gap-x-2">
              <p className="text-4xl font-black leading-none tracking-tight text-foreground">
                {plan.price}
              </p>
              {plan.priceSuffix ? (
                <p className="pb-1 text-lg font-bold leading-none text-muted-foreground">
                  {plan.priceSuffix}
                </p>
              ) : null}
            </div>

            <p className="mt-3 text-sm text-muted-foreground">{plan.subtitle}</p>

            {plan.bullets ? (
              <ul className="mt-4 space-y-2.5 text-sm leading-6 text-muted-foreground">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-purple-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <p className="mt-4 text-sm leading-6 text-muted-foreground">{plan.description}</p>

            <div className="mt-auto pt-6">
              <Link
                href={plan.ctaHref}
                className={plan.featured ? solidCtaClass : outlineCtaClass}
              >
                {plan.ctaLabel}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
