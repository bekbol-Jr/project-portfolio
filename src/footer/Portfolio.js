import React from 'react';
import {motion} from "framer-motion";
import img1 from "../img/Rectangle 11.png"
import img2 from "../img/Rectangle 12.png"
import img3 from "../img/Rectangle 13.png"
import img4 from "../img/Rectangle 14.png"

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
        scale: 0.2,
        opacity: 0,
    },
    visible: custom => ({
        scale: 1,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const Portfolio = () => {
    return (
        <motion.section
            id="portfolio"
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}>
            <div className="container">
                <div className="portfolio--general">

                    <div className="portfolio--general__text">

                        <motion.div custom={1} variants={textAnimations} className="portfolio--general__text--one">
                            <div></div>
                            <h1>portfolio</h1>
                        </motion.div>

                    <motion.p custom={2} variants={textAnimations}>
                        we are more than developers
                    </motion.p>

                    </div>

                    <div className="portfolio--general__img">

                        <motion.div custom={2} variants={boxAnimations}>
                            <img src={img1} alt=""/>
                            <h3>
                                Hotel ATLANT
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                        </motion.div>

                        <motion.div custom={3} variants={boxAnimations}>
                            <img src={img2} alt=""/>
                            <h3>
                                Restaurant FOOD ZONE
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                        </motion.div>

                        <motion.div custom={4} variants={boxAnimations}>
                            <img src={img3} alt=""/>
                            <h3>
                                Art shcool BE CREATIVE
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                        </motion.div>

                        <motion.div custom={4} variants={boxAnimations}>
                            <img src={img4} alt=""/>
                            <h3>
                                Hotel ATLANT
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                            </p>
                        </motion.div>


                    </div>

                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;

// rsc