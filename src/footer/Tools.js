import React from 'react';
import icon from "../img/icon.png"
import icon2 from "../img/icon2.png"
import icon3 from "../img/icon3.png"
import icon4 from "../img/icon4.png"
import icon5 from "../img/icon5.png"
import icon6 from "../img/icon6.png"
import icon7 from "../img/icon7.png"
import icon8 from "../img/icon8.png"
import icon9 from "../img/icon9.png"
import icon10 from "../img/icon10.png"
import icon11 from "../img/icon11.png"


const Tools = () => {
    return (
        <section id="tools">
            <div className="container">
                <div className="tools--general">

                    <div className="tools--general__text">

                        <div className="tools--general__text--one">
                            <div></div>
                            <h1>tools</h1>
                        </div>

                    </div>

                    <div className="tools--general__icon">

                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon} alt=""/>
                                <h1>
                                    Figma
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block ">
                            <div>
                                <img src={icon2} alt="" className="tools--general__icon--block__img"/>
                                <h1>
                                    Photoshop
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon3} alt=""/>
                                <h1>
                                    React
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon4} alt=""/>
                                <h1>
                                    Sass
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon5} alt=""/>
                                <h1>
                                    Redux
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon6} alt=""/>
                                <h1>
                                    GitHub
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon7} alt=""/>
                                <h1>
                                    Typescript
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon8} alt=""/>
                                <h1>
                                    HTML
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon9} alt=""/>
                                <h1>
                                    CSS
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon10} alt="" className="tools--general__icon--block__two"/>
                                <h1>
                                    Java
                                </h1>
                            </div>

                        </div>
                        <div className="tools--general__icon--block">
                            <div>
                                <img src={icon11} alt=""/>
                                <h1>
                                    JS
                                </h1>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Tools;