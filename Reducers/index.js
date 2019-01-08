import { combineReducers } from "redux";
import limitReducer from "./limitReducer";
import fetchStatusReducer from "./fetchStatusReducer";
import paginationReducer from "./paginationReducer";
import productsReducer from "./productsReducer";
import sortyByOnServer from "./sortByOnServerReducer";
import adsReducer from "./adsReducer";
import preloadedProductsReducer from "./preloadedProductsReducer";

export default combineReducers({
  limit: limitReducer,
  fetchStatus: fetchStatusReducer,
  pagination: paginationReducer,
  products: productsReducer,
  sortByOnServer: sortyByOnServer,
  ads: adsReducer,
  preloadeProducts: preloadedProductsReducer
});
