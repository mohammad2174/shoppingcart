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

export const recieveReviews = (reviews) => ({
        type : types.RECIEVE_REVIEWS,
        reviews
})

export const setCurrentUser = currentUser => ({
        type: types.SET_CURRENT_USER,
        currentUser
})

export const recieveCheckouts = (checkouts) => ({
        type : types.RECIEVE_CHECKOUTS,
        checkouts
})

export const recieveOrders = (orders) => ({
        type : types.RECIEVE_ORDERS,
        orders
})

export const recieveUser = (user) => ({
        type : types.RECIEVE_USER,
        user
})