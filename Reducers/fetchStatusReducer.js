import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  PRODUCTS_END_OF_PRODUCTS
} from "../Constants/ActionTypes";
export const defaultState = {
  isFetching: false,
  endOfProducts: false
};
const fetchStatus = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case PRODUCTS_END_OF_PRODUCTS:
      return {
        ...state,
        endOfProducts: true
      };
    default:
      return state;
  }
};
export default fetchStatus;
