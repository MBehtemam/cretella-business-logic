import {
  SORT_BY_ID_CLIENT_ASC,
  SORT_BY_ID_CLIENT_DESC,
  SORT_BY_PRICE_CLIENT_ASC,
  SORT_BY_PRICE_CLIENT_DESC,
  SORT_BY_SIZE_CLIENT_ASC,
  SORT_BY_SIZE_CLIENT_DESC
} from "../Constants/ActionTypes";
/**
 * this method sort sort products by id in accending
 */
export const sortByIdASC = () => ({ type: SORT_BY_ID_CLIENT_ASC });
export const sortByIdDESC = () => ({ type: SORT_BY_ID_CLIENT_DESC });
