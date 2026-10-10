import { EventCarousel } from "@/components/ui/event-carousel";
import { FEATURED_EVENTS, TRENDING_EVENTS } from "@/constants/content";

export function EventsShowcase() {
  return (
    <section className="wrapper py-14 lg:py-20">
      <section className="mt-8">
        <EventCarousel title="Trending Events" events={TRENDING_EVENTS} badge="Popular now" />
      </section>

      <section className="mt-10">
        <EventCarousel title="Featured Events" events={FEATURED_EVENTS} />
      </section>
    </section>
  );
}
