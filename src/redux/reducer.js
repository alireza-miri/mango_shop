import { loading, success, failed } from "../constansts";
export const posts = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case loading:
      return payload;
    case success:
      return payload;
    case failed:
      return payload;
    default:
      return state;
  }
};
export const OnePost = (
  state = { data: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case loading:
      return payload;
    case success:
      return payload;
    case failed:
      return payload;
    default:
      return state;
  }
};
export const login = (state = { data: [], error: [] }, { type, payload }) => {
  switch (type) {
    case success:
      return payload;
    case failed:
      return payload;
    default:
      return state;
  }
};
export const singup = (state = { data: [], error: [] }, { type, payload }) => {
  switch (type) {
    case success:
      return payload;
    case failed:
      return payload;
    default:
      return state;
  }
};
export const profile = (state = { data: {} }, { type, payload }) => {
  switch (type) {
    case success:
      return payload;

    default:
      return state;
  }
};
export const token = (state = "", { type, payload }) => {
  switch (type) {
    case "setToken":
      return payload;

    default:
      return state;
  }
};
export const chekLogin = (state = false, { type, payload }) => {
  switch (type) {
    case "checkLogin":
      return payload;

    default:
      return state;
  }
};
export const getUser = (state = [], { type, payload }) => {
  switch (type) {
    case "user":
      return payload;
      case failed:
        return payload;
    default:
      return state;
  }
};
export const Changepassword = (
  state = { data: [], error: [] },
  { type, payload }
) => {
  switch (type) {
    case "changePaswword":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
export const changeprofile = (
  state = { data: [], error: [] },
  { type, payload }
) => {
  switch (type) {
    case "changeProfile":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
export const address = (state = {city:"",address:"",number:"",postal:""}, { type, payload }) => {
  switch (type) {
    case "submitAddress":
      return payload;
    default:
      return state;
  }
};
export const UploadAvatar = (
  state = { data: [], error: [] },
  { type, payload }
) => {
  switch (type) {
    case "UploadAvatar":
      return payload;
    case "failed":
      return payload;
    default:
      return state;
  }
};
export const saveOneProduct = (state = [], { type, payload }) => {
  switch (type) {
    case "saveProduct":
      return payload;

    default:
      return state;
  }
};
export const sendAddress = (
  state = { data: [], error: [] },
  { type, payload }
) => {
  switch (type) {
    case success:
      return payload;
    case failed:
      return payload;
    default:
      return state;
  }
};
export const orders = (
  state = { data: [], cartList: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case loading:
      return payload;
    case success:
      return payload;
    case failed:
      return payload;
    default:
      return state;
  }
};
export const OneOrder = (
  state = { data: [], cartList: [], loading: false, error: "" },
  { type, payload }
) => {
  switch (type) {
    case loading:
      return payload;
    case success:
      return payload;
    case failed:
      return payload;
    default:
      return state;
  }
};
