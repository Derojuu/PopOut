"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SwiperClass } from "swiper/react";

/**
 * Tracks the active Swiper instance and its navigation edges so the
 * external prev/next buttons can mirror the disabled state of the original.
 */
export function useCarousel() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const sync = useCallback((instance: SwiperClass) => {
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  }, []);

  const onSwiper = useCallback(
    (instance: SwiperClass) => {
      swiperRef.current = instance;
      sync(instance);
    },
    [sync],
  );

  const onSlideChange = useCallback(
    (instance: SwiperClass) => {
      sync(instance);
    },
    [sync],
  );

  useEffect(() => {
    const instance = swiperRef.current;
    if (!instance) return;
    const handleResize = () => sync(instance);
    instance.on("resize", handleResize);
    return () => {
      instance.off("resize", handleResize);
    };
  }, [sync]);

  const slidePrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const slideNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return { onSwiper, onSlideChange, slidePrev, slideNext, isBeginning, isEnd };
}
