import React from 'react'
import Link from 'next/link'
import data from '../dataHexa'

const products = () => {
  return (
    <div>
      {/* ***** Main Banner Area Start ***** */}
      <div className="page-heading product-page-heading" id="top">
        <div className="us-page-heading">
          <img src="../assets/images/products-page-heading.jpg" alt="" />
          <div className="container">
            <div className="inner-content">
              <h2> Check Our Products</h2>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Main Banner Area End ***** */}
      {/* ***** Products Area Starts ***** */}
      <section className="section products">
        <div className="container">
          <div className="section-heading">
            <h2>Our Latest Products</h2>
            <span>Check out all of our products.</span>
          </div>
        </div>
        <div className="container">
          <div className="product-item">
            {
              data.men.map((value, index) => {
                const { id, image, name, price } = value;
                return (
                  <div className="item" key={index}>
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

          <div className="pagination">
            <ul>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </section>
      {/* ***** Products Area Ends ***** */}

    </div>
  )
}

export default products