import { createStore, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import bucket from "./modules/bucket";

// import quiz from "./modules/quiz";
// import rank from "./modules/rank";

export const history = createBrowserHistory();

const middlewares = [thunk];

const rootReducer = combineReducers({ bucket });
// const rootReducer = combineReducers({ quiz, rank });
const store = createStore(rootReducer);

export default store;
