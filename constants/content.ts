import type {
  EventItem,
  FaqItem,
  Feature,
  FooterLink,
  FooterLinkGroup,
  FooterSocial,
  HeroStat,
  HowItWorksStep,
  LiveEventScreenshot,
  PricingPlan,
} from "@/types";

export const HERO = {
  titleLineOne: "Your front row seat",
  titleLineTwo: "to life's best moments",
  description:
    "Sell tickets seamlessly, track every sale, scan attendees with ease, and run events with the kind of confidence serious organizers expect.",
  primaryCta: { label: "Start Selling Tickets", href: "https://popouttickets.com/sign-up" },
  secondaryCta: { label: "Browse Events", href: "https://popouttickets.com/events" },
} as const;

export const HERO_STATS: HeroStat[] = [
  { value: "2K+", label: "Events Hosted", icon: "calendarCheck" },
  { value: "66K+", label: "Tickets Sold", icon: "ticket" },
  { value: "1K+", label: "Organizers", icon: "users" },
];

/**
 * The marquee track renders a 12-image unit twice, so the track is already
 * doubled for the `translate(-50%)` loop the stylesheet uses.
 */
export const HERO_MARQUEE_IMAGES = [
  { src: "/images/marquee/showcase-1.webp", alt: "Image 2" },
  { src: "/images/marquee/showcase-2.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-3.webp", alt: "Image 1" },
  { src: "/images/marquee/showcase-4.webp", alt: "Image 2" },
  { src: "/images/marquee/showcase-5.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-1.webp", alt: "Image 2" },
  { src: "/images/marquee/showcase-2.webp", alt: "Image 1" },
  { src: "/images/marquee/showcase-3.webp", alt: "Image 2" },
  { src: "/images/marquee/showcase-4.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-6.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-1.webp", alt: "Image 1" },
  { src: "/images/marquee/showcase-2.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-1.webp", alt: "Image 2" },
  { src: "/images/marquee/showcase-2.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-3.webp", alt: "Image 1" },
  { src: "/images/marquee/showcase-4.webp", alt: "Image 2" },
  { src: "/images/marquee/showcase-6.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-1.webp", alt: "Image 2" },
  { src: "/images/marquee/showcase-2.webp", alt: "Image 1" },
  { src: "/images/marquee/showcase-3.webp", alt: "Image 2" },
  { src: "/images/marquee/showcase-4.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-6.webp", alt: "Image 3" },
  { src: "/images/marquee/showcase-1.webp", alt: "Image 1" },
  { src: "/images/marquee/showcase-2.webp", alt: "Image 3" },
] as const;

export const HOW_IT_WORKS = {
  eyebrow: "How It Works",
  titleLineOne: "Three steps to",
  titleLineTwo: "a stronger event launch.",
  description:
    "No technical skills required. If you can share a link, you can sell tickets.",
  steps: [
    {
      step: "01",
      title: "Create Your Event",
      description:
        "Add your flyer, write your event story, create your ticket options, and publish in minutes.",
      icon: "calendarPlus",
    },
    {
      step: "02",
      title: "Sell Tickets Online",
      description:
        "Share your unique event link anywhere. Attendees pay securely and instantly get their tickets.",
      icon: "creditCard",
    },
    {
      step: "03",
      title: "Check In & Get Paid",
      description:
        "Scan attendees at the door with your phone camera. Request a payout any time you want.",
      icon: "scanLine",
    },
  ] satisfies HowItWorksStep[],
} as const;

export const FEATURES = {
  eyebrow: "Features",
  title: "Everything you need to run a great event",
  description:
    "All the tools serious organizers use — included in every plan, at no extra cost.",
  items: [
    {
      title: "QR Code Check-In",
      description: "Every ticket gets a unique QR code. Scan attendees at the gate in seconds.",
      icon: "scanLine",
    },
    {
      title: "Discount Codes",
      description:
        "Reward early buyers with percentage or fixed-amount promo codes. Set expiry dates and limits.",
      icon: "badgePercent",
    },
    {
      title: "Referral Links",
      description:
        "Turn your audience into your marketing team. Generate unique referral links and track every conversion.",
      icon: "link",
    },
    {
      title: "Complimentary Tickets",
      description:
        "Issue free tickets to VIPs, media, or partners instantly. They get full check-in access.",
      icon: "gift",
    },
    {
      title: "Live Analytics",
      description:
        "Watch sales, check-in rates, and revenue in real time from your dashboard.",
      icon: "chartColumn",
    },
    {
      title: "Fraud-Proof Tickets",
      description:
        "Each ticket is cryptographically unique. Our system instantly flags duplicates.",
      icon: "shield",
    },
  ] satisfies Feature[],
} as const;

export const TRENDING_EVENTS: EventItem[] = [
  {
    title: "My Groove My Rules",
    category: "Music",
    dateBadge: "17 Oct",
    date: "Sat, 17 Oct 2026",
    time: "5:00 pm",
    location: "Adrenaline lounge",
    image: "/images/events/my-groove-my-rules.webp",
    href: "https://popouttickets.com/events/Mygroovemyrules",
  },
  {
    title: "Atlantis the party 4.0",
    category: "Festivals",
    dateBadge: "30 Dec",
    date: "Wed, 30 Dec 2026",
    time: "1:00 pm",
    location: "Undisclosed",
    image: "/images/events/atlantis-the-party-4.webp",
    href: "https://popouttickets.com/events/atpdettydecember",
  },
  {
    title: "OASIS X OFFSIDE 3.0",
    category: "Nightlife",
    dateBadge: "28 Dec",
    date: "Mon, 28 Dec 2026",
    time: "2:00 pm",
    location: "Location undisclosed",
    image: "/images/events/oasis-x-offside-3.webp",
    href: "https://popouttickets.com/events/OASISXOFFSIDE3",
  },
  {
    title: "Female ticket 2.0 The Wet Party With Dj Small Whyte x Dj KayTunez",
    category: "Pool Party",
    dateBadge: "17 Oct",
    date: "Sat, 17 Oct 2026",
    time: "9:26 pm",
    location: "Lotus lounge 1st avenue s close Festac town lagos",
    image: "/images/events/female-ticket-2.jpg",
    href: "https://popouttickets.com/events/GirlsTicket",
  },
  {
    title: "VIBE TILL SUNRISE",
    category: "Nightlife",
    dateBadge: "31 Oct",
    date: "Sat, 31 Oct 2026",
    time: "10:00 pm",
    location: "Lawa Event Space, opposite Yo Fam Global Mart Lagos island.",
    image: "/images/events/vibe-till-sunrise.jpg",
    href: "https://popouttickets.com/events/vibetillsunrise",
  },
  {
    title: "FRIENDS OF JAY.",
    category: "House Parties",
    dateBadge: "28 Oct",
    date: "Wed, 28 Oct 2026",
    time: "7:00 am",
    location: "frozen cavana, lagos",
    image: "/images/events/friends-of-jay.webp",
    href: "https://popouttickets.com/events/frndsofjay",
  },
  {
    title: "AURA FESTIVAL PARTY 2.0",
    category: "Festivals",
    dateBadge: "22 Dec",
    date: "Tue, 22 Dec 2026",
    time: "3:00 pm",
    location: "Undisclosed",
    image: "/images/events/aura-festival-party-2.webp",
    href: "https://popouttickets.com/events/Aurafestivalparty",
  },
  {
    title: "B4 Scary Hours By Southwest x Engine Room",
    category: "Nightlife",
    dateBadge: "30 Oct",
    date: "Fri, 30 Oct 2026",
    time: "9:00 pm",
    location: "Engine Room Lagos",
    image: "/images/events/b4-scary-hours.webp",
    href: "https://popouttickets.com/events/B4SCARYHOURS",
  },
  {
    title: "Y.W.F (Young wild'n Free) Rave party",
    category: "Lifestyle",
    dateBadge: "25 Oct",
    date: "Sun, 25 Oct 2026",
    time: "10:00 pm",
    location: "Dex lounge fuoye",
    image: "/images/events/ywf-rave-party.webp",
    href: "https://popouttickets.com/events/YWF",
  },
  {
    title: "FLYGERIAN UNIVERSE X 6IXWAYS POP-UP & AFTERPARTY",
    category: "Pop-up",
    dateBadge: "05 Dec",
    date: "Sat, 05 Dec 2026",
    time: "3:00 pm",
    location: "Undisclosed",
    image: "/images/events/flygerian-universe.webp",
    href: "https://popouttickets.com/events/Flygerianx6ixways",
  },
];

export const FEATURED_EVENTS: EventItem[] = [
  {
    title: "debe!!",
    category: "Music",
    dateBadge: "24 Oct",
    date: "Sat, 24 Oct 2026",
    time: "10:00 pm",
    location: "ikoyi plaza",
    image: "/images/events/debe.webp",
    href: "https://popouttickets.com/events/debe4",
  },
  {
    title: "Suavee Cookout '26",
    category: "Festivals",
    dateBadge: "28 Nov",
    date: "Sat, 28 Nov 2026",
    time: "2:00 pm",
    location: "Encourage Park, Lagos",
    image: "/images/events/suavee-cookout-26.webp",
    href: "https://popouttickets.com/events/suaveecookout26",
  },
  {
    title: "ON THE LOUZZE ASABA",
    category: "Festivals",
    dateBadge: "05 Dec",
    date: "Sat, 05 Dec 2026",
    time: "4:30 pm",
    location: "Asaba",
    image: "/images/events/on-the-louzze-asaba.webp",
    href: "https://popouttickets.com/events/onthelouzze",
  },
  {
    title: "MODULIVIN DA EXPERIENCE",
    category: "Arts & Crafts",
    dateBadge: "01 Nov",
    date: "Sun, 01 Nov 2026",
    time: "1:00 pm",
    location: "AMAH STUDIOS ELEGANZA BUILDING LAGOS ISLAND",
    image: "/images/events/modulivin-da-experience.webp",
    href: "https://popouttickets.com/events/DAEXPERIENCE",
  },
  {
    title: "Phantom Dance",
    category: "Afrobeats",
    dateBadge: "07 Nov",
    date: "Sat, 07 Nov 2026",
    time: "8:00 pm",
    location: "Casa 45: 35, Adeola Odeku st. Victoria island. Lagos",
    image: "/images/events/phantom-dance.webp",
    href: "https://popouttickets.com/events/SincityekoXKamolseffect",
  },
];

export const PRICING = {
  eyebrow: "Pricing",
  titleLineOne: "Clear pricing.",
  titleLineTwo: "No mystery math.",
  description: "Free events stay free, normal ticketed events are charged at",
  descriptionHighlightOne: "5% + ₦100",
  descriptionMiddle: ", and voting events at",
  descriptionHighlightTwo: "8%",
  descriptionEnd: ".",
  plans: [
    {
      name: "Free Events",
      price: "₦0",
      subtitle: "Per ticket, always.",
      description:
        "Hosting a free event? We don't charge a single kobo. Create, share, and check in with zero fees.",
      ctaLabel: "Get Started",
      ctaHref: "https://popouttickets.com/sign-up",
    },
    {
      name: "Ticket Events",
      price: "5%",
      priceSuffix: "+ ₦100",
      subtitle: "Per paid ticket sold.",
      description:
        "For regular ticketed events. We keep this predictable so organizers can plan their numbers.",
      ctaLabel: "Get Started",
      ctaHref: "https://popouttickets.com/sign-up",
      featured: true,
      featuredLabel: "Most Used",
    },
    {
      name: "Voting Events",
      price: "8%",
      subtitle: "Per vote purchase.",
      description:
        "Built for paid voting experiences with transparent fee handling and live results.",
      ctaLabel: "Get Started",
      ctaHref: "https://popouttickets.com/sign-up",
    },
    {
      name: "Custom Services",
      price: "Tailored Quote",
      subtitle: "For advanced event operations.",
      description: "Reach out for a custom package based on your event size and support needs.",
      bullets: [
        "Event wrist tags and printing services",
        "On-site ticketing support",
        "Custom event operations setup",
      ],
      ctaLabel: "Chat on WhatsApp",
      ctaHref: "https://wa.me/2348163857039",
    },
  ] satisfies PricingPlan[],
} as const;

export const LIVE_EVENTS = {
  eyebrow: "Live Events",
  title: "Events happening on Popout Tickets",
  description: "Real events, real energy. See what organizers are creating every day.",
  screenshots: [
    { image: "/images/live/customizable-referral-links.webp", alt: "Popout customizable referral links" },
    { image: "/images/live/pay-with-crypto.webp", alt: "Popout pay with crypto" },
    { image: "/images/live/group-tickets.webp", alt: "Popout group tickets" },
    { image: "/images/live/pay-small-small.webp", alt: "Popout pay small small" },
    { image: "/images/live/discount-codes.webp", alt: "Popout discount codes" },
    { image: "/images/live/google-map-integration.webp", alt: "Popout Google Map integration" },
    { image: "/images/live/feature-07.webp", alt: "Image 1" },
    { image: "/images/live/feature-08.webp", alt: "Image 2" },
    { image: "/images/live/feature-09.webp", alt: "Image 3" },
    { image: "/images/live/feature-10.webp", alt: "Image 1" },
    { image: "/images/live/feature-11.jpg", alt: "Image 2" },
    { image: "/images/live/feature-12.webp", alt: "Image 3" },
  ] satisfies LiveEventScreenshot[],
} as const;

export const FAQ = {
  eyebrow: "FAQs",
  titleLineOne: "Questions,",
  titleLineTwo: "answered clearly.",
  description: "Everything you need to know about selling tickets on Popout.",
  items: [
    {
      id: "cost",
      question: "How much does it cost to use this platform?",
      answer:
        "Creating an account and publishing free events costs nothing. Paid events are charged at 5% + ₦100 per ticket sold, and voting events at 8% per vote. There is no subscription and no setup fee.",
    },
    {
      id: "hidden-fees",
      question: "Are there any hidden fees?",
      answer:
        "No. The only charges are the published per-ticket rates. Free events are completely free, and there are no monthly, setup, or withdrawal charges.",
    },
    {
      id: "fee-deduction",
      question: "How is the service fee deducted?",
      answer:
        "The service fee is deducted automatically from each sale before your payout is settled, so you never have to reconcile invoices afterwards.",
    },
    {
      id: "buyer-fees",
      question: "Do buyers pay extra fees?",
      answer:
        "Buyers pay the ticket price the organizer sets. The platform fee is deducted from the organizer's side, so the price attendees see is the price they pay.",
    },
    {
      id: "payouts",
      question: "How do I get paid for ticket sales?",
      answer:
        "Sales accrue to your Popout wallet. Request a payout from your dashboard and we settle to your registered bank account.",
    },
    {
      id: "payout-timing",
      question: "When will I receive my payouts?",
      answer:
        "Payout requests are processed within 24 hours on business days, and you can track the status of every request from your dashboard.",
    },
    {
      id: "check-in",
      question: "How do I check in attendees?",
      answer:
        "Open the scanner in your dashboard on any phone with a camera and scan the QR code on each ticket. Check-ins sync live, so duplicate tickets are flagged instantly.",
    },
  ] satisfies FaqItem[],
  footnote: "Still have questions?",
  footnoteLink: { label: "Chat with us on WhatsApp →", href: "https://wa.me/2348163857039" },
} as const;

export const NEWSLETTER = {
  eyebrow: "Stay Updated",
  title: "Join the newsletter",
  description:
    "Get event & website updates! 🎉 Stay in the know about new events and discount offers.",
  ctaLabel: "Subscribe",
} as const;

export const FINAL_CTA = {
  eyebrow: "Ready to get started?",
  title: "Your next event deserves better ticketing.",
  description: "Join hundreds of organizers selling out their events on Popout Tickets",
  primaryCta: { label: "Create Free Account", href: "https://popouttickets.com/sign-up" },
  secondaryCta: { label: "Browse Events", href: "https://popouttickets.com/events" },
} as const;

export const FOOTER = {
  description:
    "Nigeria's modern event ticketing platform. Create, sell, and manage events with confidence.",
  socials: [
    {
      label: "X (Twitter)",
      href: "https://x.com/popouttickets?s=21",
      image: "/images/social/x.svg",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/popout.tickets?igsh=dXMyMjh4b2hmaXNn&utm_source=qr",
      image: "/images/social/instagram.svg",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@popout.tickets?_t=ZS-8z2YnHq0x7A&_r=1",
      icon: "tiktok",
    },
  ] satisfies FooterSocial[],
  linkGroups: [
    {
      title: "Explore",
      links: [
        { label: "Events", href: "https://popouttickets.com/events" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "mailto:info@popouttickets.com" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQs", href: "#faq" },
        { label: "Terms & Conditions", href: "https://popouttickets.com/terms" },
        { label: "Privacy Policy", href: "https://popouttickets.com/privacy" },
      ],
    },
  ] satisfies FooterLinkGroup[],
  promo: {
    title: "Ready to sell tickets?",
    description: "Join hundreds of organizers on Popout Tickets today.",
    ctaLabel: "Get Started Free",
    ctaHref: "https://popouttickets.com/sign-up",
  },
  legal: [
    { label: "Terms", href: "https://popouttickets.com/terms", external: false },
    { label: "Privacy", href: "https://popouttickets.com/privacy", external: false },
    { label: "Contact", href: "https://wa.me/2348163857039", external: true },
  ] satisfies FooterLink[],
  copyright: "© 2026 Popout Tickets. All rights reserved.",
} as const;
