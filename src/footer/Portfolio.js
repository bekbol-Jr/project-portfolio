import React from 'react';
import img1 from "../img/Rectangle 11.png"
import img2 from "../img/Rectangle 12.png"
import img3 from "../img/Rectangle 13.png"
import img4 from "../img/Rectangle 14.png"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="portfolio--general">

                    <div className="portfolio--general__text">

                        <div className="portfolio--general__text--one">
                            <div></div>
                            <h1>portfolio</h1>
                        </div>

                    <p>
                        we are more than developers
                    </p>

                    </div>

                    <div className="portfolio--general__img">

                        <div>
                            <img src={img1} alt=""/>
                            <h3>
                                Hotel ATLANT
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                        </div>

                        <div>
                            <img src={img2} alt=""/>
                            <h3>
                                Restaurant FOOD ZONE
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                        </div>

                        <div>
                            <img src={img3} alt=""/>
                            <h3>
                                Art shcool BE CREATIVE
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                        </div>

                        <div>
                            <img src={img4} alt=""/>
                            <h3>
                                Hotel ATLANT
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Portfolio;

// rsc