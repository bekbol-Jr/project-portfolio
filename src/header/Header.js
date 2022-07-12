import React, {useState} from 'react';
import logoSvg from "../img/logo.svg"
import Cancel from "../img/Cancel.svg"
const Header = () => {

    const [burger, setBurger] = useState(false)

    const openBurger = () => {
        setBurger(true)
    }

    const closeBurger = () => {
        setBurger(false)
    }

    return (
        <section id="header">

            <div
                style={{
                    transform: burger? "translateY(0)" : "translateY(-500px)"
                }}
                className="burger-menu-box">
                <nav className="burger-menu-box--nav">
                    <a onClick={closeBurger} href={"#about-us"} className="burger-menu-box--nav--item">ABOUT US</a>
                    <a onClick={closeBurger}  href={"#services"} className="burger-menu-box--nav--item">SERVICES</a>
                    <a onClick={closeBurger} href={"#portfolio"} className="burger-menu-box--nav--item">PORTFOLIO</a>
                    <a onClick={closeBurger} href={"#team"} className="burger-menu-box--nav--item">STAFF</a>
                    <a onClick={closeBurger} href={"#contact"} className="burger-menu-box--nav--item">CONTACT</a>
                    <button
                        onClick={closeBurger}
                        className="burger-menu-box--nav--btn" style={{
                        background: "none",
                        border: "none",
                        marginTop: "10px"
                    }}><img src={Cancel} alt=""/></button>
                </nav>

            </div>

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
                    <div
                        onClick={() => {
                            openBurger()
                        }}
                        className="header--burger-menu">
                        <span className="header--burger-menu--span"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;