import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Slider = ({ images }) => {
  return (
    <div className="block md:hidden w-full h-[28.125rem]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images?.map((image) => (
          <SwiperSlide
            key={image._id}
            className="flex justify-center items-center"
          >
            <Image src={image.src} alt={image.alt} width={150} height={150} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
