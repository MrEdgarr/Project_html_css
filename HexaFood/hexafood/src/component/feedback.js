import React, { useEffect, useState } from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useGlobalContext } from '../context';
const Feedback = () => {
    const { isWidth } = useGlobalContext();
    const [slidePerView, setSlidePerView] = useState(2)

    // console.log(slidePerView);
    const checkWidth = () => {
        if (isWidth <= 992) {
            setSlidePerView(1)
        } else {
            setSlidePerView(2)
        }
    }
    useEffect(() => {
        checkWidth();
    }, [isWidth])
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
                        </Swiper>
                        {/* <div className="swiper-container myFeedback">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
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
                                </div>
                                <div className="swiper-slide">
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
                                </div>
                                <div className="swiper-slide">
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
                                </div>
                                <div className="swiper-slide">
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
                                </div>
                                <div className="swiper-slide">
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
                                </div>
                                <div className="swiper-slide">
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
                                </div>
                                <div className="swiper-slide">
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
                                </div>
                                <div className="swiper-slide">
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
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>

    )
}

export default Feedback