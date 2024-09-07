export const totalItems = (cart) => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export const totalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.quantity * item.after_discount_price, 0);
}

const CartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART": 
            return [...state, action.item];

        case "REMOVE_FROM_CART":
            return state.filter(p => p._id !== action.id)

        case "INCREASE_QUANTITY":
            return state.map(item => 
                item._id === action.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );

        case "DECREASE_QUANTITY":
            return state.map(item => 
                item._id === action.id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );

        default: 
            state;

    }
}

export default CartReducer