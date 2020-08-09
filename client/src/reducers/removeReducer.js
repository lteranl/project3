import {
    REMOVE_SHOPPING_CART,
  }  from "../actions/types"

  const initialState={
      cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart)")) : []
  }

export default function(state = this.state, action) {
    switch(action.type) {
        case REMOVE_SHOPPING_CART:
            const newCart = [...state.cart, action.payload];
            localStorage.removeItem("cart", JSON.stringify(newCart))
            return {cart:newCart}
    }
}