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
  return dispatch => {
    dispatch(fetchProductsRequest());
    fetch(GenerateProductsRequestUrl(ServerMainUrl, page, limits, sort))
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
          } else {
            dispatch(
              addBatchProducts(json.map(product => ProductReformer(product)))
            );
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
const addBatchProducts = products => ({
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
