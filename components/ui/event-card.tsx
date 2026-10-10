import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icons";
import type { EventItem } from "@/types";

export interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={event.href} className="rounded-xl">
      <article className="group flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-border/80 bg-card shadow-[0_16px_32px_-24px_rgba(15,23,42,0.65)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_36px_-22px_rgba(15,23,42,0.8)]">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 32vw, 300px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          <div className="absolute left-3 top-3">
            <Badge variant="category">{event.category}</Badge>
          </div>
          <div className="absolute right-3 top-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-background/90 px-2.5 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-sm dark:bg-background/80">
              <Icon name="calendarCheck" className="h-3.5 w-3.5" />
              {event.dateBadge}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h2 className="line-clamp-1 text-lg font-semibold leading-[1.2] tracking-tight text-foreground">
            {event.title}
          </h2>
          <div className="mt-3 flex min-w-0 items-center gap-2 text-[0.8125rem] text-muted-foreground">
            <Icon name="calendarCheck" className="h-4 w-4 shrink-0 text-purple-1 dark:text-purple-3" />
            <span className="truncate">{event.date}</span>
            <span aria-hidden className="text-muted-foreground">
              ·
            </span>
            <Icon name="clock" className="h-4 w-4 shrink-0 text-purple-1 dark:text-purple-3" />
            <span className="shrink-0">{event.time}</span>
          </div>
          <div className="mt-2 flex min-w-0 items-center gap-2 text-[0.8125rem] text-muted-foreground">
            <Icon name="mapPin" className="h-4 w-4 shrink-0 text-purple-1 dark:text-purple-3" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
