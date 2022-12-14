import React, { Fragment, ReactFragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar"

function Macbook() {
    return (
        <Fragment>
            <Navbar/>
            <section className="section-3 center" id="section-3">
                {/* <!-- Section 3 Heading --> */}
                <h1 className="section-3-heading">MacBook Air</h1>
                {/* <!-- End of Section 3 Heading --> */}

                {/* <!-- Section 3 Content --> */}
                <div className="section-3-content center">
                    {/* <!-- Section 3 Images --> */}
                    <img src="ASSETS/images/MacBook/macbook-screen.png" className="macbook-img-1" />
                    <img src="ASSETS/images/MacBook/macbook-keyboard.png" className="macbook-img-2" />
                    {/* <!-- End of Section 3 Images --> */}

                    {/* <!-- Section 3 Loading --> */}
                    <div className="loading-wrapper">
                        <div className="loading center">
                            <i className="fab fa-apple"></i>
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                    {/* <!-- End of Section 3 Loading --> */}

                    {/* <!-- Section 3 Info --> */}
                    <div className="macbook-info">
                        <h2 className="macbook-info-heading">Light. Speed.</h2>
                        <p className="macbook-price">Starting at $999</p>
                        <button className="macbook-btn">Buy Now</button>
                    </div>
                    {/* <!-- End of Section 3 Info --> */}
                </div>
                {/* <!-- End of Section 3 Content --> */}
            </section>
            <Footer></Footer>
        </Fragment>
    );
}

export default Macbook;