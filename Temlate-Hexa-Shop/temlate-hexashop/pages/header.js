import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const header = () => {
    const [iconBars, setIconBars] = useState(false);
    const [iconSubmenu, setIconSubmenu] = useState(false)
    const [iconSearch, setIconSearch] = useState(false)
    const [iconCart, setIconCart] = useState(false)
    const [scrollPosition, setScrollPosition] = useState();


    const togger = () => {
        if (iconBars == true) {
            setIconBars(false)
        } else {
            setIconBars(true)
        }
    }
    const menuChild = () => {
        if (iconSubmenu == true) {
            setIconSubmenu(false)
        } else {
            setIconSubmenu(true)
        }
    }
    const showSearch = () => {
        if (iconSearch == true) {
            setIconSearch(false)
        } else {
            setIconSearch(true)
        }
    }
    const showCart = () => {
        if (iconCart == true) {
            setIconCart(false)
        } else {
            setIconCart(true)
        }
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position) {
            setIconBars(false)
            setIconCart(false)
            setIconSearch(false)
            setIconSubmenu(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar-area ${scrollPosition >= 300 ? "background-header" : ""}`} id="home">
            {/* Start Top Search */}
            <div className={`top-search ${iconSearch == true ? "d-block" : ""}`}>
                <div className="container">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search" /></span>
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-addon" onClick={() => setIconSearch(false)}><i className="fa fa-times" /></span>
                    </div>
                </div>
            </div>
            {/* End Top Search */}
            {/* Start Atribute Navigation */}
            <div className="header-area">
                <div className="container">
                    <div className="attr-nav">
                        <ul>
                            <li className="search" onClick={() => showSearch()}><i className="fa fa-fw fa-search" /></li>
                            <li className="dropdown" onClick={() => showCart()}>
                                <i className="fa fa-fw fa-cart-arrow-down" />
                                <span className="badge">0</span>
                                <ul className={`dropdown-menu cart-list ${iconCart == true ? "d-block" : ""}`}>
                                    <div id="buyItems">
                                        <h4 className="empty">Your shopping cart is empty</h4>
                                    </div>
                                    <li className="total">
                                        <span id="sum-prices" />
                                        <Link href="/listCart">
                                            <a className="btn checkout hidden btn-cart">Cart</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li class="user"><a href="#"><i class="fa fa-fw fa-user"></i></a></li> */}
                        </ul>
                    </div>
                    {/* End Atribute Navigation */}
                    {/* Start Header Navigation */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-togger" onClick={() => togger()}>
                            {/* <i className="fa fa-bars" /> */}
                            {
                                iconBars == true ? <i className="fa fa-xmark" /> : <i className="fa fa-bars" />
                            }
                        </button>
                        {/* <Link href="/"> */}
                        <a href='/' className="navbar-brand">
                            <img src="../assets/images/1.png" alt="" className="logo" />
                        </a>
                        {/* </Link> */}
                    </div>
                    {/* End Header Navigation */}
                    {/* Menu Navigation Start */}
                    <div className={`navbar-menu ${iconBars == true ? "show_menu" : ""}`}>
                        <ul className="navbar-nav">
                            <li><a href="/#home" className="active">Home</a></li>
                            <li><a href="/#men">Men's</a></li>
                            <li><a href="/#women">Women's</a></li>
                            <li><a href="/#kids">Kid's</a></li>
                            <li className="submenu" onClick={() => menuChild()}>
                                <a >Page</a>
                                <ul className={`${iconSubmenu == true ? "in" : ""}`}>
                                    <li><Link href="/about">
                                        <a>About Us</a>
                                    </Link></li>
                                    <li>
                                        {/* <Link href="/products"> */}
                                        <a href='/products'>Products</a>
                                        {/* </Link> */}
                                    </li>
                                    {/* <li><Link href="/singleProduct">
                                        <a >Single Producs</a></Link></li> */}
                                    <li>
                                        <Link href='/contact'>
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="/#explore">Explore</a></li>
                            <li><a href="/#blog">Blog</a></li>
                        </ul>
                    </div>
                    {/* Menu Navigation End */}
                </div>
            </div>
            {/* End Atribute Navigation */}
        </nav>
    )
}

export default header