const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"
const CLEAR_CART = "CLEAR_CART"

let initialState = {
  cart: [
    /*  { id: 88, name: "oleg", email: "petuhov" },
    { id: 99, name: "Iban", email: "kolopov" }, */
  ],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.data] }
    case CLEAR_CART:
      return { ...state, cart: [] }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart
            .slice(
              0,
              state.cart.findIndex((item) => item.id === action.id)
            )
            .concat(
              state.cart.slice(
                state.cart.findIndex((item) => item.id === action.id) + 1
              )
            ),
        ],
      }
    default:
      return state
  }
}

export default cartReducer

export const addToCart = (data) => {
  return { type: ADD_TO_CART, data }
}

export const removeFromCart = (id) => {
  return { type: REMOVE_FROM_CART, id }
}
export const clearCart = () => {
  return { type: CLEAR_CART }
}
