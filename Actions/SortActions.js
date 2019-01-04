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
export const sortByIdASC = () => ({ type: SORT_BY_ID_CLIENT_ASC });
/**
 * this actions sort products by id in descending
 */
export const sortByIdDESC = () => ({ type: SORT_BY_ID_CLIENT_DESC });
/**
 * this actions sort products by price in ascending
 */
export const sortByPriceASC = () => ({ type: SORT_BY_PRICE_CLIENT_ASC });
/**
 * this action sort by price in descending
 */
export const sortByPriceDESC = () => ({ type: SORT_BY_PRICE_CLIENT_DESC });
/**
 * this action sort products by size in ascending
 */
export const sortBySizeASC = () => ({ type: SORT_BY_SIZE_CLIENT_ASC });
/**
 * this action sort products by size in descending
 */
export const sortBySizeDESC = () => ({ type: SORT_BY_SIZE_CLIENT_DESC });
/**
 * this action reset the sorting of product
 */
export const noSort = () => ({ type: SORT_BY_NO_SORT });
