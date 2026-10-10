export type IconName =
  | "arrowRight"
  | "badgePercent"
  | "calendarCheck"
  | "calendarPlus"
  | "chartColumn"
  | "check"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "clock"
  | "creditCard"
  | "gift"
  | "link"
  | "mail"
  | "mapPin"
  | "moon"
  | "scanLine"
  | "shield"
  | "sun"
  | "ticket"
  | "tiktok"
  | "users"
  | "whatsapp";

export interface EventItem {
  /** Alt text taken verbatim from the source capture. */
  title: string;
  /** Event category pill shown over the poster. */
  category: string;
  /** Short date pill, e.g. "17 Oct". */
  dateBadge: string;
  /** Full date row, e.g. "Sat, 17 Oct 2026". */
  date: string;
  /** Start time row, e.g. "5:00 pm". */
  time: string;
  /** Venue row. */
  location: string;
  image: string;
  href: string;
}

export interface HeroStat {
  label: string;
  value: string;
  icon: IconName;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconName;
}

export interface LiveEventScreenshot {
  image: string;
  alt: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  priceSuffix?: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  featuredLabel?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
  /** Opens in a new tab, matching the source capture's external links. */
  external?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocial {
  label: string;
  href: string;
  /** Local logo asset, when the mark ships as an image. */
  image?: string;
  /** Inline icon, when the mark is drawn rather than loaded. */
  icon?: IconName;
}
