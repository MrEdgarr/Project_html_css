import React from 'react'

const listCart = () => {
  return (
    <div>
      {/* ***** Main Banner Area Start ***** */}
      <div className="page-heading about-page-heading" id="top">
        <div className="us-page-heading">
          <img src="../assets/images/single-product-02.jpg" alt="" />
          <div className="container">
            <div className="inner-content">
              <h2>list of products</h2>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Main Banner Area End ***** */}
      {/* shopping cart list */}
      <section className="layout-cart">
        <div className="cart-detail">
          <div className="container">
            <div className="content-cart">
              <div className="contentCart-detail">
                <div className="main-content-cart">
                  <form  method="post">
                    <div className="line-item-container">
                      <div className="image">
                        <div className="product-image">
                          <img src="../assets/images/men-01.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <h3><a href="single-product.html">Classic Sping</a></h3>
                        <span>$120.00</span>
                        <span>XXL / white</span>
                        <ul className="quantity-area">
                          <li><input type="button" className="btn" defaultValue="-" /></li>
                          <li><input type="text" defaultValue={1} size={4} className="badge" /></li>
                          <li><input type="button" className="btn" defaultValue="+" /></li>
                        </ul>
                        <p className="price">
                          <span className="line-item-total">$120.00</span>
                        </p>
                      </div>
                      <div className="remove">
                        <i className="fa fa-xmark " />
                      </div>
                    </div>
                    <div className="line-item-container">
                      <div className="image">
                        <div className="product-image">
                          <img src="../assets/images/men-01.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <h3><a href="single-product.html">Classic Sping</a></h3>
                        <span>$120.00</span>
                        <span>XXL / white</span>
                        <ul className="quantity-area">
                          <li><input type="button" className="btn" defaultValue="-" /></li>
                          <li><input type="text" defaultValue={1} size={4} className="badge" /></li>
                          <li><input type="button" className="btn" defaultValue="+" /></li>
                        </ul>
                        <p className="price">
                          <span className="line-item-total">$120.00</span>
                        </p>
                      </div>
                      <div className="remove">
                        <i className="fa fa-xmark " />
                      </div>
                    </div>
                    <div className="line-item-container">
                      <div className="image">
                        <div className="product-image">
                          <img src="../assets/images/men-01.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <h3><a href="single-product.html">Classic Sping</a></h3>
                        <span>$120.00</span>
                        <span>XXL / white</span>
                        <ul className="quantity-area">
                          <li><input type="button" className="btn" defaultValue="-" /></li>
                          <li><input type="text" defaultValue={1} size={4} className="badge" /></li>
                          <li><input type="button" className="btn" defaultValue="+" /></li>
                        </ul>
                        <p className="price">
                          <span className="line-item-total">$120.00</span>
                        </p>
                      </div>
                      <div className="remove">
                        <i className="fa fa-xmark " />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="sidebarCart-sticky">
                <div className="sidebox-order">
                  <div className="sidebox-order-inner">
                    <div className="sidebox-order_title">
                      <h3>Information line</h3>
                    </div>
                    <div className="sidebox-order_total">
                      <p>Total
                        <span className="total-price">$360.00</span>
                      </p>
                    </div>
                    <div className="sidebox-order_action">
                      <a className="btn">PAY</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default listCart