import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Banner.css";

import { EffectFade, Pagination, Navigation, Autoplay, } from "swiper";

const Banner = () => {
    const images = <>
        <SwiperSlide>
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                </div>
            </div>
        </SwiperSlide>
    </>
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={"fade"}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {images}
                {images}
                {images}
                {images}
                {images}

            </Swiper>

            <div class="m-5">
                <div class="flex flex-row">
                    <div class="w-40 p-2 bg-orange-300"><span class="">&nbsp;Hot News</span></div>
                    <div class="bg-slate-200">
                        <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <a href="#">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a> <span class="dot"></span> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a> <span class="dot"></span> <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a>
                        </marquee>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Banner;