import React from 'react';
import logofooter from "../img/logofooter.png"
import {AiOutlineMail} from "react-icons/ai"


const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer--general">

                    <div className="footer--general__line"></div>

                    <div className="footer--general__gen">

                        <div className="footer--general__gen--logo">
                            <img src={logofooter} alt=""/>


                            <div>
                                <a href="mailto:youngdevs@mail.com"><AiOutlineMail/> youngdev’s@mail.com</a>
                            </div>

                        </div>


                    </div>

                    <div className="footer--general__line linee"></div>

                    <div className="footer--general__text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Footer;
