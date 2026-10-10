export const SITE = {
  name: "Popout Tickets",
  url: "https://popouttickets.com",
  description:
    "Sell tickets seamlessly, track every sale, scan attendees with ease, and run events with the kind of confidence serious organizers expect.",
  whatsappUrl: "https://wa.me/2348163857039",
} as const;

export const ROUTES = {
  home: "/",
  events: "/events",
  pricing: "#pricing",
  faq: "#faq",
  dashboard: "/dashboard",
  signUp: "/sign-up",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Events", href: ROUTES.events },
  { label: "Pricing", href: ROUTES.pricing },
  { label: "FAQs", href: ROUTES.faq },
] as const;
