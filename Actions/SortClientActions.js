import {
  SORT_BY_ID_CLIENT_ASC,
  SORT_BY_ID_CLIENT_DESC,
  SORT_BY_PRICE_CLIENT_ASC,
  SORT_BY_PRICE_CLIENT_DESC,
  SORT_BY_SIZE_CLIENT_ASC,
  SORT_BY_SIZE_CLIENT_DESC,
  SORT_BY_NO_SORT
} from "../Constants/ActionTypes";
/**
 * this actions sort  products by id in ascending
 */
export const sortByIdClientASC = () => ({ type: SORT_BY_ID_CLIENT_ASC });
/**
 * this actions sort products by id in descending
 */
export const sortByIdClientDESC = () => ({ type: SORT_BY_ID_CLIENT_DESC });
/**
 * this actions sort products by price in ascending
 */
export const sortByPriceClientASC = () => ({ type: SORT_BY_PRICE_CLIENT_ASC });
/**
 * this action sort by price in descending
 */
export const sortByPriceClientDESC = () => ({
  type: SORT_BY_PRICE_CLIENT_DESC
});
/**
 * this action sort products by size in ascending
 */
export const sortBySizeClientASC = () => ({ type: SORT_BY_SIZE_CLIENT_ASC });
/**
 * this action sort products by size in descending
 */
export const sortBySizeClientDESC = () => ({ type: SORT_BY_SIZE_CLIENT_DESC });
/**
 * this action reset the sorting of product
 */
export const resetSortClient = () => ({ type: SORT_BY_NO_SORT });
