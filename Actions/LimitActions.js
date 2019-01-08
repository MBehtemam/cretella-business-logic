import { SET_LIMIT_PRODUCTS } from "../Constants/ActionTypes";
import { fetchProducts } from "./ProductsActions";
export const setLimitProducts = limit => {
  return (dispatch, getState) => {
    const { pagination, sortByOnServer } = getState();
    dispatch(fetchProducts(true, pagination, limit, sortByOnServer));
    dispatch(_setLimitProducts(limit));
  };
};

const _setLimitProducts = limit => ({
  type: SET_LIMIT_PRODUCTS,
  payload: limit
});
