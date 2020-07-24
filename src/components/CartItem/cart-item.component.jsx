import React from 'react';
import './_cart-item.styles.scss';

const CartItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item;

    return (
    <div className='cart-item'>
        <img className='cart-item__image' src={imageUrl} alt={name} />
        <div className='cart-item__info'>
            <span className='name'>{name}</span>
            <span>{quantity} x ${price}</span>
        </div>
        
    </div>
)};


export default CartItem;