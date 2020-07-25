import React from 'react';
import { connect } from 'react-redux';

import './_checkout-item.styles.scss';

import { deleteItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, addCartItem, removeCartItem, deleteCartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className='checkout-item'>
        <div className='checkout-item__image' >
            <img src={imageUrl} alt={name}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeCartItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <div className="remove"
            onClick={() => deleteCartItem(cartItem)}
        >&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addCartItem: cartItem => dispatch(addItemToCart(cartItem)),
    deleteCartItem: cartItem => dispatch(deleteItemFromCart(cartItem)),
    removeCartItem: cartItem => dispatch(removeItemFromCart(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);