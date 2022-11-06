import React, { Fragment, ReactFragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Iphone() {
    return (
        <Fragment>
            <Navbar></Navbar>
            <section className="section-2" id="section-2">
                {/* <!-- Section 2 Heading --> */}
                <h1 className="section-2-heading">iPhone 12</h1>
                {/* <!-- End of Section 2 Heading --> */}

                {/* <!-- Section 2 Images --> */}
                <div className="iphones">
                    <img src="ASSETS/images/iPhones/iphones-1-img.png" className="iphone-img-1" />
                    <img src="ASSETS/images/iPhones/iphones-2-img.png" className="iphone-img-2" />
                </div>
                {/* <!-- End of Section 2 Images --> */}

                {/* <!-- Section 2 Buttons --> */}
                <div className="iphone-btns">
                    <a href="#" className="iphone-btn center"><span>Learn More</span></a>
                    <a href="#" className="iphone-btn center"><span>Shop</span></a>
                </div>
                {/* <!-- End of Section 2 Buttons --> */}
            </section>
            <Footer></Footer>
        </Fragment>
    );
}

export default Iphone;