import React from 'react'

const about = () => {

    return (
        <>
            {/* ***** Main Banner Area Start ***** */}
            <div className="page-heading about-page-heading" id="top">
                <div className="us-page-heading">
                    <img src="/assets/images/about-us-page-heading.jpg" alt="" />
                    <div className="container">
                        <div className="inner-content">
                            <h2> about our company</h2>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Main Banner Area End ***** */}
            <div>{/* ***** About Area Starts ***** */}
                <div className="about-us">
                    <div className="container">
                        <div className="about-row">
                            <div className="left-image">
                                <img src="/assets/images/about-left-image.jpg" alt="" />
                            </div>
                            <div className="right-content">
                                <h4>About Us &amp; Our Skills</h4>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Aliquam ratione repellat asperiores dolor earum ab laudantium numquam doloremque dignissimos.
                                    Voluptatem sequi itaque quos minima soluta voluptate obcaecati praesentium earum
                                    consectetur?</span>
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum delectus iure
                                        est, a veniam odit commodi sequi repellat harum molestias inventore non accusamus tenetur,
                                        numquam ullam nesciunt iusto quisquam.</p>
                                </div>
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                                    <li><a href="#"><i className="fa-brands fa-vimeo-v" /></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** About Area Ends ***** */}
            </div>
            {/* ***** Services Area Starts ***** */}
            <section className="our-services">
                <div className="container">
                    <div className="about-row">
                        <div className="section-heading">
                            <h2>Our Service</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </div>
                        <div className="service">
                            <div className="service-item">
                                <h4>Synther Vaporware</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi id, fugiat
                                    necessitatibus consequuntur, earum autem unde possimus optio repellat quo, incidunt harum ea
                                    dolores magni numquam vero maxime veritatis.</p>
                                <img src="../assets/images/service-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="service">
                            <div className="service-item">
                                <h4>Synther Vaporware</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi id, fugiat
                                    necessitatibus consequuntur, earum autem unde possimus optio repellat quo, incidunt harum ea
                                    dolores magni numquam vero maxime veritatis.</p>
                                <img src="../assets/images/service-02.jpg" alt="" />
                            </div>
                        </div>
                        <div className="service">
                            <div className="service-item">
                                <h4>Synther Vaporware</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi id, fugiat
                                    necessitatibus consequuntur, earum autem unde possimus optio repellat quo, incidunt harum ea
                                    dolores magni numquam vero maxime veritatis.</p>
                                <img src="../assets/images/service-03.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Services Area Ends ***** */}
        </>
    )
}

export default about