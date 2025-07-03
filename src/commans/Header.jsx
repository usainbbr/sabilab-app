import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';
import Home from "../component/Home";
import About from "../component/About";
import Services from "../component/Services";
import Portfolio from "../component/Portfolio";
import Contact from "../component/Contact";
import Blog from "../component/Blog";
import Blogdetail from "../component/Blogdetail";
import Element from "../component/Element";
import Portfoliodetails from "../component/Portfoliodetails";

export default class Header extends Component{
    render(){
        return(
        <Router>
             <div>
                    <header>
        {/* <!-- Header Start --> */}
        <div class="header-area">
                <div class="main-header  header-sticky">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            {/* <!-- Logo --> */}
                            <div class="col-xl-2 col-lg-2 col-md-1">
                                <div class="logo">
                                    <Link to="/" ><img src="assets/img/logo/logo.png" alt=""/></Link>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-10 col-md-10">
                                <div class="menu-main d-flex align-items-center justify-content-end">
                                    {/* <!-- Main-menu --> */}
                                    <div class="main-menu f-right d-none d-lg-block">
                                        <nav> 
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/about">About</Link></li>
                                                <li><Link to="/service">Services</Link></li>
                                                <li><Link to="/portfolio">Portfolio</Link></li>

                                                <li><Link to="/page">Page</Link>
                                                    <ul class="submenu">
                                                        <li><Link to="/blog">Blog</Link></li>
                                                        <li><Link to="/blog_details">Blog Details</Link></li>
                                                        {/* <li><Link to="/element">Element</Link></li> */}
                                                        <li><Link to="/portfolio_details">Portfolio Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div class="header-right-btn f-right d-none d-xl-block ml-20">
                                        <a href="#" class="btn header-btn">Get Free Consultent</a>
                                    </div>
                                </div>
                            </div>   
                            {/* <!-- Mobile Menu --> */}
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        {/* /* <!-- Header End --> */ }
              </header>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/service" Component={Services} />
                <Route path="/portfolio" Component={Portfolio} />
                <Route path="/contact" Component={Contact} />
                <Route path="/blog" Component={Blog} />
                <Route path="/blog_details" Component={Blogdetail} />
                <Route path="/element" Component={Element} />
                <Route path="/portfolio_details" Component={Portfoliodetails} />

                
              </Routes>
             </div>
         </Router>
        );
    }
}