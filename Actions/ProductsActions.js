import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  PRODUCTS_END_OF_PRODUCTS,
  PRODUCTS_ADD_BATCH,
  PRODUCTS_SET_BATCH
} from "../Constants/ActionTypes";
import fetch from "cross-fetch";
import { ServerMainUrl } from "../Constants/Constants";
import GenerateProductsRequestUrl from "../Helpers/GenerateRequestProductsUrl";
import ProductReformer from "../Helpers/ProductReformer";
import {
  transferPreloadedToProducts,
  fetchPreloadedProducts,
  setPreloadedProduct,
  clearPreloadedProducts
} from "./preloadedProductActions";
import { increasePagination, setPagination } from "./PaginationActions";
/**
 *
 * @param {Boolean} reload reload whole products list or just add
 * @param {Number} page pagination number
 * @param {Number} limits limist of product
 * @param {Number} sort sort by product
 */
export const fetchProducts = (
  reload = false,
  page = 1,
  limits = 15,
  sort = null
) => {
  return (dispatch, getState) => {
    const {
      pagination,
      fetchStatus: { isFetching }
    } = getState();
    if (isFetching) return;
    if (page < pagination) return;
    dispatch(fetchProductsRequest());
    //If Reload is false then ad preloaded product
    if (!reload) {
      dispatch(transferPreloadedToProducts());
      dispatch(increasePagination());
    } else {
      dispatch(setPagination(1));
      dispatch(clearPreloadedProducts());
    }
    const newPage = reload ? 1 : page;
    ///
    fetch(GenerateProductsRequestUrl(ServerMainUrl, newPage, limits, sort))
      .then(
        response => response.json(),
        error => {
          dispatch(fetchProductsFailed());
        }
      )
      .then(json => {
        dispatch(fetchProductsSuccess()); //successfully fetch
        if (json.length === 0) {
          //we haven't any products
          dispatch(endOfProducts());
        } else {
          if (reload) {
            dispatch(
              setBatchProduct(json.map(product => ProductReformer(product)))
            );
            dispatch(fetchPreloadedProducts(newPage + 1, limits, sort));
          } else {
            dispatch(
              setPreloadedProduct(json.map(product => ProductReformer(product)))
            );
            dispatch(dispatch(increasePagination()));
          }
        }
      });
  };
};

/**
 * this action is for start requestion
 */
const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });
const fetchProductsFailed = () => ({ type: FETCH_PRODUCTS_FAILURE });
const fetchProductsSuccess = () => ({ type: FETCH_PRODUCTS_SUCCESS });
const endOfProducts = () => ({ type: PRODUCTS_END_OF_PRODUCTS });
export const addBatchProducts = products => ({
  type: PRODUCTS_ADD_BATCH,
  payload: {
    products
  }
});

const setBatchProduct = products => ({
  type: PRODUCTS_SET_BATCH,
  payload: {
    products
  }
});

export const initialProducts = () => {
  return (dispatch, getState) => {
    const { pagination, limit, sortByOnServer } = getState();
    dispatch(fetchProducts(true, pagination, limit, sortByOnServer));
  };
};

export const loadMoreProducts = () => {
  return (dispatch, getState) => {
    const { pagination, limit, sortByOnServer } = getState();
    dispatch(fetchProducts(false, pagination + 1, limit, sortByOnServer));
  };
};
