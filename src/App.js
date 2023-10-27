import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './reset.css';
import "./App.css"
import { Pagination, Mousewheel } from 'swiper/modules';

import Page1 from "./10_Mainpage/sub/Page1"
import Page2 from "./10_Mainpage/sub/Page2"
import Interest from "./20_Interest/Interset"
import Roadmap from './30_Roadmap/Roadmap';
import Tks from './40_Tks/Tks';
import Card from './60_Card/Card';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";

import Stroke from './50_Stroke/Stroke';

AOS.init();

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  }
  return (
    <>
      <Swiper
        mousewheel={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,

        }}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"

      >
        {/* <SwiperSlide ><Card /></SwiperSlide> */}
        <SwiperSlide className="swiperSlide"><Page1 front_img='../00_Asset/basketball.png' back_img="" /></SwiperSlide>
        <SwiperSlide ><Page2 activeIndex={activeIndex} /></SwiperSlide>
        <SwiperSlide><Interest activeIndex={activeIndex} /></SwiperSlide>
        <SwiperSlide><Roadmap activeIndex={activeIndex} /></SwiperSlide>
        <SwiperSlide><Tks activeIndex={activeIndex} /></SwiperSlide>

      </Swiper>
    </>
  );
}
