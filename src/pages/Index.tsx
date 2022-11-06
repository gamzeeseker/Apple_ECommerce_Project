import React, { Fragment, ReactFragment } from "react";
import Airpods from "./Airpods";
import Footer from "./Footer";
import Iphone from "./Iphone";
import Macbook from "./Macbook";
import Navbar from "./Navbar";
import Watch from "./Watch";

function Index() {
    return (
        <Fragment>
            <div className="container">
                <section className="section-1" id="section-1">
                    {/* navbar start */}
                    <Navbar />
                    {/* navbar end */}
                    {/* <!-- Logo --> */}
                    <a href="#" className="logo">
                        <i className="fab fa-apple"></i>
                    </a>
                    {/* <!--End of Logo --> */}

                    {/* <!-- Cube --> */}
                    <div className="cube-wrapper">
                        <div className="cube">
                            <div className="front-side">
                                <img src="ASSETS/images/iphone.png" />
                            </div>
                            <div className="back-side center">
                                <i className="fab fa-apple"></i>
                            </div>
                        </div>

                        {/* <!-- Controls --> */}
                        <div className="controls">
                            <a href="#" className="top-x-control">
                                <i className="fas fa-arrow-up "></i>
                            </a>
                            <a href="#" className="bottom-x-control">
                                <i className="fas fa-arrow-down "></i>
                            </a>
                            <a href="#" className="left-y-control">
                                <i className="fas fa-arrow-left "></i>
                            </a>
                            <a href="#" className="right-y-control">
                                <i className="fas fa-arrow-right "></i>
                            </a>
                            <a href="#" className="top-z-control">
                                <i className="fas fa-arrow-down "></i>
                            </a>
                            <a href="#" className="bottom-z-control">
                                <i className="fas fa-arrow-up "></i>
                            </a>
                        </div>
                        {/* <!-- End of Controls --> */}
                    </div>
                    {/* <!-- End of Cube --> */}

                    {/* <!-- Banner --> */}
                    <div className="section-1-banner center">
                        <h1>&#8592; Best Gift</h1>
                        <p>"Creativity is just connecting things."</p>
                        <span> - Steve Jobs</span>
                        <button type="button">Buy Now</button>
                    </div>
                    {/* <!-- End of Banner --> */}

                    {/* <!-- Slideshow --> */}
                    <div className="slideshow"></div>
                    {/* <!-- End of Slideshow --> */}
                </section>
                <Footer></Footer>
            </div>
            <script src="ASSETS/script.js"></script>
        </Fragment>
    );
}

export default Index;