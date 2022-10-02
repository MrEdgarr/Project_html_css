import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';
import {
    Link
} from "react-router-dom";
const Header = () => {
    const { scrollPosition } = useGlobalContext();
    const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext();
    const { isModalOpen, closeModal, openModal } = useGlobalContext();
    const { itemCount, itemPrice, formatCash } = useGlobalContext();
    const { scrollHomeProduct, scrollToHomeProduct } = useGlobalContext();

    return (
        <>
            {/* -------Header Start-------- */}

            <header className="header">
                <div className={`topbar ${ scrollPosition >= 300 ? 'fixed-top' : ''}`}>
                    <div className="container-lg">
                        <div className="row">
                            <div className="col single-image">
                                <Link to='/'>
                                    <img src="assets/images/hexaFood-2.png" alt="" />
                                </Link>
                            </div>
                            <div className="col-6 header-text">
                                <p>Pizza ngon - Giá rẻ - Vận chuyển tận nhà</p>
                            </div>
                            <div className="single-cart"
                                onClick={isSidebarOpen == false ? openSidebar : closeSidebar}
                            >
                                <div className="header-cart">
                                    <div className="icon-cart">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={25}
                                            height={25}
                                            fill="currentColor"
                                            className="bi bi-basket2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                                        </svg>
                                        <p className="badge">{itemCount}</p>
                                    </div>
                                    <div className="cart-detail">
                                        <span>{itemCount} | {formatCash(itemPrice)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hamburger-menu"
                                onClick={isModalOpen == false ? openModal : closeModal}></div>
                        </div>
                    </div>
                </div>
                {/* <div className={`header-menu ${isModalOpen ? 'd-block' : ''}`} > */}
                <div className={`header-menu ${isModalOpen ? 'd-block' : ''} ${scrollPosition >= 300 ? 'fixed-top' : ''}`} >
                    <div className="container-lg">
                        <div className="row">
                            <div className="text-blog d-lg-none">
                                <div className="text">Gọi điện ngay - Ship liền tay (24/7)</div>
                                <div className="mobile-alt"> (024) 36.888.777</div>
                            </div>
                            <ul className="menu">
                                <li className="menu-item active" onClick={() => closeModal()}>
                                    <Link to="/">Trang chủ</Link>
                                </li>
                                <li className="menu-item" onClick={() => scrollToHomeProduct(scrollHomeProduct)}>
                                    <Link to=''>Thực đơn</Link>
                                </li>
                                <li className="menu-item" onClick={() => closeModal()}>
                                    <Link to="/promotion">Khuyến mại</Link>

                                </li>
                                <li className="menu-item" onClick={() => closeModal()}>
                                    <Link to="/policy">Chính sách</Link>

                                </li>
                                <li className="menu-item" onClick={() => closeModal()}>
                                    <Link to="/blog">Blog</Link>

                                </li>
                                <li className="menu-item" onClick={() => closeModal()}>
                                    <Link to="/contact">Liên hệ</Link>
                                </li>
                            </ul>
                            <div className="text-blog">
                                <div className="text">Gọi điện ngay - Ship liền tay (24/7)</div>
                                <div className="mobile-alt"> (123) 45.678.900</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Header