import {
  INCREASE_PAGINATION_PAGE_NUMBER,
  SET_PAGINATION_PAGE_NUMBER
} from "../Constants/ActionTypes";

const paginationReducer = (state = 1, action) => {
  switch (action.type) {
    case SET_PAGINATION_PAGE_NUMBER: {
      return action.payload.number;
    }
    case INCREASE_PAGINATION_PAGE_NUMBER:
      return state + 1;
    default:
      return state;
  }
};

export default paginationReducer;
