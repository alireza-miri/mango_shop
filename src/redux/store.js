import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import {
  posts,
  OnePost,
  login,
  singup,
  profile,
  token,
  chekLogin,
  getUser,
  Changepassword,
  changeprofile,
  UploadAvatar,
  saveOneProduct,
  sendAddress,
  orders,
  OneOrder,
  address
} from "./reducer";
const reducers = combineReducers({
  posts,
  OnePost,
  login,
  singup,
  profile,
  token,
  chekLogin,
  getUser,
  Changepassword,
  changeprofile,
  UploadAvatar,
  saveOneProduct,
  sendAddress,
  orders,
  OneOrder,
  address
});
const middleWare = [thunk];
const userToken = JSON.parse(localStorage.getItem("token"));
const userLogin = JSON.parse(localStorage.getItem("login"));
const OneProduct = JSON.parse(localStorage.getItem("product"));
const user = JSON.parse(localStorage.getItem("getUser"));
const initialState = {
  token: userToken,
  chekLogin: userLogin,
  getUser: user,
  saveOneProduct: OneProduct,
};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
