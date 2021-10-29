import * as types from '../constants/actionTypes';

export const recieveProducts = products => ({
        type : types.RECIEVE_PRODUCTS,
        products
})