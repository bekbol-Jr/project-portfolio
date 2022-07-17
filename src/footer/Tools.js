import React from 'react';
import icon from "../img/tools-1.svg"
import icon2 from "../img/tools-2.svg"
import icon3 from "../img/tools-3.svg"
import icon4 from "../img/tools-4.svg"
import icon5 from "../img/tools-5.svg"
import icon6 from "../img/tools-6.svg"
import icon7 from "../img/tools-7.svg"
import icon8 from "../img/tools-8.svg"
import icon9 from "../img/tools-9.svg"
import icon10 from "../img/tools-10.svg"
import icon11 from "../img/tools-11.svg"
import man from "../img/emoji-man.svg"


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

                            <img className="tools--general__icon--man" src={man} alt=""/>

                        <div className="tools--general__icon--items">

                            <div className="tools--general__icon--items--block">
                                    <img src={icon} alt="" className="tools--general__icon--items--block__img"/>
                                    <h1>
                                        Photoshop
                                    </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                <img src={icon2} alt=""/>
                                <h1>
                                    Figma
                                </h1>
                            </div>


                            <div className="tools--general__icon--items--block">

                                    <img src={icon3} alt=""/>
                                    <h1>
                                        JS
                                    </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                    <img src={icon4} alt=""/>
                                    <h1>
                                        GitHub
                                    </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                    <img src={icon5} alt=""/>
                                    <h1>
                                        CSS
                                    </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                    <img src={icon6} alt=""/>
                                    <h1>
                                        Typescript
                                    </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                    <img src={icon7} alt=""/>
                                    <h1>
                                        Redux
                                    </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                <img src={icon8} alt=""/>
                                <h1>
                                    React
                                </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                    <img src={icon9} alt=""/>
                                    <h1>
                                        HTML
                                    </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                <img src={icon10} alt=""/>
                                <h1>
                                    Sass
                                </h1>
                            </div>

                            <div className="tools--general__icon--items--block">
                                    <img src={icon11} alt="" className="tools--general__icon--items--block__two"/>
                                    <h1>
                                        Java
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