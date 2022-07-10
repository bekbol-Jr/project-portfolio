import React from 'react';
import Header from "../header/Header";
import Portfolio from "../footer/Portfolio";
import OutTeam from "../footer/OutTeam";
import Tools from "../footer/Tools";
import Contact from "../footer/Contact";
import Services from "../footer/Services";
import Hero from "../header/Hero";

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Services/>
            <Portfolio/>
            <OutTeam/>
            <Tools/>
            <Contact/>
        </>
    );
};

export default Home;