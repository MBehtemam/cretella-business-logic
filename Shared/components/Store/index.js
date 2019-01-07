import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../../../Reducers";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "../../../middleweare/logger";
import monitorReducerEnhancer from "../../../enhancers/monitorReducer";

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(middlewareEnhancer)
);

export default store;
