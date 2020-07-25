import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './_navigation.styles.scss';

import CartIcon from '../CartIcon/cart-icon.component';
import CartDropdown from '../CartDropdown/cart-dropdown.component';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { ReactComponent as Logo } from '../../assets/cart.svg';
import { auth } from '../../firebase/firebase.utils';


const Navigation = ({ currentUser, hidden, cartItems }) => {
    return (
    <div className='nav'>
        <Link to='/' className='nav__logo'>
            <Logo className='nav__logo-img' />
        </Link>
        <div className='nav__links'>
            <NavLink to='/shop' activeClassName='active' className='nav__link'>
                Shop
            </NavLink>
            <NavLink to='/contact' activeClassName='active' className='nav__link'>
                Contact
            </NavLink>
            {
                currentUser ? (
                    <div onClick={() => auth.signOut()} className='nav__link'>
                        Sign Out
                    </div>
                ) :
                 <NavLink to='/signin' activeClassName='active' className='nav__link'>
                    Sign In
                </NavLink>
            }
           
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown cartItems={cartItems}/>
            
        }
        
    </div>
    
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(Navigation);