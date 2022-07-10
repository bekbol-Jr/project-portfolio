import React from 'react';
import Header from "../header/Header";
import Portfolio from "../footer/Portfolio";
import OutTeam from "../footer/OutTeam";
import Tools from "../footer/Tools";
import Hero from "../header/Hero";


const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Portfolio/>
            <OutTeam/>
            <Tools/>
        </>
    );
};

export default Home;