import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import gamestate from "./gamestate";
import modalstate from "./modalstate";
import persistState from "redux-localstorage";

const reducer = combineReducers({ gamestate, modalstate });

const middleware = applyMiddleware(
  thunkMiddleware
  // createLogger({ collapsed: true }) // comment out for production
);

const enhancer = compose(persistState());

const store = createStore(reducer, middleware, enhancer);

export default store;
export * from "./gamestate";
export * from "./modalstate";
