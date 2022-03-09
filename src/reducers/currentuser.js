import { RECIEVE_USER } from "../constants/actionTypes";


const currentuser = (state = {}, action) => {
  switch (action.type) {
      case RECIEVE_USER:
        var { user } = action;
      return {
        ...state,
        user: user,
      }  
    default:
      return state;
  }
};

export default currentuser;