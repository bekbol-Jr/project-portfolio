import React from 'react';
import {motion} from "framer-motion";
import services1 from "../img/services1.svg"
import services2 from "../img/services2.svg"
import services3 from "../img/services3.svg"
import services4 from "../img/services4.svg"


const textAnimations = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const boxAnimations = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const Services = () => {
    return (
        <motion.section
            id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
        >
            <div className="container">
                <div className="services">
                    <div className="services--titles">
                        <motion.h1 custom={1} variants={textAnimations} className="services--titles--title">services
                        </motion.h1>
                        <motion.p custom={2} variants={textAnimations} className="services--titles--subtitle">we are
                            more than developers
                        </motion.p>
                    </div>
                    <div className="services--items">
                        <div className="services--items--group">
                            <motion.div custom={2} variants={boxAnimations} className="services--items--group--box">
                                <div className="services--items--group--box--img">
                                    <img src={services1} alt=""/>
                                </div>
                                <div className="services--items--group--box--description">
                                    <h3>Ux/Ui design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae
                                        adipiscing </p>
                                </div>
                            </motion.div>

                            <motion.div custom={3} variants={boxAnimations} className="services--items--group--box">
                                <div className="services--items--group--box--img">
                                    <img src={services2} alt=""/>
                                </div>
                                <div className="services--items--group--box--description">
                                    <h3>Website development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae
                                        adipiscing </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="services--items--group">

                            <motion.div custom={4} variants={boxAnimations} className="services--items--group--box">
                                <div className="services--items--group--box--img">
                                    <img src={services3} alt=""/>
                                </div>
                                <div className="services--items--group--box--description">
                                    <h3>Website development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae
                                        adipiscing </p>
                                </div>
                            </motion.div>

                            <motion.div custom={5} variants={boxAnimations} className="services--items--group--box">
                                <div className="services--items--group--box--img">
                                    <img src={services4} alt=""/>
                                </div>
                                <div className="services--items--group--box--description">
                                    <h3>Development of mobail application</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quis massa, vitae
                                        adipiscing </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Services;


