import React, { useEffect } from 'react'
import data from "../dataHexa"
import Link from 'next/link'

const singleProduct = () => {
    useEffect(() => {
        const singleProductView = document.querySelectorAll('.carousel-item img');
        const productSlider = document.querySelector('.product-slider');
        for (let i = 0; i < singleProductView.length; i++) {
            singleProductView[i].onclick = () => {
                let productImg = singleProductView[i].src;
                productSlider.innerHTML = `<img src="${productImg}" alt="card image cap">`
            }
        }
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
            {/* ***** Main Banner Area Start ***** */}
            <div className="page-heading about-page-heading">
                <div className="us-page-heading">
                    <img src="../assets/images/single-product-02.jpg" alt="" />
                    <div className="container">
                        <div className="inner-content">
                            <h2> Single Product Page</h2>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Main Banner Area End ***** */}
            {/* ***** Product Area Starts ***** */}
            <div className="single-product single-product-page section">
                <div className="container">
                    <div className="product-row">
                        <div className="product-details">
                            <div className="single-product-view">
                                <div className="product-row">
                                    <div className="part-img">
                                        <div className="product-slider">
                                            <img src="../assets/images/men-01.jpg" alt="card image cap" />
                                        </div>
                                        <div className="product-row">
                                            <div className="carousel-multi-item">
                                                <div className="carousel-inner carousel_js">
                                                    <div className="carousel-item">
                                                        <img src="../assets/images/men-01.jpg" alt="" />
                                                        <img src="../assets/images/men-02.jpg" alt="" />
                                                        <img src="../assets/images/men-03.jpg" alt="" />
                                                        <img src="../assets/images/men-01.jpg" alt="" />
                                                        <img src="../assets/images/men-02.jpg" alt="" />
                                                        <img src="../assets/images/men-03.jpg" alt="" />
                                                        <img src="../assets/images/men-01.jpg" alt="" />
                                                        <img src="../assets/images/men-02.jpg" alt="" />
                                                        <img src="../assets/images/men-03.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="nav-button">
                                                    <button type="button" className="prev" />
                                                    <button type="button" className="next" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-card">
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <h1>Active Wear</h1>
                                    </li>
                                    <li><span>$120.00</span></li>
                                </ul>
                                <ul className="f-star">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><span>Rating 4.8 | 36 Comments</span></li>
                                </ul>
                                <ul className="select-swap">
                                    <li><label className="btn active">S</label></li>
                                    <li><label className="btn">M</label></li>
                                    <li><label className="btn">L</label></li>
                                    <li><label className="btn">XL</label></li>
                                    <li><label className="btn">XXL</label></li>
                                </ul>
                                <ul className="select-color ">
                                    <li><button className="btn active">White</button></li>
                                    <li><button className="btn">Black</button></li>
                                </ul>
                                <ul className="quantity-area">
                                    <li><input type="button" className="btn" defaultValue="-" /></li>
                                    <li><input type="text" defaultValue={1} size={4} className="badge" /></li>
                                    <li><input type="button" className="btn" defaultValue="+" /></li>
                                </ul>
                                <ul className="wrap-addcart">
                                    <li><a className="btn">Buy now</a></li>
                                    <li><a className="btn">Add To Cart</a></li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Description : </h4>
                                    </li>
                                    <li>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid laborum nesciunt
                                            labore
                                            voluptatum, voluptatibus dicta illum voluptates aspernatur necessitatibus eum
                                            laboriosam
                                            similique quod ullam perspiciatis possimus perferendis voluptatem molestias.</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Special Characteristics : </h4>
                                    </li>
                                    <li>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                    </li>
                                    <li>
                                        <p>Eum numquam corrupti laudantium labore.</p>
                                    </li>
                                    <li>
                                        <p>Aspernatur dolorem eligendi sequi possimus consequatur in obcaecati qui iste alias
                                            soluta asperiores voluptate sit, iusto neque.</p>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <h4>Stogare Instructions : </h4>
                                    </li>
                                    <li>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                    </li>
                                    <li>
                                        <p>Eum numquam corrupti laudantium labore.</p>
                                    </li>
                                    <li>
                                        <p>Aspernatur dolorem eligendi sequi possimus consequatur in obcaecati qui iste alias
                                            soluta asperiores voluptate sit, iusto neque.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Product Area Ends ***** */}
            <section className="section">
                <div className="container">
                    <div className="section-top">
                        <div className="section-heading">
                            <h2>Related products</h2>
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
                                                            <li><Link href="/singleProduct">
                                                                <a><i className="fa fa-eye" /></a>
                                                            </Link></li>
                                                            <li><button><i className="fa fa-star" /></button></li>
                                                            <li><button className="addTocart fa fa-shopping-cart" data-product-id={id} />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/singleProduct">
                                                        <a >
                                                            <img src={image} alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="down-content">
                                                    <Link href="/singleProduct">
                                                        <a>
                                                            <h4 className="productName">{name}</h4>
                                                        </a>
                                                    </Link>
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
                        <Link href="/products">
                            <a className="btn btn-more">view more</a>
                        </Link>
                    </div>
                </div>
            </section>
            {/* ***** Footer Start ***** */}
        </div >
    )
}

export default singleProduct