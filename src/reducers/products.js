import { ADD_TO_CARD, RECIEVE_PRODUCTS } from "../constants/actionTypes";

const products = (state = {}, action) => {

    switch (action.type) {
        case RECIEVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {})
            }
        case ADD_TO_CARD:
            let { productId } = action;
            let product = state[productId];
            return {
                ...state,
                [productId] : {
                    ...product,
                    inventory : product.inventory - 1,
                    count : product.count + 1
                }
            }    

        default: 
        return state
    }
}

export default products;