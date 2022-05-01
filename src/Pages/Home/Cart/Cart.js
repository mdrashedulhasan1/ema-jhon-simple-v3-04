import React from 'react';

const Cart = (props) => { 
    console.log(props.cart);
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total+product.price;
    }
    return (
        <div>
            <h3>Cart Summery:{props.cart.length}</h3>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cart;