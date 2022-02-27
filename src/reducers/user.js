import { SET_CURRENT_USER } from "../constants/actionTypes";


const user = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
        var { currentUser } = action;
      return {
        ...state,
        currentUser: currentUser,
      }
    default:
      return state;
  }
};

export default user;