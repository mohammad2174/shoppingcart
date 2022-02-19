import { ADD_TO_CARD, RECIEVE_PRODUCTS, CHECKOUT_REQUEST, ITEM_REQUEST, ORDER_REQUEST, WRITE_REVIEWS } from "../constants/actionTypes";

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
                    inventory: product.count === num ? product.inventory : (product.inventory + product.count) - num
                }
            }
            case ORDER_REQUEST:
            var { productId, shipping, email, fname, lname, apartment, city, country, province, postalcode, phone, cardnumber, namecard, expiredate, cvc } = action;
            var product = state[productId];
            return {
                ...state,
                [productId] : {
                    ...product,
                    shipping : shipping,
                    email : email,
                    fname : fname,
                    lname : lname,
                    apartment : apartment,
                    city : city,
                    country : country,
                    province : province,
                    postalcode : postalcode,
                    phone : phone,
                    cardnumber : cardnumber,
                    namecard : namecard,
                    expiredate : expiredate,
                    cvc : cvc
                }
            }
            case WRITE_REVIEWS:
            var { productId, rating, reviewCount, message, subject } = action;
            var product = state[productId];
            return {
                ...state,
                [productId] : {
                    ...product,
                    rating : rating,
                    reviewCount : reviewCount,
                    message : message,
                    subject : subject
                }
            }      

        default: 
        return state
    }
}

export default products;