import { createStore, combineReducers, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import bucket from "./modules/bucket";
import thunk from "redux-thunk";

// import quiz from "./modules/quiz";
// import rank from "./modules/rank";

export const history = createBrowserHistory();

//thunk를 array형태로 가져와서 applyMiddleware에 넣어주기
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

//리듀서 연결하기
const rootReducer = combineReducers({ bucket });
// const rootReducer = combineReducers({ quiz, rank });

//스토어
const store = createStore(rootReducer, enhancer);

export default store;
