import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, useHistory } from 'react-router-dom';

import './_cart-dropdown.styles.scss';

import CustomButton from '../CustomButton/custom-button.component';
import CartItem from '../CartItem/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';



const CartDropdown = ({cartItems}) => {
    let history = useHistory();
    return (
        <div className="cart-dropdown">
            <div className="cart-dropdown__content">
                {cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) :
                <span className='empty-message' >Your cart is empty</span>
            }
            </div>
            <div className="cart-dropdown__btn">
                <CustomButton inverted='true' onClick={() => history.push('/checkout')} >
                    Go to Checkout
                </CustomButton>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));