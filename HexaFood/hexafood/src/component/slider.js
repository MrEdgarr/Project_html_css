import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useGlobalContext } from '../context';


const Slider = () => {
    const { isWidth } = useGlobalContext();
    const [slidePerView, setSlidePerView] = useState(4)

    
    const checkWidth = () => {
        if (isWidth <= 992) {
            setSlidePerView(2)
        } else {
            setSlidePerView(4)
        }
    }
    useEffect(() => {
        checkWidth();
    }, [isWidth])

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
                                slidesPerView={slidePerView}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
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
                            {/* <div className="swiper mySlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="content-image">
                                            <img src="assets/images/giphy44x44.gif" alt="" />
                                        </div>
                                        <div className="box-right">
                                            <p>A. Tom - (30p truoc)</p>
                                            <span>1 Banh = 120.00 $</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="content-image">
                                            <img src="assets/images/giphy44x44.gif" alt="" />
                                        </div>
                                        <div className="box-right">
                                            <p>A. Tom - (30p truoc)</p>
                                            <span>1 Banh = 120.00 $</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="content-image">
                                            <img src="assets/images/giphy44x44.gif" alt="" />
                                        </div>
                                        <div className="box-right">
                                            <p>A. Tom - (30p truoc)</p>
                                            <span>1 Banh = 120.00 $</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="content-image">
                                            <img src="assets/images/giphy44x44.gif" alt="" />
                                        </div>
                                        <div className="box-right">
                                            <p>A. Tom - (30p truoc)</p>
                                            <span>1 Banh = 120.00 $</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="content-image">
                                            <img src="assets/images/giphy44x44.gif" alt="" />
                                        </div>
                                        <div className="box-right">
                                            <p>A. Tom - (30p truoc)</p>
                                            <span>1 Banh = 120.00 $</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="content-image">
                                            <img src="assets/images/giphy44x44.gif" alt="" />
                                        </div>
                                        <div className="box-right">
                                            <p>A. Tom - (30p truoc)</p>
                                            <span>1 Banh = 120.00 $</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Slider