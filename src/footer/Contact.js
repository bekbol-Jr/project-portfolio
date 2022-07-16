import React from 'react';
import {BiPhoneCall} from "react-icons/bi"
import {AiOutlineMail} from "react-icons/ai"

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

                                    <a href="tel:996709346587">+996709346587</a>

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

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17 3.50005C17 3.36745 16.9473 3.24027 16.8536 3.1465C16.7598 3.05273 16.6326 3.00005 16.5 3.00005H14C12.7411 2.93734 11.5086 3.37544 10.5717 4.21863C9.63485 5.06182 9.06978 6.24155 9 7.50005V10.2001H6.5C6.36739 10.2001 6.24021 10.2527 6.14645 10.3465C6.05268 10.4403 6 10.5674 6 10.7001V13.3001C6 13.4327 6.05268 13.5598 6.14645 13.6536C6.24021 13.7474 6.36739 13.8001 6.5 13.8001H9V20.5001C9 20.6327 9.05268 20.7598 9.14645 20.8536C9.24021 20.9474 9.36739 21.0001 9.5 21.0001H12.5C12.6326 21.0001 12.7598 20.9474 12.8536 20.8536C12.9473 20.7598 13 20.6327 13 20.5001V13.8001H15.62C15.7312 13.8017 15.8397 13.7661 15.9285 13.6991C16.0172 13.6321 16.0811 13.5374 16.11 13.4301L16.83 10.8301C16.8499 10.7562 16.8526 10.6787 16.8378 10.6036C16.8231 10.5286 16.7913 10.4579 16.7449 10.397C16.6985 10.3362 16.6388 10.2868 16.5704 10.2526C16.5019 10.2185 16.4265 10.2005 16.35 10.2001H13V7.50005C13.0249 7.25253 13.1411 7.02317 13.326 6.85675C13.5109 6.69033 13.7512 6.59881 14 6.60005H16.5C16.6326 6.60005 16.7598 6.54737 16.8536 6.45361C16.9473 6.35984 17 6.23266 17 6.10005V3.50005Z"
                                            fill="#5C0564"/>
                                    </svg>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3H12Z"
                                            stroke="#5C0564" stroke-width="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z"
                                            stroke="#5C0564" stroke-width="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M17 8.5C17.8284 8.5 18.5 7.82843 18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7C15.5 7.82843 16.1716 8.5 17 8.5Z"
                                            fill="#5C0564"/>
                                    </svg>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.51003 20H8.43003C6.81839 19.9859 5.23006 19.6136 3.78003 18.91C3.5133 18.7847 3.29369 18.5773 3.15333 18.3182C3.01298 18.0591 2.95926 17.7619 3.00003 17.47C3.04437 17.1762 3.18042 16.9039 3.38874 16.692C3.59706 16.4801 3.867 16.3394 4.16003 16.29C5.05864 16.1701 5.92312 15.8672 6.70003 15.4C5.35119 14.3454 4.31278 12.9456 3.69485 11.3488C3.07692 9.75206 2.90248 8.01786 3.19003 6.33002C3.22902 6.06267 3.34399 5.81216 3.52128 5.60828C3.69856 5.4044 3.93069 5.25575 4.19003 5.18002C4.44234 5.10078 4.71238 5.09739 4.9666 5.17028C5.22082 5.24317 5.44803 5.38912 5.62003 5.59002C6.20403 6.3558 6.93792 6.99458 7.77694 7.46739C8.61595 7.94019 9.54249 8.2371 10.5 8.34002C10.5458 7.16187 11.0521 6.04874 11.91 5.24002C12.3384 4.82979 12.8442 4.50893 13.3978 4.29613C13.9515 4.08333 14.542 3.98284 15.1348 4.00052C15.7277 4.01821 16.3111 4.15371 16.8511 4.39913C17.3911 4.64455 17.8768 4.99499 18.28 5.43002C18.3851 5.52289 18.5156 5.58207 18.6547 5.5999C18.7937 5.61773 18.935 5.59339 19.06 5.53002C19.2985 5.41757 19.564 5.37524 19.8255 5.40796C20.0871 5.44069 20.334 5.54713 20.5374 5.71487C20.7407 5.8826 20.8922 6.10471 20.9742 6.35528C21.0561 6.60585 21.065 6.87454 21 7.13002C20.7694 8.08014 20.3324 8.96781 19.72 9.73002C19.5851 12.5748 18.3309 15.2508 16.231 17.1746C14.1311 19.0985 11.3557 20.1141 8.51003 20ZM8.51003 18H8.59003C9.7527 18.04 10.9117 17.8488 12 17.4375C13.0882 17.0262 14.0839 16.4029 14.9295 15.6039C15.775 14.8049 16.4535 13.8459 16.9257 12.7827C17.3978 11.7195 17.6542 10.5731 17.68 9.41002C17.6965 9.09127 17.828 8.7893 18.05 8.56002C18.2939 8.25127 18.5019 7.91578 18.67 7.56002C18.3098 7.56071 17.9534 7.48535 17.6243 7.33888C17.2952 7.19241 17.0007 6.97812 16.76 6.71002C16.5286 6.48057 16.2538 6.2996 15.9516 6.17768C15.6494 6.05577 15.3259 5.99537 15 6.00002C14.6709 5.99151 14.3434 6.04808 14.0362 6.16649C13.729 6.2849 13.4483 6.46282 13.21 6.69002C12.8886 6.99502 12.6529 7.37909 12.5266 7.80379C12.4002 8.22849 12.3876 8.67892 12.49 9.11002L12.75 10.25L11.58 10.33C10.3811 10.4278 9.17529 10.2638 8.04604 9.84938C6.9168 9.43498 5.89111 8.78007 5.04003 7.93002C5.00353 9.24642 5.33283 10.5471 5.99133 11.6876C6.64982 12.828 7.6117 13.7635 8.77003 14.39L9.72003 14.93L9.09003 15.83C8.40872 16.7235 7.47521 17.3923 6.41003 17.75C7.09334 17.9213 7.7956 18.0053 8.50003 18H8.51003Z"
                                            fill="#5C0564"/>
                                    </svg>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.249 15.723"
                                            stroke="#5C0564" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>

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
                                    <textarea name="" rows="10" placeholder="Mesage..."></textarea>
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