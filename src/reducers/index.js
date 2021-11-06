import { combineReducers } from "redux";
import products from './products'
import card from './card';


export default combineReducers({
    products,
    card
})