import React, { useEffect, useState } from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Feedback = () => {
    return (
        <>
            {/* -------Customer's feedback Start-------- */}
            <section className="feedback">
                <div className="container-lg">
                    <div className="text">
                        <h2 className="title">Phản hồi của khách hàng</h2>
                    </div>
                    <div className="customer-feedback">
                        <Swiper
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                            }}
                            spaceBetween={30}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="feedback-item">
                                    <div className="feedback-image">
                                        <img src="./assets/images/feedback-1.jpg" alt="" />
                                    </div>
                                    <div className="feedback-info">
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Illo voluptatem cumque repellat natus omnis magnam
                                                pariatur eum, officia maxime perferendis est optio quas.
                                                Nulla libero molestias laudantium, ut totam neque?
                                            </p>
                                        </div>
                                        <div className="name">
                                            <p>Nguyen Van A</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="feedback-item">
                                    <div className="feedback-image">
                                        <img src="./assets/images/feedback-2.jpg" alt="" />
                                    </div>
                                    <div className="feedback-info">
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Illo voluptatem cumque repellat natus omnis magnam
                                                pariatur eum, officia maxime perferendis est optio quas.
                                                Nulla libero molestias laudantium, ut totam neque?
                                            </p>
                                        </div>
                                        <div className="name">
                                            <p>Nguyen Van A</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="feedback-item">
                                    <div className="feedback-image">
                                        <img src="./assets/images/feedback-3.jpg" alt="" />
                                    </div>
                                    <div className="feedback-info">
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Illo voluptatem cumque repellat natus omnis magnam
                                                pariatur eum, officia maxime perferendis est optio quas.
                                                Nulla libero molestias laudantium, ut totam neque?
                                            </p>
                                        </div>
                                        <div className="name">
                                            <p>Nguyen Van A</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="feedback-item">
                                    <div className="feedback-image">
                                        <img src="./assets/images/feedback-4.jpg" alt="" />
                                    </div>
                                    <div className="feedback-info">
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Illo voluptatem cumque repellat natus omnis magnam
                                                pariatur eum, officia maxime perferendis est optio quas.
                                                Nulla libero molestias laudantium, ut totam neque?
                                            </p>
                                        </div>
                                        <div className="name">
                                            <p>Nguyen Van A</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="feedback-item">
                                    <div className="feedback-image">
                                        <img src="./assets/images/feedback-1.jpg" alt="" />
                                    </div>
                                    <div className="feedback-info">
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Illo voluptatem cumque repellat natus omnis magnam
                                                pariatur eum, officia maxime perferendis est optio quas.
                                                Nulla libero molestias laudantium, ut totam neque?
                                            </p>
                                        </div>
                                        <div className="name">
                                            <p>Nguyen Van A</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="feedback-item">
                                    <div className="feedback-image">
                                        <img src="./assets/images/feedback-2.jpg" alt="" />
                                    </div>
                                    <div className="feedback-info">
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Illo voluptatem cumque repellat natus omnis magnam
                                                pariatur eum, officia maxime perferendis est optio quas.
                                                Nulla libero molestias laudantium, ut totam neque?
                                            </p>
                                        </div>
                                        <div className="name">
                                            <p>Nguyen Van A</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Feedback