import React from 'react';
import bekbol from "../img/bekbol.png"
import eliza from "../img/eliza.png"
import aizhamal from "../img/Aizhamal.svg"
import bakyt from "../img/Bakyt.svg"


const OutTeam = () => {
    return (
        <section id="team">
            <div className="container">
                <div className="team--general">

                    <div className="team--general__text">

                        <div className="team--general__text--one">
                            <div></div>
                            <h1>our team</h1>
                        </div>

                        <p>
                            we are more than developers
                        </p>

                    </div>

                    <div className="team--general__gen">

                        <div className="team--general__gen--block">
                            <div className="team--general__gen--block__img">
                                <img src={bekbol} alt=""/>
                            </div>

                            <div className="team--general__gen--block__text">

                                <h3>
                                    Bekbol Tailakov
                                </h3>
                                <h2>
                                    Front-end Developer
                                </h2>
                            </div>

                        </div>
                        <div className="team--general__gen--block">
                            <div>
                                <img src={aizhamal} alt=""/>
                            </div>

                            <div className="team--general__gen--block__text">
                                <h3>
                                    Aizhamal.Rakhatbek
                                </h3>
                                <h2>
                                    UX/UI Designer
                                </h2>
                            </div>

                        </div>
                        <div className="team--general__gen--block">
                            <div className="team--general__gen--block__img">
                                <img src={eliza} alt=""/>
                            </div>

                            <div className="team--general__gen--block__text">
                                <h3>
                                    Eliza Midinova
                                </h3>
                                <h2>
                                    Front-end Developer
                                </h2>
                            </div>

                        </div>
                        <div className="team--general__gen--block">
                            <div>
                                <img src={bakyt} alt=""/>
                            </div>

                            <div className="team--general__gen--block__text">
                                <h3>
                                    Bakyt Azimzhanov
                                </h3>
                                <h2>
                                    JS Developer
                                </h2>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default OutTeam;