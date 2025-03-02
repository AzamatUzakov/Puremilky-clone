import React from "react";
import "./index.scss"
const Hero: React.FC = () => {
    return (

        <div className="hero-main-container">
            <img className="heroImg" src="/bgHeader.png" alt="Hero" />
            <div className="title">
                <h1>PUREMILKY</h1>
                <p>МОЛОЧНАЯ ПРОДУКЦИЯ <br /> ВЫСШЕГО КАЧЕСТВА</p>
            </div>
            <img src="/milk.png" alt="milk" className="milkBottom" />

        </div>
    );
}

export default Hero;