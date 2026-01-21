import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductImagesSlider({ images, onSelect }) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      breakpoints={{
        0: { slidesPerView: 2 },
        500: {slidesPerView: 3},
        640: { slidesPerView: 4},
        // 1024: { slidesPerView: 5 },
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt="product thumbnail"
            onClick={() => onSelect(src)}
            className="
              cursor-pointer
              rounded-lg
              border
              border-gray-200
              hover:border-green-500
              transition
              object-cover
              w-full
              h-20
            "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
