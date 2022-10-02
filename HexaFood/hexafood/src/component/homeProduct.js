import React, { useState } from 'react'
import BannerSlide from './bannerSlide'
import Slider from './slider'
import Feedback from './feedback'
import { useGlobalContext } from '../context'


const HomeProduct = () => {
    const { menuProducts, categories, fillterItems, active, getInformation } = useGlobalContext();
    const { scrollHomeProduct, scrollToSection } = useGlobalContext();

    const [isHovering, setIsHovering] = useState(false);
    return (
        <>
            <BannerSlide />
            <Slider />
            {/* -------Products Start-------- */}
            <section className="home-products" id="home_menu" ref={scrollHomeProduct}>
                <div className="container-lg">
                    <div className="text">
                        <div className="line-text">
                            <div>
                                <span>Thực đơn</span>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="menu-selection">
                            <ul>
                                {
                                    categories.map((menuItem, index) => {
                                        return <li
                                            className={`${active === index ? 'active' : ''}`}
                                            key={index}
                                            onClick={() => fillterItems(menuItem, index)}
                                        >
                                            <a>{menuItem}</a>
                                        </li>
                                    })
                                }
                                {/* <li className="active">
                                    <a href="#">Pizza</a>
                                </li>
                                */}
                            </ul>
                        </div>
                        <div className="menu-display">
                            <div className="menu-content">
                                <ul>
                                    {
                                        menuProducts.map((productsItem) => {
                                            const { id, title, img, price } = productsItem;
                                            return <li
                                                className="product-item"
                                                key={id}
                                            >
                                                <div className="product-img" onMouseLeave={() => setIsHovering(false)} onMouseEnter={() => setIsHovering(true)}>
                                                    <img src={img} alt={title} />
                                                </div>
                                                <div className={`product-hover ${isHovering ? "opacity-100 visible" : ''}`}>
                                                    <div className="product-hover-content">
                                                        <h3>{title}</h3>
                                                        <p>
                                                            <strong>Thành phần </strong>
                                                        </p>
                                                        <p>Thịt bò xay, ngô, sốt BBQ, pho mai. </p>
                                                        <p>
                                                            <strong>Kích cỡ / Giá</strong>
                                                        </p>
                                                        <p>
                                                            <img src="assets/images/icon-P-S.png" alt="" />
                                                            Size S / 20cm / 90.000đ
                                                        </p>
                                                        <p>
                                                            <img src="assets/images/icon-P-M.png" alt="" />
                                                            Size M / 24cm / 120.000đ
                                                        </p>
                                                        <p>
                                                            <img src="assets/images/icon-P-L.png" alt="" />
                                                            Size L / 29cm / 150.000đ
                                                        </p>
                                                    </div>
                                                    <div />
                                                </div>
                                                <h3 className="product-title">{title}</h3>
                                                <span className="price">
                                                    <span className="price-amount">{price}</span>-
                                                    <span className="price-amount">{price}</span>
                                                </span>
                                                <form action="" className="cart">
                                                    <div className="option">
                                                        <div className="row">
                                                            <div className="option-size">
                                                                <div className="size-s">
                                                                    <span>S</span>
                                                                </div>
                                                                <div className="size-m">
                                                                    <span>m</span>
                                                                </div>
                                                                <div className="size-l">
                                                                    <span>l</span>
                                                                </div>
                                                            </div>
                                                            <div className="option-amount">
                                                                <input
                                                                    type="button"
                                                                    className="minus"
                                                                    defaultValue="-"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    className="input-text"
                                                                    defaultValue={1}
                                                                    size={4}
                                                                />
                                                                <input
                                                                    type="button"
                                                                    className="plus"
                                                                    defaultValue="+"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-button">
                                                        <button type="button" className="button" onClick={() => getInformation(productsItem)}>
                                                            Mua hàng
                                                        </button>
                                                    </div>
                                                </form>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Feedback />
        </>

    )
}

export default HomeProduct