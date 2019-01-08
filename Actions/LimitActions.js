import { SET_LIMIT_PRODUCTS } from "../Constants/ActionTypes";
import { fetchProducts } from "./ProductsActions";
export const setLimitProducts = (page, limit, sortBy) => {
  return dispatch => {
    dispatch(fetchProducts(true, page, limit, sortBy));
    dispatch(_setLimitProducts(limit));
  };
};

const _setLimitProducts = limit => ({
  type: SET_LIMIT_PRODUCTS,
  payload: limit
});
