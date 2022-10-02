import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const promotion = () => {
    return (
        <>
            {/* -------Banner Start-------- */}
            <section className="banner-promotion">
                <div className="container-lg">
                    <div className="title">
                        <h1>Khuyến mại</h1>
                    </div>
                </div>
            </section>
            {/* -------Content Start-------- */}
            <section className="promotion-content">
                <div className="container-lg">
                    <div className="row">
                        <div className="content-item">
                            <Link to='detailPromotion'>
                                <img src="./assets/images/Artboard-6.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="content-item">
                            <Link to='detailPromotion'>
                                <img src="./assets/images/Artboard-7-copy-2-1.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="content-item">
                            <Link to='detailPromotion'>
                                <img src="./assets/images/Artboard-6.jpg" alt="" />
                            </Link>
                        </div>
                        <div className="content-item">
                            <Link to='detailPromotion'>
                                <img src="./assets/images/Artboard-7-copy-2-1.jpg" alt="" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default promotion