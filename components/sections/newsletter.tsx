import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { NEWSLETTER } from "@/constants/content";

export function Newsletter() {
  return (
    <section className="wrapper py-8">
      <div className="rounded-2xl border border-border bg-muted/40 px-6 py-8 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {NEWSLETTER.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{NEWSLETTER.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{NEWSLETTER.description}</p>
          </div>

          <Button className="w-full shrink-0 rounded-full md:w-auto">
            <Icon name="mail" className="h-4 w-4" />
            {NEWSLETTER.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
