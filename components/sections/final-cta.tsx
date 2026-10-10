import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import { FINAL_CTA } from "@/constants/content";

export function FinalCta() {
  return (
    <section className="wrapper py-8 pb-16 lg:pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-2 to-purple-1 px-8 py-14 text-center">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-2/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <Badge variant="onGradient" className="mb-5">
            {FINAL_CTA.eyebrow}
          </Badge>

          <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            {"Your next event deserves"}
            <br className="hidden sm:block" />
            {"better ticketing."}
          </h2>

          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
            {FINAL_CTA.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={FINAL_CTA.primaryCta.href}
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-purple-1 shadow-lg transition-colors hover:bg-purple-4"
            >
              {FINAL_CTA.primaryCta.label}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
            <Link
              href={FINAL_CTA.secondaryCta.href}
              className="flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {FINAL_CTA.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
