import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  PRODUCTS_END_OF_PRODUCTS
} from "../Constants/ActionTypes";
import fetch from "cross-fetch";
import { ServerMainUrl } from "../Constants/Constants";

export const fetchProducts = (page = 1, limits = 15, sort = null) => {
  return dispatch => {
    dispatch(fetchProductsRequest());
    fetch();
  };
};

/**
 * this action is for start requestion
 */
const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });
