import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product-container'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='name-text'>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>price:{price}</p>
                <p><small>only {stock} left in stock-order soon</small></p>
                <button onClick={()=>handleAddToCart(props.product)} className='btn-style'><FontAwesomeIcon icon={faShoppingCart} /> Buy Now!</button>
            </div>
        </div>
    );
};

export default Product;