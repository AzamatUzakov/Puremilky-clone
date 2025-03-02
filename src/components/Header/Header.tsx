import React from "react";
import { Link } from "react-router-dom";
import "./index.scss"


const Header: React.FC = () => {
    return (

        <div>
            <header>
                <img src={"/logo.png"} alt="Mainlogo" className="" />
                <nav>
                    <Link to={"/"}>Главная</Link>
                    <Link to={"/products"}>Продукция</Link>
                    <Link to={"/"}>О компании</Link>
                    <Link to={"/"}>Рецепты</Link>
                    <Link to={"/"}>Блог</Link>
                    <Link to={"/"}>Контакты</Link>
                    <Link to={"/"}>Вакансии</Link>
                </nav>
                <nav>
                    <Link to={"/"}>UZB</Link>
                    <Link to={"/"}>РУС</Link>
                    <Link to={"/"}>ENG</Link>
                </nav>
                <div className="burgerMenu"></div>
            </header>

        </div>

    );
}

export default Header;