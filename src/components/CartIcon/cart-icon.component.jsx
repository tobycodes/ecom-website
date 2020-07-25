import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './_cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectTotalCartItems } from '../../redux/cart/cart.selectors';


const CartIcon = ({ toggleCartHidden, totalCartItems }) => (
    <div className='cart' onClick={toggleCartHidden}>
        <ShoppingIcon className='cart__icon'/>
        <span className="cart__count">
            {totalCartItems}
        </span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    totalCartItems: selectTotalCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);