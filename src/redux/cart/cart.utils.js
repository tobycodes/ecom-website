export const addNewOrExistingItem = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if(existingItem) {
        return cartItems.map(item => item.id===cartItemToAdd.id 
            ? {...item, quantity: item.quantity + 1}
            : item);
    }

    return cartItems.concat([{...cartItemToAdd, quantity: 1}]);
};

export const removeOrDeleteExistingItem = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if(!existingItem) return;

    if(existingItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);  
    }

    return cartItems.map(item => item.id===cartItemToRemove.id 
        ? {...item, quantity: item.quantity - 1}
        : item
    );
};