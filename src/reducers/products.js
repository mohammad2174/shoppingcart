import { RECIEVE_PRODUCTS } from "../constants/actionTypes";

const products = (state = {}, action) => {
    console.log(action);
    switch (action.type) {
        case RECIEVE_PRODUCTS:
            let newProducts = action.type.reduce((obj, product) => {
                obj[product.id] = product;
                return obj;
            }, {})

            return {
                ...state,
                ...newProducts
            }

        default: 
        return state
    }
}

export default products;