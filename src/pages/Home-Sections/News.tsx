import React from "react";

const News: React.FC = () => {
    return (
        <div className="news-main-container">
            <div className="news-titles">
                <h2>Новости <br />
                    и акции</h2>
                <div className="txt-btn-box">
                    <p>Puremilky - молочная продукция фермерского <br /> производства, изготавливается согласно <br />
                        требованиям европейского качества</p>
                    <div className="btns">
                        <button className="prevBtn"><img src="/str.png" alt="" /></button><button className="desBtn"><img src="/str.png" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="swiperBlock">

                {Array.from({ length: 5 }).map((_, idx) => (<div className="elem" key={idx}>
                    <div className="promotion">Акция</div>
                    <h4>Выиграйте Malibu <br /> при покупке <br /> молока</h4>
                    <p>Покупайте молоко и получите <br /> возможность выиграть <br />
                        Chevrolet Malibu</p>
                    <button className="questionnaireBtn">Заполнить анкету</button>
                </div>))}
            </div>
        </div>
    );

}

export default News;