import { SET_SHOPPING_CART, REMOVE_SHOPPING_CART } from "../actions/types";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SHOPPING_CART:
      const newCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    case REMOVE_SHOPPING_CART:
      console.log("removing item index ", action.payload)
      const newnewCart = [...state.cart];
      newnewCart.splice(action.payload, 1);
      console.log(newnewCart)
      localStorage.setItem("cart", JSON.stringify(newnewCart));
      return { ...state, cart: newnewCart };
    default:
      return state;
  }
}
