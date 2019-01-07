import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../../../Reducers";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "../../../middleweare/logger";
import monitorReducerEnhancer from "../../../enhancers/monitorReducer";

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);
const composedEnhancers = compose(
  middlewareEnhancer,
  monitorReducerEnhancer
);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
