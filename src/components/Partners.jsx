import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const logos = [
  "/partners/vivriti.png",
  "/partners/sundaram.png",
  "/partners/dia.png",
  "/partners/sidbi.png",
  "/partners/nabard.png",
];

export default function PartnersCarousel() {
  return (
    <section
      className="relative bg-cover bg-center py-10"
      style={{ backgroundImage: "url('/partners/handshake-bg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="partner-swiper"
        >
          {logos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-40 px-6">
                <Image
                  src={src}
                  alt={`partner-${index}`}
                  width={150}
                  height={80}
                  className="object-contain max-h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
