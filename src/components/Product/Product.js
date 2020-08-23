import React from 'react';
import { render } from "react-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Product.css';

const Product = (props) => {
    const {name, img,seller,price,stock} = props.product;
    // console.log(props);
    return (
        <div className = "product">
            
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className = "product-title">
                <h4 className="productName">{name}</h4>
                    <p><small>by:{seller}</small></p>
                    <h4>${price}</h4>
                    <p><small>only {stock} left stock-order soon </small></p>
                    <br/>
                    <button className = "cart-btn" 
                    
                    onClick={() =>  props.handleAddProduct(props.product)} 
                    > <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>

            </div>
            
        </div>
    );
};

export default Product;