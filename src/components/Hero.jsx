"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const banners = [
  "/hero/banner1.jpg",
  "/hero/banner2.jpg",
  "/hero/banner3.jpg",
  "/hero/banner4.jpg",
];

export default function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        navigation
        loop
        className="w-full h-full"
      >
        {banners.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Banner ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
