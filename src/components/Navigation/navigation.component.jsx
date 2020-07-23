import React from 'react';
import './_navigation.styles.scss';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/cart.svg';
import { auth } from '../../firebase/firebase.utils';



const Navigation = ({ currentUser }) => {

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

           
        </div>
    </div>
    
)};

export default Navigation;