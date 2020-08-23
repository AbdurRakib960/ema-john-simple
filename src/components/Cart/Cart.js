import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, totalPrice) => total + totalPrice.price, 0);
    
    // let total = 0;
    // for(let i = 0; i<cart.length; i++){
    //     const product = cart[i];
    //     total = total + product.price;

    // }

    let shipping = 0;
    if(total > 35) {
        shipping = 0
    }
    else if(total > 15) {
        shipping = 4.66
    }
    else if(total > 0) {
        shipping = 12.66
    }
    
    const tax = total/ 10;

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items ordered:{cart.length}</p>
            
            <p>tax/vat:{tax}</p>
            <p><small>shipping cost:{shipping}</small></p>
            <h3>Total price:${total + shipping + tax}</h3>
        </div>
    );
};

export default Cart;