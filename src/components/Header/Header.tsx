import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss"


const Header: React.FC = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModla = () => {
        setModal(false)
    }
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


                {<div className="burgerMenu"><img src="/burger.png" alt="" onClick={()=>openModal()}/></div>
                }

                {modal && <div className="sidebar" id="sidebar">
                    <span className="close" onClick={()=> closeModla()}>✖</span>
                    <ul>
                        <li><Link to={"/"}>Главная</Link></li>
                        <li><Link to={"/products"}>Продукция</Link></li>
                        <li><Link to={"/"}>О компании</Link></li>
                        <li><Link to={"/"}>Рецепты</Link> </li>
                        <li><Link to={"/"}>Блог</Link> </li>
                        <li><Link to={"/"}>Контакты</Link></li>
                    </ul>
                </div>}
            </header>

        </div>

    );
}

export default Header;