import React from "react"

const GroupSiyob: React.FC = () => {
    return (
        <div className="group-siyob-main-container">
            <div className="group-title">
                <h2>О нашей <br /> компании</h2>
                <button>Подробнее</button>
            </div>

            <div className="yubeBox">
                <img src="/yotube.png" alt="you" />
                <div className="rightTitle">
                    <h4>Группа компаний <br /> «Siyob»</h4>
                    <p>Группа компаний «Siyob» - многопрофильный холдинг по производству и реализации товаров народного потребления, на протяжении 10 лет на рынке Узбекистана. Одной из компаний в составе холдинга стала компания «PureMilky Works»</p>
                    <p>«PureMilky Works» самый крупный молочный завод в Узбекистане. Специализируется на производстве натуральной молочной и масложировой продукции. Основанное в 2013 году, предприятие имеет в составе, молочный и масложировой заводы.</p>
                </div>
            </div>
        </div>

    );
}

export default GroupSiyob;