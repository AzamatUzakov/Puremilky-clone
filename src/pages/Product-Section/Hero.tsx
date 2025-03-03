import React from "react"
import products from "../../utils/ProductsArr";
console.log(products);

import "./index.scss"
const ProductHero: React.FC = () => {
    return (
        <div className="productHero-main-container">
            <div className="bg-hero">
                <img className="milkBg" src="./milk.png" alt="milk" />


                <div className="catalog-cont">
                    <div className="titles"> <h1>Каталог нашей продукции</h1>
                        <div className="navs">
                            <a href="#">Все</a>
                            <a href="#">Молоко</a>
                            <a href="#">Сырки</a>
                            <a href="#">Сыры</a>
                            <a href="#">Йогурты</a>
                            <a href="#">Кисломолочная продукция</a></div>
                    </div>


                </div>

            </div>
            <div className="productsBox">

                {products.map((item) => (<div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="bottomBtn">
                        <div className="title"><p>{item.name}</p><p>{item.title}</p></div>
                        <img src="/str.png" alt="str" />
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ProductHero;