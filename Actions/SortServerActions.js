import {
  SORT_BY_ID_SERVER,
  SORT_BY_PRICE_SERVER,
  SORT_BY_SIZE_SERVER,
  RESET_SORT_BY_SERVER
} from "../Constants/ActionTypes";
import { fetchProducts } from "./ProductsActions";
/**
 * this action get page number and limit of products request and sort by id from server
 * @param {Number} page
 * @param {Number} limit
 */
export const sortByIdServer = (page, limit) => {
  return dispatch => {
    dispatch(setSortByIdServer());
    dispatch(sortByServer(page, limit, "id"));
  };
};
/**
 * this action sort products by price on server
 */
export const sortByPriceServer = () => {
  return (dispatch, getState) => {
    const { pagination, limit } = getState();
    dispatch(setSortByPriceServer());
    dispatch(sortByServer(pagination, limit, "price"));
  };
};
/**
 * this action sort products by size on server
 */
export const sortBySizeServer = () => {
  return (dispatch, getState) => {
    const { pagination, limit } = getState();
    dispatch(setSortBySizeServer());
    dispatch(sortByServer(pagination, limit, "size"));
  };
};
/**
 * this is a main actions for sorting on server
 * @param {Number} pagination
 * @param {Number} limit
 * @param {String} sortBy value must be size,price,id,null
 */
const sortByServer = (pagination, limit, sortBy) => {
  return (dispatch, getState) => {
    dispatch(fetchProducts(true, pagination, limit, sortBy));
  };
};
export const resetSortByServer = () => ({ type: RESET_SORT_BY_SERVER });
export const setSortByIdServer = () => ({
  type: SORT_BY_ID_SERVER,
  payload: "id"
});
export const setSortByPriceServer = () => ({
  type: SORT_BY_PRICE_SERVER,
  payload: "price"
});
export const setSortBySizeServer = () => ({
  type: SORT_BY_SIZE_SERVER,
  payload: "size"
});
