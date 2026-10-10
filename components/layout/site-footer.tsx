import Image from "next/image";
import Link from "next/link";

import { FOOTER } from "@/constants/content";
import { Icon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const socialLinkClass =
  "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-purple-1 hover:bg-purple-4";
const footerLinkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="wrapper py-12 lg:py-14">
        <div className="grid grid-cols-1 gap-10 border-b border-border pb-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo.webp"
                alt="Popout Tickets"
                width={44}
                height={44}
                className="mb-4 h-11 w-11"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {FOOTER.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {FOOTER.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={socialLinkClass}
                >
                  {social.image ? (
                    <Image
                      src={social.image}
                      alt={social.label}
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  ) : (
                    <Icon name={social.icon ?? "tiktok"} className="h-4 w-4 text-foreground" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {FOOTER.linkGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={footerLinkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:col-span-1 lg:block">
            <div className="rounded-2xl border border-purple-300/40 bg-purple-50/90 p-5 shadow-sm dark:border-purple-800/50 dark:bg-purple-950/35">
              <p className="mb-1 text-sm font-bold text-purple-900 dark:text-purple-100">
                {FOOTER.promo.title}
              </p>
              <p className="mb-4 text-xs text-purple-900/75 dark:text-purple-200/85">
                {FOOTER.promo.description}
              </p>
              <Link
                href={FOOTER.promo.ctaHref}
                className="block rounded-full bg-purple-1 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-purple-2 dark:bg-purple-600 dark:hover:bg-purple-500"
              >
                {FOOTER.promo.ctaLabel}
              </Link>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col items-center justify-between gap-3 pt-6 text-xs text-muted-foreground sm:flex-row",
          )}
        >
          <p>{FOOTER.copyright}</p>
          <div className="flex items-center gap-4">
            {FOOTER.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
