import React, { Component } from 'react';

class explore extends Component {
    render() {
        return (
            <div>
                {/* ***** Explore Area Starts ***** */}
                <section className="section" id="explore">
                    <div className="container">
                        <div className="social-row">
                            <div className="left-content">
                                <h2>Explore Our Products</h2>
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Non minima ad dicta dolore, vero quidem numquam sunt temporibus dolorum distinctio dolores,
                                    illum laborum natus quae nulla cupiditate soluta aliquam voluptate.</span>
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Ullam saepe consequuntur aspernatur quia non, ea tenetur voluptate provident dolorem eaque
                                        accusamus quidem rem iusto,
                                        voluptatibus aliquam quae error, repellat adipisci?</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Fugiat eum doloremque reiciendis nam. Voluptatibus, delectus aliquid.
                                    Facilis ab similique laudantium illum necessitatibus magni non a quas aperiam. Ipsa, ad dolorum.
                                </p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Id voluptatibus laboriosam aperiam non corporis natus praesentium at aspernatur nihil, molestiae
                                    sed cumque, inventore nam,
                                    impedit minima placeat neque eum consequuntur.</p>
                                <div className="main-border-button">
                                    <a href="products.html" className="btn">Discover More</a>
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="right-content__row">
                                    <div className="leather">
                                        <div className="leather-text">
                                            <h4>Laether Bags</h4>
                                            <span>Latest Collection</span>
                                        </div>
                                    </div>
                                    <div className="first-image">
                                        <img src="assets/images/explore-image-01.jpg" alt="" />
                                    </div>
                                    <div className="second-image">
                                        <img src="assets/images/explore-image-02.jpg" alt="" />
                                    </div>
                                    <div className="types">
                                        <div className="types-text">
                                            <h4>Different Types</h4>
                                            <span>Over 304 Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Explore Area Ends ***** */}
            </div>
        );
    }
}

export default explore;