import { combineReducers } from "redux";
import products from './products';
import card from './card';
import user from './user';


export default combineReducers({
    products,
    card,
    user
})