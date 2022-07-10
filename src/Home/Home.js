import React from 'react';
import Header from "../header/Header";
import Portfolio from "../footer/Portfolio";
import OutTeam from "../footer/OutTeam";
import Tools from "../footer/Tools";
import Contact from "../footer/Contact";
import Services from "../footer/Services";

const Home = () => {
    return (
        <>
            <Header/>
            <Services/>
            <Portfolio/>
            <OutTeam/>
            <Tools/>
            <Contact/>
        </>
    );
};

export default Home;