import { SET_LIMIT_PRODUCTS } from "../Constants/ActionTypes";

const limitReducer = (state = 20, action) => {
  switch (action.type) {
    case SET_LIMIT_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
export default limitReducer;
