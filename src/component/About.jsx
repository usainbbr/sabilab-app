import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';
export default class About extends Component{
    render(){

        return(

            <div>

                  <main>

        {/* <!-- Hero Start --> */}
        <div class="slider-area ">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap">
                                <h2>About me</h2>
                                <nav aria-label="breadcrumb ">
                                    <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">About me</a></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End -->
        <!-- About Me Start --> */}
        <div class="about-me pb-top">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="about-me-img mb-30">
                            <img src="assets/img/gallery/aboutme.png" alt="" />
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="about-me-caption">
                            <h2>I Create Products Not Just Art.</h2> 
                            <p class="pb-30">Unlimited rewards. enjoy attractive discounts flexible Payme options global usage. Unlimited rewards. enjoy attracti exible ayment options global usage.</p>
                            <h5>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</h5>
                            <p>Unlimited rewards. enjoy attractive discounts flexible Payme options global usage. Unlimited rewards. enjoy attracti exible ayment options global usage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About Me End -->
        <!-- About Area start --> */}
        <section class="about-area section-paddingt30">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-5">
                        <div class="about-caption mb-50">
                            <h3>Designing With Passion While Exploring The World.</h3>
                            <p class="pera1">Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                            <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="about-caption2">
                            <h3>Any Type Of Query<br /> & Discussion.</h3>
                            <p>Late talk with me</p>
                           <div class="send-cv">
                                <a href="#">hire@colorlib.com</a>
                                <i class="ti-arrow-right"></i>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About Area End -->
        <!-- Want To Work Start --> */}
        <section class="wantToWork-area w-padding2">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-8 col-md-8">
                        <div class="wantToWork-caption wantToWork-caption2">
                            <h2>Dont worry for contact i`m available</h2>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-3">
                        <a href="#" class="btn btn-black f-right">Contact Me Now</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Want To Work End -->
        <!-- client-comments --> */}
        <div class="client-comments section-paddingt30">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-8 col-md-10">
                        {/* <!-- Section Tittle --> */}
                        <div class="section-tittle mb-70">
                            <h2>Some Possitive Feedback  That Encourage Us</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- latest-blog-area start --> */}
            <div class="latest-blog-area">
                <div class="container">
                    <div class="custom-row">
                        <div class="blog-active">
                            {/* <!-- single-items --> */}
                            <div class="col-xl-4">
                                <div class="blog-wrapper">
                                    <div class="blog-inner">
                                    <div class="blog-top">
                                        <div class="person-img">
                                            <img src="assets/img/gallery/blog1.png" alt="" />
                                        </div>
                                        <div class="comment-person">
                                            <h2>Bradley Erickson</h2>   
                                            <span>UI/UX Designer</span>
                                        </div>
                                    </div>
                                        <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-items --> */}
                            <div class="col-xl-4">
                                <div class="blog-wrapper">
                                    <div class="blog-inner">
                                    <div class="blog-top">
                                            <div class="person-img">
                                                <img src="assets/img/gallery/blog2.png" alt="" />
                                            </div>
                                            <div class="comment-person">
                                                <h2>Bradley Erickson</h2>   
                                                <span>UI/UX Designer</span>
                                            </div>
                                    </div>
                                        <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-items --> */}
                            <div class="col-xl-4">
                                <div class="blog-wrapper">
                                    <div class="blog-inner">
                                    <div class="blog-top">
                                            <div class="person-img">
                                                <img src="assets/img/gallery/blog3.png" alt="" />
                                            </div>
                                            <div class="comment-person">
                                                <h2>Bradley Erickson</h2>   
                                                <span>UI/UX Designer</span>
                                            </div>
                                    </div>
                                        <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-items --> */}
                            <div class="col-xl-4">
                                <div class="blog-wrapper">
                                    <div class="blog-inner">
                                    <div class="blog-top">
                                            <div class="person-img">
                                                <img src="assets/img/gallery/blog2.png" alt="" />
                                            </div>
                                            <div class="comment-person">
                                                <h2>Bradley Erickson</h2>   
                                                <span>UI/UX Designer</span>
                                            </div>
                                    </div>
                                        <p>Consectetur adipisicing elit, seddosdoe eiusmod tempor incididunt utore etstes dolore magna aliqua. Ut imminim restai veniam, quis nostrud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
            {/* <!-- End latest-blog-area --> */}
        </div>
        {/* <!-- Brand Area Start --> */}
        <div class="brand-area pb-bottom">
            <div class="container">
                <div class="brand-active brand-border pt-50 pb-40">
                    <div class="single-brand">
                        <img src="assets/img/gallery/brand1.png" alt="" />
                    </div>
                    <div class="single-brand">
                        <img src="assets/img/gallery/brand2.png" alt="" />
                    </div>
                    <div class="single-brand">
                        <img src="assets/img/gallery/brand3.png" alt="" />
                    </div>
                    <div class="single-brand">
                        <img src="assets/img/gallery/brand4.png" alt="" />
                    </div>
                    <div class="single-brand">
                        <img src="assets/img/gallery/brand2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Brand Area End -->
        <!-- Contact Info Start --> */}
        <div class="contact-info-area w-padding2" data-background="assets/img/gallery/section_bg04.jpg">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-xl-5 col-lg-7">
                      <div class="contact-caption mb-50">
                            <h3>If Not Now, When? Let’s Work Together!</h3>
                            <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
                            <img src="assets/img/gallery/sin.png" alt="" />
                      </div>
                    </div>
                    <div class="col-xl-5 col-lg-5">
                        <form action="#" class="contact-wrapper">
                            <input type="text" name="name" placeholder="Full Name" />
                            <input type="email" name="email" placeholder="Email Address" />
                            <textarea name="message" id="message" placeholder="Your Message"></textarea>
                            <button class="submit-btn2" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact Info End --> */}

    </main>

            </div>
        );
    }
}