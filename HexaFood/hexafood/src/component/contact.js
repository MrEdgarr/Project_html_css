import React from 'react'

const contact = () => {
    return (
        <>
            {/* -------Banner Start-------- */}
            <section className="banner-promotion">
                <div className="container-lg">
                    <div className="title">
                        <h1>Contact</h1>
                    </div>
                </div>
            </section>
            {/* -------CONTACT Start-------- */}
            <section className="contact">
                <div className="container-lg">
                    <div className="row">
                        <div className="detail">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                            <p>Để đặt bánh pizza, vui lòng liên hệ tổng đài số: 012 34.567.890</p>
                            <p>Để phản ánh chất lượng dịch vụ, vui lòng gọi số: 012 34.567.890</p>
                            <p>Email: hexa@gmail.com</p>
                            <h3>CÁC CƠ SỞ </h3>
                            <div className="address">
                                <div className="row">
                                    <div className="address-item">
                                        <div className="img">
                                            <img src="./assets/images/so_01.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="address-button">
                                            <a href="">
                                                <i className="fa-solid fa-location-arrow" />
                                                Xem trên bản đồ
                                            </a>
                                        </div>
                                    </div>
                                    <div className="address-item">
                                        <div className="img">
                                            <img src="./assets/images/so_02.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="address-button">
                                            <a href="">
                                                <i className="fa-solid fa-location-arrow" />
                                                Xem trên bản đồ
                                            </a>
                                        </div>
                                    </div>
                                    <div className="address-item">
                                        <div className="img">
                                            <img src="./assets/images/so_03.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </p>
                                        </div>
                                        <div className="address-button">
                                            <a href="">
                                                <i className="fa-solid fa-location-arrow" />
                                                Xem trên bản đồ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map" id="map" />
                    </div>
                </div>
            </section>
        </>

    )
}

export default contact