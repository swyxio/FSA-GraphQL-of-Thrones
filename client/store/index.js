import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import user from "./user";
import gamestate from "./gamestate";
import modalstate from "./modalstate";
import persistState from "redux-localstorage";

const reducer = combineReducers({ user, gamestate, modalstate });
// const middleware = applyMiddleware(
//   thunkMiddleware,
//   createLogger({ collapsed: true })
// );
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);

const enhancer = compose(persistState());

const store = createStore(reducer, middleware, enhancer);

export default store;
export * from "./user";
export * from "./gamestate";
export * from "./modalstate";
