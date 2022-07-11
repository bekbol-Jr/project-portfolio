import React from 'react';
import Header from "../header/Header";
import Portfolio from "../footer/Portfolio";
import OutTeam from "../footer/OutTeam";
import Tools from "../footer/Tools";
import Hero from "../header/Hero";
import AboutUs from "../header/AboutUs";
import Services from "../header/Services";


const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Portfolio/>
            <OutTeam/>
            <Tools/>
        </>
    );
};

export default Home;