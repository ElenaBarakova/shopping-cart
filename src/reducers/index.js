import shoppingCart from "./shoppingCart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  shoppingCart: shoppingCart,
});

export default rootReducer;
