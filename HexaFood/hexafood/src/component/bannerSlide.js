import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bannerSlide = () => {
    return (
        <>
            {/* -------Banner Start-------- */}
            <section className="banner">
                <Swiper
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="assets/images/banner-1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/images/banner-2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/images/banner-3.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
                {/* <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="assets/images/banner-1.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/banner-2.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="assets/images/banner-3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div> */}
            </section>
        </>

    )
}

export default bannerSlide