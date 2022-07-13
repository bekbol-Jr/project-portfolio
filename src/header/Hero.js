import React from 'react';
import HeroSvg from "../img/emoji.svg"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--items">
                        <h1 className="hero--items--title">WE ARE SMART AND CREATIVE</h1>
                        <h1 className="hero--items--subtitle">YOUNG DEVELOPERS</h1>
                        <p className="hero--items--description">THE CES 2020 IS OUTFITTED WITH THE MOST ADVANCED&CONFIGURABLE SENSOR YET, THE ALL-NEW 82000PI4G LASER SEMSOR. YOU ALWAYS HIT TARGETS EXACTLY WHERE YOU NEED TO.</p>
                        <button className="hero--items--btn">Get consultation</button>
                    </div>
                    <div className="hero--img">
                        <img src={HeroSvg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;