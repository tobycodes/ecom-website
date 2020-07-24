import React from 'react';
import { connect } from 'react-redux';

import './_cart-dropdown.styles.scss';
import CustomButton from '../CustomButton/custom-button.component';
import CartItem from '../CartItem/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';



const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-dropdown__content">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <div className="cart-dropdown__btn">
            <CustomButton inverted='true'>
                Go to Checkout
            </CustomButton>
        </div>
        
    </div>
);

const mapStateToProps = ({cart}) => ({
    cartItems: selectCartItems(cart)
})

export default connect(mapStateToProps)(CartDropdown);