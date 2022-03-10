import React from "react";
import About from "../components/Home/About";
import Cover from "../components/Home/Cover";
import Features from "../components/Home/Features";
import PriceList from "../components/Home/PriceList";
import Services from "../components/Home/Services";

const Home = () => {
    return (
        <div>
            <Cover />
            <Features />
            <About />
            <Services />
            <PriceList />
        </div>
    )
}

export default Home;