import {
  ArrowRight01Icon,
  BadgePercentIcon,
  Calendar01Icon,
  CalendarAdd01Icon,
  ChartColumnIcon,
  CheckmarkCircle02Icon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock01Icon,
  CreditCardIcon,
  GiftIcon,
  Link01Icon,
  Location01Icon,
  Mail01Icon,
  Moon02Icon,
  QrCode01Icon,
  Shield01Icon,
  Sun03Icon,
  Ticket01Icon,
  UserMultiple02Icon,
} from "@hugeicons/core-free-icons";

import type { IconName } from "@/types";

/**
 * Maps the semantic icon names used across the site onto Hugeicons.
 * Kept as a single lookup so every call site shares one source of truth.
 */
export const ICONS = {
  arrowRight: ArrowRight01Icon,
  badgePercent: BadgePercentIcon,
  calendarCheck: Calendar01Icon,
  calendarPlus: CalendarAdd01Icon,
  chartColumn: ChartColumnIcon,
  check: CheckmarkCircle02Icon,
  chevronDown: ChevronDownIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  clock: Clock01Icon,
  creditCard: CreditCardIcon,
  gift: GiftIcon,
  link: Link01Icon,
  mail: Mail01Icon,
  mapPin: Location01Icon,
  moon: Moon02Icon,
  scanLine: QrCode01Icon,
  shield: Shield01Icon,
  sun: Sun03Icon,
  ticket: Ticket01Icon,
  users: UserMultiple02Icon,
} satisfies Record<Exclude<IconName, "tiktok" | "whatsapp">, unknown>;
