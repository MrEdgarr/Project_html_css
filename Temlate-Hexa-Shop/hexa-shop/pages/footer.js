import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <div>
                {/* ***** Footer Start ***** */}
                <footer>
                    <div className="container">
                        <div className="main-footer">
                            <div className="footer-row">
                                <div className="footer-col">
                                    <div className="first-item">
                                        <div className="logo">
                                            <img src="../assets/images/2.png" alt="hexashop" />
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a>
                                            </li>
                                            <li>
                                                <a href="#">hexa@compay.com</a>
                                            </li>
                                            <li>
                                                <a href="#">010-020-0340</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col">
                                    <h4>Shopping &amp; Categories</h4>
                                    <ul>
                                        <li><a href="#">Men's Shopping</a></li>
                                        <li><a href="#">Women’s's Shopping</a></li>
                                        <li><a href="#">Kid's Shopping</a></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><a href="#">Homepage</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="footer-col">
                                    <h4>Help &amp; Information</h4>
                                    <ul>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">FAQ's</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Tracking ID</a></li>
                                    </ul>
                                </div>
                                <div className="under-footer">
                                    <p>Copyright © 2022.
                                    </p>
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
                </footer>
            </div>
        );
    }
}

export default footer;