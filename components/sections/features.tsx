import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import { FEATURES } from "@/constants/content";

export function Features() {
  return (
    <section className="wrapper py-8 lg:py-12">
      <div className="rounded-3xl bg-gradient-to-br from-purple-2 to-purple-1 px-6 py-12 lg:px-12 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <Badge variant="onGradient" className="mb-4">
            {FEATURES.eyebrow}
          </Badge>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            {FEATURES.title}
          </h2>
          <p className="mt-3 text-sm text-white/65 md:text-base">{FEATURES.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.items.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                <Icon name={feature.icon} className="h-5 w-5 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
