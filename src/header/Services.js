import React from 'react';
import MessageRight from "../img/message1.svg"
import MessageLeft from "../img/message2.svg"
import Conductor from "../img/проводник.svg"
import Round from "../img/Round.svg"

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="services">
                    <div className="services--titles">
                        <h1 className="services--titles--title">services</h1>
                        <p className="services--titles--subtitle">we are more than developers</p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={MessageLeft} alt=""/>
                                <img src={Round} alt=""/>
                            </div>
                            <div>
                                <img src={MessageLeft} alt=""/>
                                <img src={Round} alt=""/>
                            </div>
                        </div>
                        <div>
                            <img src={Conductor} alt=""/>
                        </div>
                        <div>
                            <div>
                                <img src={Round} alt=""/>
                                <img src={MessageRight} alt=""/>
                            </div>

                            <div>
                                <img src={Round} alt=""/>
                                <img src={MessageRight} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;