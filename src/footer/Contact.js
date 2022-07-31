import React from 'react';
import {BiPhoneCall} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"
import {BsFacebook, BsTwitter} from "react-icons/bs";
import {SiInstagram} from "react-icons/si";
import {FaTelegramPlane} from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact--general">

                    <div className="contact--general__gen">

                        <div className="contact--general__gen--one">

                            <div className="contact--general__gen--one__contact">

                                <div className="contact--general__gen--one__contact--gen">

                                    <div className="contact--general__gen--one__contact--gen__nav">
                                        <div></div>
                                        <h1>Contact</h1>
                                    </div>

                                </div>

                                <div className="contact--general__gen--one__contact--general">

                                    <BiPhoneCall className="contact--general__gen--one__contact--general--phone"/>

                                    <a href="tel:+996704247027">+996704247027</a>

                                </div>

                                <div className="contact--general__gen--one__contact--general">

                                    <AiOutlineMail className="contact--general__gen--one__contact--general--phone"/>

                                    <a href="mailto:youngdevs@mail.com">youngdev’s@mail.com</a>

                                </div>

                            </div>

                            <div className="contact--general__gen--one__icon">

                                <h1>
                                    Social Media
                                </h1>

                                <div className="contact--general__gen--one__icon--gen">

                                    <BsFacebook className="contact-icons"/>
                                    <SiInstagram className="contact-icons"/>
                                    <BsTwitter className="contact-icons"/>
                                    <FaTelegramPlane className="contact-icons"/>

                                </div>

                            </div>

                        </div>

                        <div className="contact--general__gen--two">

                            <div className="contact--general__gen--two__text">
                                <h1>
                                    get consultation
                                </h1>

                                <h4>
                                    Feel free to send us your message
                                </h4>
                            </div>



                            <div className="contact--general__gen--two__gen">

                                <div className="contact--general__gen--two__gen--input-group">
                                    <input type="text" placeholder="Your name..."/>

                                    <input type="email" placeholder="Your email..."/>
                                </div>



                                <div className="contact--general__gen--two__gen__input">
                                    <textarea name="" rows="10" placeholder="Message..."></textarea>
                                </div>

                            </div>



                            <div className="contact--general__gen--two__btn">
                                <button>Submit</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;