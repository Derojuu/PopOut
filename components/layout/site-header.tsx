import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NAV_LINKS, ROUTES } from "@/constants/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-10 lg:h-[72px] xl:px-0">
        <Link href={ROUTES.home} className="z-50 flex-shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Popout Tickets"
            width={48}
            height={48}
            priority
            className="h-10 w-10 lg:h-12 lg:w-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href={ROUTES.dashboard}
            className="rounded-full border-2 border-purple-1 px-4 py-2 text-sm font-semibold text-purple-1 transition-colors hover:bg-purple-4"
          >
            Log In
          </Link>
          <Link
            href={ROUTES.signUp}
            className="rounded-full bg-purple-1 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-purple-2"
          >
            Get Started
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden" />
      </div>
    </header>
  );
}
