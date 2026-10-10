"use client";

import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Badge } from "@/components/ui/badge";
import { CarouselNav } from "@/components/ui/carousel-nav";
import { EventCard } from "@/components/ui/event-card";
import { useCarousel } from "@/hooks/use-carousel";
import type { EventItem } from "@/types";

import "swiper/css";
import "swiper/css/free-mode";

export interface EventCarouselProps {
  title: string;
  events: EventItem[];
  badge?: string;
}

export function EventCarousel({ title, events, badge }: EventCarouselProps) {
  const { onSwiper, onSlideChange, slidePrev, slideNext, isBeginning, isEnd } = useCarousel();

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-black tracking-[-0.02em]">{title}</h3>
        <div className="flex items-center gap-3">
          {badge ? <Badge variant="warning">{badge}</Badge> : null}
          <CarouselNav
            onPrev={slidePrev}
            onNext={slideNext}
            prevDisabled={isBeginning}
            nextDisabled={isEnd}
            label={title}
          />
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          modules={[FreeMode]}
          freeMode
          slidesPerView={4.1}
          spaceBetween={24}
          watchOverflow
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          breakpoints={{
            0: { slidesPerView: 1.6, spaceBetween: 12 },
            640: { slidesPerView: 2.3, spaceBetween: 16 },
            768: { slidesPerView: 2.8, spaceBetween: 20 },
            1024: { slidesPerView: 3.4, spaceBetween: 24 },
            1280: { slidesPerView: 4.1, spaceBetween: 24 },
          }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.href} className="w-auto">
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
