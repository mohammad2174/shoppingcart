import { combineReducers } from "redux";
import products from './products';
import card from './card';
import user from './user';
import reviews from "./reviews";


export default combineReducers({
    products,
    card,
    user,
    reviews
})