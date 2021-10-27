import * as types from '../constants/actionTypes';

export const recieveProducts = products => {
    return {
        type : types.RECIEVE_PRODUCTS,
        products
    }
}