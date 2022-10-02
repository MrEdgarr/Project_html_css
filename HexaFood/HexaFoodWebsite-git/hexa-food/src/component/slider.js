import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Slider = () => {
    return (
        <>
            {/* -------Slider Start-------- */}
            <section className="slider">
                <div className="container-lg slider-container">
                    <div className="row">
                        <div className="col-2 text">
                            <p>Khách hàng Vừa đặt</p>
                        </div>
                        <div className="col-10 ">
                            <Swiper
                                slidesPerView={2}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        spaceBetween: 50,
                                    },
                                }}
                                spaceBetween={30}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="content-image">
                                        <img src="assets/images/giphy44x44.gif" alt="" />
                                    </div>
                                    <div className="box-right">
                                        <p>A. Tom - (30p truoc)</p>
                                        <span>1 Banh = 120.00 $</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-image">
                                        <img src="assets/images/giphy44x44.gif" alt="" />
                                    </div>
                                    <div className="box-right">
                                        <p>A. Tom - (30p truoc)</p>
                                        <span>1 Banh = 120.00 $</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-image">
                                        <img src="assets/images/giphy44x44.gif" alt="" />
                                    </div>
                                    <div className="box-right">
                                        <p>A. Tom - (30p truoc)</p>
                                        <span>1 Banh = 120.00 $</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-image">
                                        <img src="assets/images/giphy44x44.gif" alt="" />
                                    </div>
                                    <div className="box-right">
                                        <p>A. Tom - (30p truoc)</p>
                                        <span>1 Banh = 120.00 $</span>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="content-image">
                                        <img src="assets/images/giphy44x44.gif" alt="" />
                                    </div>
                                    <div className="box-right">
                                        <p>A. Tom - (30p truoc)</p>
                                        <span>1 Banh = 120.00 $</span>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Slider