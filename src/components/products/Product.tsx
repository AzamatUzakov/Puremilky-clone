import products from "../../utils/ProducArr"
import React from "react";
import "./index.scss"
const product: React.FC = () => {
    return (


        <div className="product-cont">
            {
                products.map((i) => (
                    <div className="item" key={i.id}>
                        <img src={i.img} alt="" />
                        <div className="bottomBtn">
                            <p>{i.title}</p>
                            <img src="/str.png" alt="str" />
                        </div>
                    </div>))
            }
        </div>


    );
}

export default product;


