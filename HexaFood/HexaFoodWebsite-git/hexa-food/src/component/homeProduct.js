import React, { useEffect, useRef, useState } from 'react'
import BannerSlide from './bannerSlide'
import Slider from './slider'
import Feedback from './feedback'
import { useGlobalContext } from '../context'
import { Simulate } from 'react-dom/test-utils'


const HomeProduct = () => {
    const { menuProducts, categories, fillterItems, active, getInformation, sizeOption, setSizeOption, formatCash } = useGlobalContext();
    const { scrollHomeProduct } = useGlobalContext();

    const [isHovering, setIsHovering] = useState(false);


    const CLICK_SIZE = useRef(null);
    const [first, setfirst] = useState(null)
    // console.log(first);
    // const check = (e, id) => {
    //     if (e.current.children[id]) {
    //         // console.log(e.current.children[id]);
    //         e.current.children[id].classList = 'text-danger';

    //         setfirst(e.current.children[id]);
    //     } else {
    //         e.current.children[id].className = '';
    //         return;
    //     }
    // }
    const [pr, setpr] = useState(null)

    const check = (pr, size) => {
        setpr(pr.id);
        setSizeOption(size)
    }
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
                                            const { id, title, img, price, size } = productsItem;
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
                                                        <p>{title}</p>
                                                        {
                                                            size != null ? <div>
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
                                                            </div> : ''
                                                        }
                                                    </div>
                                                    <div />
                                                </div>
                                                <h3 className="product-title">{title}</h3>
                                                <span className="price">
                                                    {
                                                        size != null ?
                                                            <span className="price-amount">{formatCash(price)}</span>
                                                            : <span className="price-amount">{formatCash(price)}</span>
                                                    }
                                                </span>

                                                <form action="" className="cart">
                                                    <div className={`option ${size ? 'text-center' : 'd-none'}`}>
                                                        {
                                                            size != null ?
                                                                <div className="option-size" ref={CLICK_SIZE}>
                                                                    {
                                                                        size != null ?
                                                                            size.map((sizeValue, sizeIndex) => {
                                                                                return <div
                                                                                    key={sizeIndex}
                                                                                    onClick={() => check(productsItem, sizeValue)}
                                                                                    className={`
                                                                                    ${pr != null && size != null ? sizeOption === sizeValue && pr === id ? 'text-danger' : '' : ''}
                                                                                    `}
                                                                                >
                                                                                    <span>{sizeValue}</span>
                                                                                </div>
                                                                            })
                                                                            : ''
                                                                    }
                                                                </div>
                                                                : ''
                                                        }
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