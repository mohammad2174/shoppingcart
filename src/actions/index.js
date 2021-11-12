import * as types from '../constants/actionTypes';

export const recieveProducts = products => ({
        type : types.RECIEVE_PRODUCTS,
        products
})

export const addToCard = productId => ({
        type : types.ADD_TO_CARD,
        productId
})

export const checkout = () => ({
        type : types.CHECKOUT_REQUEST
})