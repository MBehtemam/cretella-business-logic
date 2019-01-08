import {
  INCREASE_PAGINATION_PAGE_NUMBER,
  SET_PAGINATION_PAGE_NUMBER
} from "../Constants/ActionTypes";

/**
 * this action increase page number of pagination by one
 */
export const increasePagination = () => ({
  type: INCREASE_PAGINATION_PAGE_NUMBER
});

/**
 * this action get page number and set it as pagination
 * @param {Number} number page that you want to set it as page of pagination
 */
export const setPagination = (number = 1) => ({
  type: SET_PAGINATION_PAGE_NUMBER,
  payload: {
    number
  }
});
