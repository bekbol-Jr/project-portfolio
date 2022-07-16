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
                    <div className="services--items">
                        <div className="services--items--group1">

                            <div className="services--items--group1--top message" >
                                <div className="services--items--group1--top--description">
                                    <img src={MessageLeft} alt=""/>
                                    <div className="services--items--group1--top--description--title">
                                        <h3>Ux/Ui design</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing </p>
                                    </div>
                                </div>
                                <img src={Round} alt="" className="round"/>
                            </div>

                            <div className="services--items--group1--bottom message">
                                <img src={Round} alt="" className="round"/>
                                <div className="services--items--group1--bottom--description">
                                    <img src={MessageRight} alt=""/>
                                    <div className="services--items--group1--bottom--description--title">
                                        <h3>Website development</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="services--items--conductor ">
                            <img src={Conductor} alt=""/>
                        </div>
                        <div className="services--items--group2">

                            <div className="services--items--group2--top message">
                                <div className="services--items--group2--top--description">
                                    <img src={MessageLeft} alt=""/>
                                    <div className="services--items--group2--top--description--title">
                                        <h3>Technical support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing </p>
                                    </div>
                                </div>
                                <img src={Round} alt="" className="round"/>
                            </div>

                            <div className="services--items--group2--bottom message">
                                <img src={Round} alt="" className="round" />
                                <div className="services--items--group2--bottom--description">
                                    <img src={MessageRight} alt=""/>
                                    <div className="services--items--group2--bottom--description--title">
                                        <h3>Development of mobail application</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;