import React from "react";
import { Link } from "react-router-dom";
import Product from "../../components/products/Product"


const Productions: React.FC = () => {



    return (
        <div className="product-main-continer">
            <div className="productNav"><h2>Продукция <br /> Puremilky</h2> <p>Молочная продукция <br />
                уникального производства<br />
                по лучшим рецептам</p>  <Link to={"products"}><button>Открыть каталог</button></Link></div>


            <Product />

        </div>

    );
}

export default Productions;