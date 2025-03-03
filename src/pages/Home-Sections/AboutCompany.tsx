import React from "react";
const AboutCompany: React.FC = () => {
    return (

        <div className="aboutCompany-main-container">
            <div className="aboutTitle">
                <h2>О Нашей <br /> компании</h2>
                <p>Puremilky - молочная продукция фермерского производства, <br /> изготавливается согласно <br />требованиям европейского качества </p>
            </div>


            <div className="statistics-box">
                <div className="FrBox"> <div className="topStatistics-box">
                    <div><h3>10m</h3>
                        <p>Продуктов произведено</p>
                    </div>
                    <div><h3>10 000</h3>

                        <p>Магазинов Узбекистана <br />
                            продают товары от <br /> Puremilky</p>
                    </div>
                </div>
                </div>
                <div className="TwBox">
                    <div className="bottomStatistics-box">

                        <div><h3>23</h3> <p>Крупных городов СНГ <br />
                            пользуются продукцией <br />
                            Puremilky</p></div>
                        <div><h3>10m</h3>
                            <p>Постоянных покупателей <br /> продукции Puremilky</p></div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default AboutCompany;