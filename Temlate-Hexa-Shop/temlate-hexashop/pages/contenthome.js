import React, { useEffect } from 'react';
import Banner from './banner';
import Explore from './explore'
import Blog from './blog'
import Link from 'next/link';
import data from '../dataHexa'

const home = () => {
    useEffect(() => {
        const productContainer = document.querySelectorAll('.carousel_js')
        const nxtBtn = document.querySelectorAll('.next')
        const preBtn = document.querySelectorAll('.prev')
        productContainer.forEach((item, i) => {
            let dimensition = item.getBoundingClientRect();
            let containerWidth = dimensition.width;
            nxtBtn[i].onclick = () => {
                item.scrollLeft += containerWidth
            }
            preBtn[i].onclick = () => {
                item.scrollLeft -= containerWidth
            }
        })
    }, [])
    return (
        <div>
            <Banner></Banner>
            {/* ***** Men Area Starts ***** */}
            <section className="section" id="men">
                <div className="container">
                    <div className="section-top">
                        <div className="section-heading">
                            <h2>Men's Latest</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="men-container">
                        <div className="men-item-carousel carousel_js">
                            <div className="men-item ">
                                {
                                    data.men.map((person) => {
                                        const { id, name, image, price } = person;
                                        return (
                                            <div className="item" key={id}>
                                                <div className="item-content">
                                                    <div className="hover-content">
                                                        <ul>
                                                            <li>
                                                                {/* <Link href="/singleProduct"> */}
                                                                <a href='/singleProduct'><i className="fa fa-eye" /></a>
                                                                {/* </Link> */}
                                                            </li>
                                                            <li><button><i className="fa fa-star" /></button></li>
                                                            <li><button className="addTocart fa fa-shopping-cart" data-product-id={id} />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <Link href="/singleProduct"> */}
                                                    <a href='/singleProduct'>
                                                        <img src={image} alt="" />
                                                    </a>
                                                    {/* </Link> */}
                                                </div>
                                                <div className="down-content">
                                                    {/* <Link href="/singleProduct"> */}
                                                    <a href='/singleProduct'>
                                                        <h4 className="productName">{name}</h4>
                                                    </a>
                                                    {/* </Link> */}
                                                    <h6>$<span className="priceValue">{price}</span></h6>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="nav-button">
                            <button type="button" className="prev" />
                            <button type="button" className="next" />
                        </div>
                    </div>
                    <div className="more">
                        {/* <Link href="/products"> */}
                        <a href='/products' className="btn btn-more">view more</a>
                        {/* </Link> */}
                    </div>
                </div>
            </section >
            {/* ***** Men Area Ends ***** */}
            {/* ***** Women Area Starts ***** */}
            <section className="section" id="women">
                <div className="container">
                    <div className="section-top">
                        <div className="section-heading">
                            <h2>Women's Latest</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="women-container">
                        <div className="women-item-carousel carousel_js">
                            <div className="women-item ">
                                {
                                    data.women.map((item, index) => {
                                        const { id, name, image, price } = item;
                                        return (
                                            <div className="item" key={id}>
                                                <div className="item-content">
                                                    <div className="hover-content">
                                                        <ul>
                                                            <li>
                                                                {/* <Link href="/singleProduct"> */}
                                                                <a href='/singleProduct'><i className="fa fa-eye" /></a>
                                                                {/* </Link> */}
                                                            </li>
                                                            <li><button><i className="fa fa-star" /></button></li>
                                                            <li><button className="addTocart fa fa-shopping-cart" data-product-id={id} />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <Link href="/singleProduct"> */}
                                                    <a href='/singleProduct'>
                                                        <img src={image} alt="" />
                                                    </a>
                                                    {/* </Link> */}
                                                </div>
                                                <div className="down-content">
                                                    {/* <Link href="/singleProduct"> */}
                                                    <a href='/singleProduct'>
                                                        <h4 className="productName">{name}</h4>
                                                    </a>
                                                    {/* </Link> */}
                                                    <h6>$<span className="priceValue">{price}</span></h6>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="nav-button">
                            <button type="button" className="prev" />
                            <button type="button" className="next" />
                        </div>
                    </div>
                    <div className="more">
                        {/* <Link href="/products"> */}
                        <a href='/products' className="btn btn-more">view more</a>
                        {/* </Link> */}
                    </div>
                </div>
            </section>
            {/* ***** Women Area Ends ***** */}
            {/* ***** Kids Area Starts ***** */}
            <section className="section" id="kids">
                <div className="container">
                    <div className="section-top">
                        <div className="section-heading">
                            <h2>Women's Latest</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="kids-container">
                        <div className="kids-item-carousel carousel_js">
                            <div className="kids-item">
                                {
                                    data.kids.map((item, index) => {
                                        const { id, name, image, price } = item;
                                        return (
                                            <div className="item" key={id}>
                                                <div className="item-content">
                                                    <div className="hover-content">
                                                        <ul>
                                                            <li>
                                                                {/* <Link href="/singleProduct"> */}
                                                                <a href='/singleProduct'><i className="fa fa-eye" /></a>
                                                                {/* </Link> */}
                                                            </li>
                                                            <li><button><i className="fa fa-star" /></button></li>
                                                            <li><button className="addTocart fa fa-shopping-cart" data-product-id={id} />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* <Link href="/singleProduct"> */}
                                                    <a href='/singleProduct'>
                                                        <img src={image} alt="" />
                                                    </a>
                                                    {/* </Link> */}
                                                </div>
                                                <div className="down-content">
                                                    {/* <Link href="/singleProduct"> */}
                                                    <a href='/singleProduct'>
                                                        <h4 className="productName">{name}</h4>
                                                    </a>
                                                    {/* </Link> */}
                                                    <h6>$<span className="priceValue">{price}</span></h6>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="nav-button">
                            <button type="button" className="prev" />
                            <button type="button" className="next" />
                        </div>
                    </div>
                    <div className="more">
                        {/* <Link href="/products"> */}
                        <a href='/products' className="btn btn-more">view more</a>
                        {/* </Link> */}
                    </div>
                </div>
            </section>
            {/* ***** Kids Area Ends ***** */}
            <Explore></Explore>
            <Blog></Blog>
        </div >
    );
}
export default home;