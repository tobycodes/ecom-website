import { createSelector } from 'reselect';

export const selectCartItems = cart => cart.cartItems;

export const selectTotalCartItems = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce(
        (acc, cartItem) => cartItem.quantity + acc
    , 0)
);