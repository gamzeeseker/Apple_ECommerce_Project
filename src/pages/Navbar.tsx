import React, { Fragment, ReactFragment } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <Fragment>
            {/* <!-- Navbar --> */}
            <nav className="navbar">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/iphone" className="navbar-link">Iphone 12</Link>
                <Link to="/macbook" className="navbar-link">MacBook Air</Link>
                <Link to="/watch" className="navbar-link">Watch</Link>
                <Link to="/airpods" className="navbar-link">AirPods</Link>
            </nav>
            {/* <!-- End of Navbar --> */}
        </Fragment>
    );
}

export default Navbar;