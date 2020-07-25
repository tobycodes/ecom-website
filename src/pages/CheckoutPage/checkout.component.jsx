import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './_checkout.styles.scss';


import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem/checkout-item.component';
import CustomButton from '../../components/CustomButton/custom-button.component';
import { withRouter } from 'react-router-dom';


const CheckoutPage = ({ cartItems, cartTotal, history }) => (
    <div className='checkout'>
        <div className='checkout__header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
            {
                cartItems.length 
                ?   <div className='checkout__items'>
                        {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)}
                    </div>
                :   <div className='empty'>
                        <h3>You have no items in your cart</h3>
                    <CustomButton onClick={()=> history.push('/shop')} >
                        Browse Shop
                    </CustomButton>
                  </div>
                
            }
        {cartItems.length 
            ? <div className="checkout__total">
               Total: ${cartTotal}
            </div>
            : null
        }
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});


export default withRouter(connect(mapStateToProps)(CheckoutPage));