import { ADD_TO_CARD, CHECKOUT_REQUEST } from "../constants/actionTypes";


const initialState = {
    addedIds : [],
    quantityById : {}
}

const addedIds = (state = initialState.addedIds, action) => {
    if(state.indexOf(action.productId) !== -1) {
        return state;
    }
    return [...state, action.productId]
}

const quantityById = (state = initialState.quantityById, action) => {
    const { productId } = action;
    return {
        ...state,
        [productId] : (state[productId] || 0) + 1
    }
}

const card = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return initialState
        case ADD_TO_CARD: 
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
        default:
            return state;
    }
}


export default card;