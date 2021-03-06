import { ADD_TO_CARD, CHECKOUT_REQUEST, ITEM_REQUEST } from "../constants/actionTypes";


const initialState = {
    addedIds : [],
    quantityById : {},
    subIds : []
}

const addedIds = (state = initialState.addedIds, action) => {
    if(state.indexOf(action.productId) !== -1) {
        return state;
    }
    return [...state, action.productId]
}

const subIds = (state = initialState.subIds, action) => {
    let arr = state
    arr.forEach((item) => {
        const index = arr.indexOf(item)
        if(item === action.productId) {
            
          arr.splice(index, 1);
        }
    })
    return arr
}

const quantityById = (state = initialState.quantityById, action) => {
    const { productId } = action;
    return {
        ...state,
        [productId] : (state[productId] || 0) + 1
    }
}

const countById = (state = initialState.quantityById, action) => {
    const { productId, num } = action;
    return {
        ...state,
        [productId] : num
    }
}

const subById = (state = initialState.subById, action) => {
    const { productId } = action;
    return {
        ...state,
        [productId] : 0
    }
}

const card = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return {
                addedIds: subIds(state.addedIds, action),
                quantityById: subById(state.quantityById, action)
            }
        case ADD_TO_CARD:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
        case ITEM_REQUEST:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: countById(state.quantityById, action)
            }    
        default:
            return state;
    }
}


export default card;