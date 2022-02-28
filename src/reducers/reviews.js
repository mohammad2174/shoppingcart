import { RECIEVE_REVIEWS } from "../constants/actionTypes";


const reviews = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_REVIEWS:
        var { reviews } = action;
      return {
        ...state,
        reviews: reviews,
      }
    default:
      return state;
  }
};

export default reviews;