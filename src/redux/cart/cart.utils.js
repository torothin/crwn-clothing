export const addItemToCart = (cartItems, cartItemToAdd) => {
    
    // this checks the array to determine if the new item is in the array and attaches the item
    // to existingCartItem
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );
    
    // if existingCartItem exists (the item is already in the array) then this ++quantity or skips item
    // and a new array is returned to ensure react renders the updated compontent
    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem 
        );
    }
    
    // this will return the original array plus adding the new item at a quantity of one if the item
    // wasn't origianlly in the cart
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
        );
    
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToRemove.id
        )
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );

}