import React from 'react';
import Header from "../header/Header";
import Portfolio from "../footer/Portfolio";
import OutTeam from "../footer/OutTeam";
import Tools from "../footer/Tools";
import Hero from "../header/Hero";
import AboutUs from "../header/AboutUs";
import Contact from "../footer/Contact";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <AboutUs/>
            <Portfolio/>
            <OutTeam/>
            <Tools/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;