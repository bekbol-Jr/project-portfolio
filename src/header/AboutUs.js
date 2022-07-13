import React from 'react';
import AboutUs1 from "../img/AboutUs-1.png"
import AboutUs2 from "../img/AboutUs-2.png"
import AboutUs3 from "../img/AboutUs-3.png"

const AboutUs = () => {
    return (
        <section id="about-us">
            <div className="container">
                <div className="about-us">

                    <div className="about-us--titles">
                        <div className="about-us--titles--theme">
                            <h1 className="about-us--titles--theme--title">about us</h1>
                            <p className="about-us--titles--theme--subtitle">we are more than developers</p>
                        </div>
                        <div className="about-us--titles--more">
                            <p className="about-us--titles--more--text">View more</p>
                        </div>
                    </div>


                    <div className="about-us--images">
                        <div className="about-us--images--team-work">
                            <img src={AboutUs1} alt=""/>
                            <div className="about-us--images--team-work--titles img-title">
                                <h3>Team work</h3>
                                <p>Commitrd and creative</p>
                            </div>
                        </div>
                        <div className="about-us--images--group">
                            <div className="about-us--images--group--1">
                                <img src={AboutUs2} alt=""/>
                                <div className="about-us--images--group--1--titles">
                                    <h3>Philosophy</h3>
                                    <p>Trust pays off</p>
                                </div>
                            </div>
                            <div className="about-us--images--group--2">
                                <img src={AboutUs3} alt=""/>
                                <div className="about-us--images--group--1--titles">
                                    <h3>Office</h3>
                                    <p>Somewhere on earth</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-us--descriptions">
                      <div className="about-us--descriptions--1">
                          <div className="about-us--descriptions--1--items">
                              <h4>How we work</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa.</p>
                          </div>

                          <div className="about-us--descriptions--1--border"></div>

                          <div className="about-us--descriptions--1--items">
                              <h4>How we work</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa.</p>
                          </div>
                      </div>

                       <div className="about-us--descriptions--2">
                           <div className="about-us--descriptions--2--border"></div>

                           <div className="about-us--descriptions--2--items">
                               <h4>How we work</h4>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa.</p>
                           </div>
                       </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;