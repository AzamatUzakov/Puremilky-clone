import React from "react";
import Hero from "./Home-Sections/Hero"
import Productions from "./Home-Sections/Productions";
import Product from "../components/products/Product"
const Home: React.FC = () => {
    return (

        <div>
            <Hero />
            <Productions />
        </div>

    );
}

export default Home;