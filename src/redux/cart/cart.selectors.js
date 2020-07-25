import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);


export const selectTotalCartItems = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce(
        (acc, cartItem) => cartItem.quantity + acc
    , 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (acc, item) => (item.quantity * item.price) + acc
    , 0)
);