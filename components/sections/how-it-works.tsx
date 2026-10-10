import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import { HOW_IT_WORKS } from "@/constants/content";

export function HowItWorks() {
  return (
    <section className="wrapper py-16 lg:py-20">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <Badge className="mb-4">{HOW_IT_WORKS.eyebrow}</Badge>
        <h2 className="text-5xl font-black tracking-[-0.04em] text-foreground md:text-6xl">
          {HOW_IT_WORKS.titleLineOne}
          <span className="block text-purple-1">{HOW_IT_WORKS.titleLineTwo}</span>
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
          {HOW_IT_WORKS.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
        {HOW_IT_WORKS.steps.map((step) => (
          <div
            key={step.step}
            className="relative flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md md:flex-col md:gap-4 md:rounded-[1.75rem] md:p-6"
          >
            <div className="flex shrink-0 flex-col items-center gap-2">
              <span className="select-none text-2xl font-black leading-none text-purple-4 md:text-6xl">
                {step.step}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-4 md:h-12 md:w-12">
                <Icon name={step.icon} className="h-5 w-5 text-purple-1 md:h-6 md:w-6" />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-foreground md:text-lg">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground md:leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
