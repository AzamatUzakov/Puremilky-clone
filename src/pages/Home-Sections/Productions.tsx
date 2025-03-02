import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Productions: React.FC = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://world.openfoodfacts.org/api/v2/product/737628064502.json/image_nutrition_small_url")
            .then(res => res.json())
            .then(res => setProducts(res))

    }, [])
    console.log(products);

    return (
        <div className="product-main-continer">
            <div className="productNav"><h2>Продукция <br /> Puremilky</h2> <p>Молочная продукция <br />
                уникального производства<br />
                по лучшим рецептам</p>  <Link to={"products"}><button>Открыть каталог</button></Link></div>


            {
                products.map((item) => (
                    <div className="product-cont">
                        <div className="item">
                            <img src="" alt="" />
                            <div className="bottomBtn">
                                <p>{item}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>

    );
}

export default Productions;