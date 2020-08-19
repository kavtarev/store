import { reducer as formReducer } from "redux-form"

import usersReducer from "./catalogReducer"
import thunk from "redux-thunk"
import cartReducer from "./cartReducer"
const { combineReducers, createStore, applyMiddleware } = require("redux")
let reducers = combineReducers({
  form: formReducer,
  users: usersReducer,
  cart: cartReducer,
})
let store = createStore(reducers, applyMiddleware(thunk))
window.store = store
export default store
