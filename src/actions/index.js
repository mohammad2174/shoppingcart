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

export const item = (productId, num) => ({
        type : types.ITEM_REQUEST,
        productId,
        num
})

export const order = (productId, shipping, email, fname, lname, apartment, city, country, province, postalcode, phone, cardnumber, namecard, expiredate, cvc) => ({
        type : types.ORDER_REQUEST,
        productId,
        shipping,
        email,
        fname,
        lname,
        apartment,
        city,
        country,
        province,
        postalcode,
        phone,
        cardnumber,
        namecard,
        expiredate,
        cvc
})

export const recieveReview = (productId, rating, reviewCount, message, subject) => ({
        type : types.WRITE_REVIEWS,
        productId,
        rating,
        reviewCount,
        message,
        subject
})