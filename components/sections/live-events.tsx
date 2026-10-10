"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Badge } from "@/components/ui/badge";
import { LIVE_EVENTS } from "@/constants/content";

import "swiper/css";
import "swiper/css/pagination";

export function LiveEvents() {
  return (
    <section className="wrapper py-8 lg:py-12">
      <div className="mx-auto mb-8 max-w-xl text-center">
        <Badge variant="soft" className="mb-4">
          {LIVE_EVENTS.eyebrow}
        </Badge>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">{LIVE_EVENTS.title}</h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          {LIVE_EVENTS.description}
        </p>
      </div>

      <div className="mx-auto w-full max-w-[430px] overflow-hidden rounded-3xl border border-purple-200/70 bg-purple-950/5 p-2 shadow-xl shadow-purple-950/10 dark:border-purple-900/40 dark:bg-purple-950/20">
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mySwiper"
          >
            {LIVE_EVENTS.screenshots.map((shot) => (
              <SwiperSlide key={shot.image} className="pb-8">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-purple-950">
                  <Image
                    src={shot.image}
                    alt={shot.alt}
                    fill
                    sizes="412px"
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
