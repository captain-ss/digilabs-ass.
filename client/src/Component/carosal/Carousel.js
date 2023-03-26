import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import Banner from "../../assets/SignInImg/Banner.svg";
import "./carousel.css";

// import required modules
import { EffectCards } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="banner-img" src={Banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src={Banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src={Banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src={Banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src={Banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner-img" src={Banner} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
