import React from 'react';
import logo from "../../logo.svg";


const Header = () => {
    return (
        <>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div>
            <header
                className="site-navbar js-sticky-header site-navbar-target"
                role="banner"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-xl-2">
                            <h1 className="mb-0 site-logo">
                                <a href="#/" className="h2 mb-0">
                                    <img src={logo} alt="Company Logo" className="logo" />
                                </a>
                            </h1>
                        </div>
                        <div className="col-12 col-md-10 d-none d-xl-block">
                            <nav
                                className="site-navigation position-relative text-right"
                                role="navigation"
                            >
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li>
                                        <a href="#home-section" className="nav-link">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#about-section" className="nav-link">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact-section" className="nav-link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div
                            className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
                            style={{ position: "relative", top: 3 }}
                        >
                            <a href="#/" className="site-menu-toggle js-menu-toggle float-right">
                                <span className="icon-menu h3" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header