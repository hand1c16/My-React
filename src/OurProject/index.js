import { combineReducers } from "redux";
import ProductReducer from "./Reducers/ProductReducer"
import CartReducer from "./Reducers/CartReducer";

const allReducers = combineReducers({
  Products: ProductReducer,
  Cart: CartReducer
})

export default allReducers;