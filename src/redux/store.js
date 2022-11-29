import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { posts,OnePost } from "./reducer";
const reducers = combineReducers({ posts ,OnePost});
const middleWare = [thunk];

const initialState = {};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
