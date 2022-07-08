import React from 'react';
import lorem from "../img/lorem.png"
import lorem2 from "../img/lorem2.png"
import lorem3 from "../img/lorem3.png"
import lorem4 from "../img/lorem4.png"
import icon from "../img/icon.png";

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="services--general">

                    <div className="services--general__text">

                        <div className="services--general__text--one">
                            <div></div>
                            <h1>services</h1>
                        </div>

                        <p>
                            we are more than developers
                        </p>

                    </div>

                    <div className="services--general__lorem">

                        <div className="services--general__lorem--block">

                            <img src={lorem} alt=""/>
                            <div className="services--general__lorem--block__text">
                                <h1>Lorem</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing
                                    nibh. Ultrices leo nisi purus vel pretium.</p>
                            </div>


                        </div>
                        <div className="services--general__lorem--block">

                            <img src={lorem2} alt=""/>
                            <div className="services--general__lorem--block__text">
                                <h1>Lorem</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing
                                    nibh. Ultrices leo nisi purus vel pretium.</p>
                            </div>


                        </div>
                        <div className="services--general__lorem--block">

                            <img src={lorem3} alt=""/>
                            <div className="services--general__lorem--block__text">
                                <h1>Lorem</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing
                                    nibh. Ultrices leo nisi purus vel pretium.</p>
                            </div>


                        </div>
                        <div className="services--general__lorem--block">

                            <img src={lorem4} alt=""/>
                            <div className="services--general__lorem--block__text">
                                <h1>Lorem</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae adipiscing
                                    nibh. Ultrices leo nisi purus vel pretium.</p>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;