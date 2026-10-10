import Link from "next/link";

import { HeroMarquee } from "@/components/ui/marquee";
import { Icon } from "@/components/ui/icons";
import { HERO, HERO_STATS } from "@/constants/content";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-0 pb-12 pt-8 md:pb-16 md:pt-12">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-10 md:px-16">
        <h1 className="mx-auto max-w-5xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl xl:text-7xl">
          {HERO.titleLineOne}
          <span className="block text-purple-1">{HERO.titleLineTwo}</span>
        </h1>

        <p className="mx-auto mb-10 mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          {HERO.description}
        </p>

        <div className="mb-12 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href={HERO.primaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-1 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-1/20 transition-colors hover:bg-purple-2 sm:w-auto"
          >
            {HERO.primaryCta.label}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
          <Link
            href={HERO.secondaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-purple-200 bg-background/80 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-purple-50 sm:w-auto dark:border-purple-900/40 dark:hover:bg-purple-950/20"
          >
            {HERO.secondaryCta.label}
          </Link>
        </div>

        <div className="mb-10 grid grid-cols-3 gap-2 sm:mb-14 sm:gap-4">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-purple-200/70 bg-background/80 px-2 py-3 shadow-sm backdrop-blur sm:rounded-3xl sm:px-5 sm:py-5 dark:border-purple-900/40"
            >
              <div className="mb-2 flex justify-center sm:mb-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-purple-700 sm:h-11 sm:w-11 sm:rounded-2xl dark:bg-purple-950/40 dark:text-purple-200">
                  <Icon name={stat.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <div className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <HeroMarquee />
    </section>
  );
}
