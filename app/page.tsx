import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { EventsShowcase } from "@/components/sections/events-showcase";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { LiveEvents } from "@/components/sections/live-events";
import { Newsletter } from "@/components/sections/newsletter";
import { Pricing } from "@/components/sections/pricing";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <HowItWorks />
      <Features />
      <EventsShowcase />
      <Pricing />
      <LiveEvents />
      <Faq />
      <Newsletter />
      <FinalCta />
      <SiteFooter />
    </>
  );
}
