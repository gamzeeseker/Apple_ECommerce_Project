import React, { Fragment, ReactFragment } from "react";

function Footer() {
    return (
        <Fragment>
            {/* <!-- Section 6 --> */}
            <section className="section-6 center">
                <div className="section-6-icons">
                    <a href="#section-1" className="icon-link">
                        <img src="ASSETS/images/Icons/home-icon.png" />
                    </a>
                    <a href="#section-2" className="icon-link">
                        <img src="ASSETS/images/Icons/iphone-icon.png" />
                    </a>
                    <a href="#section-3" className="icon-link">
                        <img src="ASSETS/images/Icons/macbook-icon.png" />
                    </a>
                    <a href="#section-4" className="icon-link">
                        <img src="ASSETS/images/Icons/watch-icon.png" />
                    </a>
                    <a href="#section-5" className="icon-link">
                        <img src="ASSETS/images/Icons/airpods-icon.png" />
                    </a>
                </div>
                <p className="copyright">Copyright &copy; CodeAndCreate All Rights Reserved</p>
            </section>
            {/* <!-- End of Section 6 --> */}
        </Fragment>
    );
}

export default Footer;