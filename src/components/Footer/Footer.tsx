import React from "react";
import "./index.scss"
const Footer: React.FC = () => {
    return (
        <footer>

            <div className="floating-block">
                <div className="left-title">
                    <h3>остались <br />  вопросы?</h3>
                    <p>Заполните небольшую заявку <br />
                        и мы свяжемся с вами <br />
                        в течении 2х рабочих дней</p>
                </div>
                <form className="footerFroms">
                    <input type="text" placeholder="Ваше имя" />
                    <br /><input type="tel" placeholder="Номер телефона " /> <br />
                    <button>Отправить заявку</button>
                </form>
            </div>

            <div className="footerBox">
                <img src="/kefir.png" alt="kefit" className="kefitPosition" />

                <div className="bottomInfo">
                    <img src="./footerLogo.png" alt="footerLogo" className="footerLogo" />

                    <div className="menu">
                        <h2>Меню</h2>
                        <a href="#">Продукция</a><br />
                        <a href="#">Рецепты</a><br />
                        <a href="#">Блог</a>
                    </div>

                    <div className="aboutCompany">
                        <h2>gh</h2>
                        <a href="#">О компании</a><br />
                        <a href="#">Вакансии</a><br />
                        <a href="#">Контакты</a>
                    </div>

                    <div className="contactInfo">
                        <h2>Контактная информация</h2>
                        <div className="ifBox">
                            <div className="leftInfo">
                                <span>Поддержка:</span>
                                <p>98 180-66-55</p>
                                <div className="networks">
                                    <div className="net"><img src="/Instagram Icon.png" alt="" /></div>
                                    <div className="net"><img src="/Facebook Icon.png" alt="" /></div>
                                    <div className="net"><img src="/Twitter Icon.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="rightInfo">
                                <span>Электронная почта:</span>
                                <p>98 180-66-55</p>
                            </div>
                        </div>

                    </div>

                </div>
                <p className="btm"><span>Puremilky 2025</span> <a href="#">Политика конфиденциальности</a></p>
            </div>


        </footer>
    );
};

export default Footer;
