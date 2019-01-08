import {
  PRELOADED_PRODUCTS_CLEAR_LIST,
  PRELOADED_PRODUCTS_SET
} from "../Constants/ActionTypes";

const preloadedProductsReducer = (state = [], action) => {
  switch (action.type) {
    case PRELOADED_PRODUCTS_CLEAR_LIST:
      return [];
    case PRELOADED_PRODUCTS_SET:
      return action.payload;
    default:
      return state;
  }
};
export default preloadedProductsReducer;
