import React from 'react'
import GoogleMapReact from 'google-map-react';

const contact = () => {
  const defaultProps = {
    center: {
      lat: 21.027763,
      lng: 105.834160
    },
    zoom: 8
  };
  return (
    <div>
      {/* ***** Main Banner Area Start ***** */}
      <div className="page-heading" id="top">
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
      {/* ***** Contact Area Starts ***** */}
      <section className="contact-us">
        <div className="container">
          <div className="contact-row">
            {/* ***** Map Sectioin***** */}
            <div className="map" id="map">

              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals={true}
              />
            </div>
            <div className="contact">
              <div className="section-heading">
                <h2>Say Hello. Don't Be Shy!</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>
              <div className="contact-form">
                <form method="post">
                  <div>
                    <div className="name">
                      <input type="text" id="name" name="name" placeholder="your name" required />
                    </div>
                    <div className="email">
                      <input type="text" id="email" name="email" placeholder="your email" required />
                    </div>
                  </div>
                  <div className="message">
                    <textarea type="text" id="message" name="message" placeholder="your message" required />
                  </div>
                  <div>
                    <button type="submit" id="form-submit" className="main-dark-button">
                      <i className="fa fa-paper-plane" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Contact Area Ends ***** */}
    </div>
  )
}

export default contact