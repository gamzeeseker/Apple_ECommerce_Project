import React, { Fragment, ReactFragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Watch() {
    return (
        <Fragment>
           
            <section className="section-4 center" id="section-4">
            <Navbar/>
                {/* <!-- Section 4 Watches --> */}
                <div className="watches center">
             
                    {/* <!-- Watch Bands --> */}
                    <div className="watch-bands center">
                        <img src="ASSETS/images/watches/watch-band-1.jpg" className="watch-band-img" />
                        <img src="ASSETS/images/watches/watch-band-2.jpg" className="watch-band-img" />
                        <img src="ASSETS/images/watches/watch-band-3.jpg" className="watch-band-img" />
                        <img src="ASSETS/images/watches/watch-band-4.jpg" className="watch-band-img" />
                        <img src="ASSETS/images/watches/watch-band-5.jpg" className="watch-band-img" />
                        <img src="ASSETS/images/watches/watch-band-6.jpg" className="watch-band-img" />
                        <img src="ASSETS/images/watches/watch-band-7.jpg" className="watch-band-img" />
                        <img src="ASSETS/images/watches/watch-band-8.jpg" className="watch-band-img" />
                        <img src="ASSETS/images/watches/watch-band-9.jpg" className="watch-band-img" />
                    </div>
                    {/* <!-- End of Watch Bands --> */}

                    {/* <!-- Watch Cases --> */}
                    <div className="watch-cases center">
                        <img src="ASSETS/images/watches/watch-case-1.png" className="watch-case-img" />
                        <img src="ASSETS/images/watches/watch-case-2.png" className="watch-case-img" />
                        <img src="ASSETS/images/watches/watch-case-3.png" className="watch-case-img" />
                        <img src="ASSETS/images/watches/watch-case-4.png" className="watch-case-img" />
                        <img src="ASSETS/images/watches/watch-case-5.png" className="watch-case-img" />
                        <img src="ASSETS/images/watches/watch-case-6.png" className="watch-case-img" />
                        <img src="ASSETS/images/watches/watch-case-7.png" className="watch-case-img" />
                        <img src="ASSETS/images/watches/watch-case-8.png" className="watch-case-img" />
                        <img src="ASSETS/images/watches/watch-case-9.png" className="watch-case-img" />
                    </div>
                    {/* <!-- End of Watch Cases --> */}
                </div>
                {/* <!-- End of Section 4 Watches --> */}

                {/* <!-- Watch Controls --> */}
                <a href="#" className="watch-control watch-top-control center">
                    <i className="fas fa-angle-up"></i>
                </a>
                <a href="#" className="watch-control watch-right-control center">
                    <i className="fas fa-angle-right"></i>
                </a>
                <a href="#" className="watch-control watch-bottom-control center">
                    <i className="fas fa-angle-down"></i>
                </a>
                <a href="#" className="watch-control watch-left-control center">
                    <i className="fas fa-angle-left"></i>
                </a>
                {/* <!-- End of Watch Controls --> */}

                {/* <!-- Watch Button --> */}
                <button className="watch-btn">Buy Now</button>
                {/* <!-- End of Watch Button --> */}
            </section>
            <Footer></Footer>
        </Fragment>
    );
}

export default Watch;