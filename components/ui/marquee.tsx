import Image from "next/image";

import { HERO_MARQUEE_IMAGES } from "@/constants/content";

export function HeroMarquee() {
  return (
    <div className="hero-marquee-wrapper">
      <div className="hero-marquee-track">
        {HERO_MARQUEE_IMAGES.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={1000}
            height={500}
            className="hero-marquee-card"
            sizes="330px"
          />
        ))}
      </div>
    </div>
  );
}
