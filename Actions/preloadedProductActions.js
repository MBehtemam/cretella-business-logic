import { PRELOADED_PRODUCTS_CLEAR_LIST } from "../Constants/ActionTypes";
import { addBatchProducts } from "./ProductsActions";
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
    dispatch(addBatchProducts({ products: preloadeProducts }));
    dispatch(clearPreloadedProducts());
  };
};

export const fetchPreloadedProducts = ((page = 2),
(limits = 15),
(sort = null));
