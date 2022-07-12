import React from 'react';
import logofooter from "../img/logofooter.png"


const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer--general">

                    <div className="footer--general__line"></div>

                    <div className="footer--general__gen">

                        <div className="footer--general__gen--logo">
                            <img src={logofooter} alt=""/>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.
                            </p>

                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M20.4 4.2002H3.59999C3.28173 4.2002 2.97651 4.32662 2.75147 4.55167C2.52642 4.77671 2.39999 5.08194 2.39999 5.4002V18.6002C2.39999 18.9185 2.52642 19.2237 2.75147 19.4487C2.97651 19.6738 3.28173 19.8002 3.59999 19.8002H20.4C20.7183 19.8002 21.0235 19.6738 21.2485 19.4487C21.4736 19.2237 21.6 18.9185 21.6 18.6002V5.4002C21.6 5.08194 21.4736 4.77671 21.2485 4.55167C21.0235 4.32662 20.7183 4.2002 20.4 4.2002ZM4.79999 17.4002V6.6002H19.2V17.4002H4.79999Z"
                                          fill="#5C0564"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M21.1776 6.3134L12.7236 13.5134C12.5056 13.699 12.2284 13.8005 11.9421 13.7996C11.6558 13.7987 11.3793 13.6955 11.1624 13.5086L2.8164 6.3086C1.974 5.5826 2.4876 4.2002 3.6 4.2002H20.4C21.516 4.2002 22.0272 5.5898 21.1776 6.3134ZM6.828 6.6002L11.952 11.0198L17.1384 6.6002H6.828Z"
                                          fill="#5C0564"/>
                                </svg>
                                <a href="#">youngdev’s@mail.com</a>
                            </div>

                        </div>

                        <div className="footer--general__gen--menu">
                            <h1>Menu</h1>
                            <div>
                                <a href="#">About us</a>
                                <a href="#">Services</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Staff</a>
                                <a href="#">Tools</a>
                            </div>

                        </div>

                        <div className="footer--general__gen--menu">
                            <h1>Services</h1>

                            <div>
                                <a href="#">Ux/Ui design</a>
                                <a href="#">Website development</a>
                                <a href="#">Development of mobail application</a>
                                <a href="#">Technical support</a>
                            </div>
                        </div>

                        <div className="footer--general__gen--menu">
                            <h1>Resources</h1>

                            <div>
                                <a href="#">Help Center</a>
                                <a href="#">Blog</a>
                                <a href="#">Newsletter</a>
                            </div>
                        </div>

                    </div>

                    <div className="footer--general__line"></div>

                </div>
            </div>
        </section>
    );
};

export default Footer;
