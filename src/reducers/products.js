import { ADD_TO_CARD, RECIEVE_PRODUCTS, CHECKOUT_REQUEST, ITEM_REQUEST } from "../constants/actionTypes";

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
            var { productId, color, size } = action;
            var product = state[productId];
            return {
                ...state,
                [productId] : {
                    ...product,
                    inventory : product.inventory - 1,
                    count : product.count + 1,
                    color : color,
                    size : size
                }
            }
            case CHECKOUT_REQUEST:
            var { productId } = action;
            var product = state[productId];
            return {
                ...state,
                [productId] : {
                    ...product,
                    inventory : (product.inventory >= 2) ? product.inventory + product.count : product.inventory + 1,
                    count : (product.count >= 2) ? 0 : product.count - 1,
                }
            }
            case ITEM_REQUEST:
            var { productId, num } = action;
            var product = state[productId];
            return {
                ...state,
                [productId] : {
                    ...product,
                    count : num,
                    inventory: product.inventory - product.count
                }
            }     

        default: 
        return state
    }
}

export default products;