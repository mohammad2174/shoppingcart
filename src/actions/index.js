import * as types from '../constants/actionTypes';


export const recieveProducts = products => ({
        type : types.RECIEVE_PRODUCTS,
        products
})

export const addToCard = (productId, color, size) => ({
        type : types.ADD_TO_CARD,
        productId,
        color,
        size
})

export const checkout = productId => ({
        type : types.CHECKOUT_REQUEST,
        productId
})