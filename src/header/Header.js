import React from 'react';
import logoSvg from "../img/logo.svg"
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <img className="header--logo--img" src={logoSvg} alt=""/>
                    </div>
                    <nav className="header--nav">
                        <Link to={'/about-us'} className="header--nav--item">ABOUT US</Link>
                        <Link to={'/services'} className="header--nav--item">SERVICES</Link>
                        <Link to={'/portfolio'} className="header--nav--item">PORTFOLIO</Link>
                        <Link to={'/staff'} className="header--nav--item">STAFF</Link>
                        <Link to={'/contact'} className="header--nav--item">CONTACT</Link>
                    </nav>
                    <div className="header--burger-menu">
                        <span className="header--burger-menu--span"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;