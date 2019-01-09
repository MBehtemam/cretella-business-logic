import {
  PRELOADED_PRODUCTS_CLEAR_LIST,
  PRELOADED_PRODUCTS_SET
} from "../Constants/ActionTypes";
import { addBatchProducts } from "./ProductsActions";
import { increasePagination } from "./PaginationActions";
import fetch from "cross-fetch";
import { ServerMainUrl } from "../Constants/Constants";
import GenerateProductsRequestUrl from "../Helpers/GenerateRequestProductsUrl";
import ProductReformer from "../Helpers/ProductReformer";

/**
 * Clear list of preloaded products
 */
export const clearPreloadedProducts = () => ({
  type: PRELOADED_PRODUCTS_CLEAR_LIST
});

/**
 * Transfer preloaded products to products
 */
export const transferPreloadedToProducts = () => {
  return (dispatch, getState) => {
    const { preloadeProducts } = getState();
    dispatch(addBatchProducts(preloadeProducts));
    dispatch(clearPreloadedProducts());
  };
};

export const fetchPreloadedProducts = (page = 2, limits = 15, sort = null) => {
  return (dispatch, getState) => {
    const {
      fetchStatus: { isFetching }
    } = getState;
    if (isFetching) return;
    fetch(GenerateProductsRequestUrl(ServerMainUrl, page, limits, sort))
      .then(response => response.json(), error => {})
      .then(json => {
        dispatch(
          setPreloadedProduct(json.map(product => ProductReformer(product)))
        );
        dispatch(increasePagination());
      });
  };
};

export const setPreloadedProduct = products => ({
  type: PRELOADED_PRODUCTS_SET,
  payload: products
});
