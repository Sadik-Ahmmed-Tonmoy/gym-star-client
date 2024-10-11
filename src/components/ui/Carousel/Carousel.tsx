import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { Navigation, Pagination,   } from "swiper/modules";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <Swiper cssMode={true} navigation={true} pagination={true}  modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide className="h-screen">
          <Image
            src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
            className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
            width={50}
            height={50}
            alt="preview image"
          />
        </SwiperSlide>
        
     
      </Swiper>
    </>
  );
}
