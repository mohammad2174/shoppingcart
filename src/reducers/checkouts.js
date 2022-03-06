import { RECIEVE_CHECKOUTS } from "../constants/actionTypes";


const checkouts = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_CHECKOUTS:
        var { checkouts } = action;
      return {
        ...state,
        checkouts: checkouts,
      }
    default:
      return state;
  }
};

export default checkouts;