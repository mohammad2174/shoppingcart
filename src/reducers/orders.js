import { RECIEVE_ORDERS } from "../constants/actionTypes";


const orders = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_ORDERS:
        var { orders } = action;
      return {
        ...state,
        orders: orders,
      }
    default:
      return state;
  }
};

export default orders;