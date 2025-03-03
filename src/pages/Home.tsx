import React from "react";
import Hero from "./Home-Sections/Hero"
import Productions from "./Home-Sections/Productions";
import Product from "../components/products/Product"
import AboutCompany from "./Home-Sections/AboutCompany";
import Advantages from "./Home-Sections/Advantages";
import News from "./Home-Sections/News";
import GroupSiyob from "./Home-Sections/Group-Siyob";
const Home: React.FC = () => {
    return (

        <div>
            <Hero />
            <Productions />
            <AboutCompany />
            <Advantages />
            <News />
            <GroupSiyob />
            
        </div>

    );
}

export default Home;