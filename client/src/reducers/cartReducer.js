import {
    SET_SHOPPING_CART
} from "../actions/types";

const initialState={
    cart:[]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_SHOPPING_CART:
            return {cart:[...state.cart,action.payload]};
           
        default: return state;
    }
}