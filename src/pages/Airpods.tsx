import React, { Fragment, ReactFragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Airpods() {
    return (
        <Fragment>
            <Navbar />
            <section className="section-5 center" id="section-5">
                {/* <!-- Section 5 Content --> */}
                <div className="airpods">
                    {/* <!-- Section 5 Heading --> */}
                    <h1 className="section-5-heading">AirPods</h1>
                    {/* <!-- End of Section 5 Heading --> */}

                    {/* <!-- Section 5 Images --> */}
                    <img src="ASSETS/images/AirPods/airpods-1.png" className="airpods-img-1" />
                    <img src="ASSETS/images/AirPods/airpods-2.png" className="airpods-img-2" />
                    {/* <!-- End of Section 5 Images --> */}

                    {/* <!-- Section 5 Buttons --> */}
                    <div className="airpods-buttons">
                        <button className="airpods-btn">Learn More</button>
                        <button className="airpods-btn">Buy</button>
                    </div>
                    {/* <!-- End of Section 5 Buttons --> */}
                </div>
                {/* <!-- End of Section 5 Content --> */}
            </section>

            <Footer></Footer>
        </Fragment>
    );
}

export default Airpods;