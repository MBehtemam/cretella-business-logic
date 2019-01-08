import SortACS from "../Helpers/SortACS";
import SortDESC from "../Helpers/SortDESC";
import {
  SORT_BY_ID_CLIENT_ASC,
  SORT_BY_ID_CLIENT_DESC,
  SORT_BY_NO_SORT,
  SORT_BY_PRICE_CLIENT_ASC,
  SORT_BY_PRICE_CLIENT_DESC,
  SORT_BY_SIZE_CLIENT_ASC,
  SORT_BY_SIZE_CLIENT_DESC,
  PRODUCTS_SET_BATCH,
  PRODUCTS_ADD_BATCH
} from "../Constants/ActionTypes";
const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SORT_BY_ID_CLIENT_ASC:
      return SortACS(state, "id");
    case SORT_BY_ID_CLIENT_DESC:
      return SortDESC(state, "id");
    case SORT_BY_PRICE_CLIENT_ASC:
      return SortACS(state, "price");
    case SORT_BY_PRICE_CLIENT_DESC:
      return SortDESC(state, "price");
    case SORT_BY_SIZE_CLIENT_ASC:
      return SortACS(state, "size");
    case SORT_BY_SIZE_CLIENT_DESC:
      return SortDESC(state, "size");
    case SORT_BY_NO_SORT:
      return state;
    case PRODUCTS_SET_BATCH:
      return action.payload.products;
    case PRODUCTS_ADD_BATCH:
      return [...state, ...action.payload.products];
    default:
      return state;
  }
};
export default productsReducer;
