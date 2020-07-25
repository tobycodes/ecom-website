import cartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});

export const deleteItemFromCart = item => ({
    type: cartActionTypes.DELETE_CART_ITEM,
    payload: item
});

