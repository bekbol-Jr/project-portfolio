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
                        <a href={"#about-us"} className="header--nav--item">ABOUT US</a>
                        <a href={"#services"} className="header--nav--item">SERVICES</a>
                        <a href={"#portfolio"} className="header--nav--item">PORTFOLIO</a>
                        <a href={"#team"} className="header--nav--item">STAFF</a>
                        <a href={"#contact"} className="header--nav--item">CONTACT</a>
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