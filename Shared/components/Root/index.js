import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../../../Reducers";
import thunkMiddleware from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);
const store = createStore(rootReducer, undefined, composedEnhancers);

export default class Root extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}
