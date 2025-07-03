import React, { Component } from "react";

export default class Portfoliodetails extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="slider-area">
                        <div className="slider-height2 d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="hero-cap">
                                            <h2>My Portfolio</h2>
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                                    <li className="breadcrumb-item"><a href="#">My Portfolio</a></li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Section */}
                    <div className="portfolio-details-area section-padding2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="portfolio-img">
                                        <div className="details-img mb-40">
                                            <img src="assets/img/gallery/portfolio.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="details-caption pl-50">
                                        <p>...your text...</p>
                                        <p className="mb-50">...your text...</p>
                                        <h3>How can we help?</h3>
                                        <p>...your text...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info-area w-padding2" data-background="assets/img/gallery/section_bg04.jpg">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-5 col-lg-7">
                                    <div className="contact-caption mb-50">
                                        <h3>If Not Now, When? Let’s Work Together!</h3>
                                        <p>...your text...</p>
                                        <img src="assets/img/gallery/sin.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5">
                                    <form action="#" className="contact-wrapper">
                                        <input type="text" name="name" placeholder="Full Name" />
                                        <input type="email" name="email" placeholder="Email Address" />
                                        <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                        <button className="submit-btn2" type="submit">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
