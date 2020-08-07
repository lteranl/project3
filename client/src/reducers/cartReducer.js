import {
    SET_SHOPPING_CART,
} from "../actions/types";

const initialState={
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem("cart")) : []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_SHOPPING_CART:
            const newCart = [...state.cart,action.payload];
            localStorage.setItem("cart", JSON.stringify(newCart))
            return {cart:newCart};
        default: return state;
    }
}

