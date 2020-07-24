import React from 'react';
import './_navigation.styles.scss';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/cart.svg';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import CartIcon from '../CartIcon/cart-icon.component';
import CartDropdown from '../CartDropdown/cart-dropdown.component';


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

const mapStateToProps = ({user: {currentUser}, cart: {hidden, cartItems}}) => ({
    currentUser,
    hidden,
    cartItems
});

export default connect(mapStateToProps)(Navigation);