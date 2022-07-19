import React from 'react';
import MessageRight from "../img/message1.svg"
import MessageLeft from "../img/message2.svg"
import Conductor from "../img/проводник.svg"
import Round from "../img/Round.svg"
import services1 from "../img/services1.svg"
import services2 from "../img/services2.svg"
import services3 from "../img/services3.svg"
import services4 from "../img/services4.svg"

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
                        <div className="services--items--group">
                            <div className="services--items--group--box">
                                <div className="services--items--group--box--img">
                                    <img src={services1} alt=""/>
                                </div>
                                <div className="services--items--group--box--description">
                                    <h3>Ux/Ui design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing </p>
                                </div>
                            </div>

                            <div className="services--items--group--box">
                                <div className="services--items--group--box--img">
                                    <img src={services2} alt=""/>
                                </div>
                                <div className="services--items--group--box--description">
                                    <h3>Website development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing </p>
                                </div>
                            </div>
                        </div>

                        <div className="services--items--group">

                            <div className="services--items--group--box">
                                <div className="services--items--group--box--img">
                                    <img src={services3} alt=""/>
                                </div>
                                <div className="services--items--group--box--description">
                                    <h3>Website development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing </p>
                                </div>
                            </div>

                            <div className="services--items--group--box">
                                <div className="services--items--group--box--img">
                                    <img src={services4} alt=""/>
                                </div>
                                <div className="services--items--group--box--description">
                                    <h3>Development of mobail application</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing </p>
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


