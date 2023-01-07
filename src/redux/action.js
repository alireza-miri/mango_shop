import { loading, success, failed } from "../constansts";
import axios from "axios";

export const getPosts = () => async (dispatch, getState) => {
  dispatch({
    type: loading,
    payload: { data: [], loading: true, error: "" },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/product");
    dispatch({
      type: success,
      payload: { data: [...data], loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: failed,
      payload: { data: [], loading: false, error: error.message },
    });
  }
};

export const getOnePost = (productId) => async (dispatch, getState) => {
  dispatch({
    type: loading,
    payload: { data: [], loading: true, error: "" },
  });
  try {
    const { data } = await axios.get(
      `http://kzico.runflare.run/product/${productId}`
    );
    dispatch({
      type: success,
      payload: { data: [data], loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: failed,
      payload: { data: [], loading: false, error: error.message },
    });
  }
};
export const cartProduct = (product) => async (dispatch, getState) => {
  // const array = [...JSON.parse(localStorage.getItem("product") ?? "[]")];
  product[0].qty = 1;
  const array = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  array.push(product[0]);
  localStorage.setItem("product", JSON.stringify(array));
};

export const plusQty = (id) => async (dispatch, getState) => {
  const array = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  array.forEach((cartItem) => {
    if (cartItem._id === id && cartItem.countInStock > cartItem.qty) {
      ++cartItem.qty;
    }
  });
  localStorage.setItem("product", JSON.stringify(array));
};
export const removeItemm = (id) => (dispatch, getState) => {
  const array = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  array.forEach((cartItem) => {
    if (cartItem._id === id) {
      array.splice(id, 1);
    }
  });
  localStorage.setItem("product", JSON.stringify(array));
};
export const minusQty = (id) => async (dispatch, getState) => {
  const array = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product"))
    : [];
  array.forEach((cartItem) => {
    if (cartItem._id === id && 1 < cartItem.qty) {
      --cartItem.qty;
    }
  });
  localStorage.setItem("product", JSON.stringify(array));
};
export const sendLogin = (username, password) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("http://kzico.runflare.run/user/login", {
      email: `${username}`,
      password: `${password}`,
    });

    dispatch({
      type: "setToken",
      payload: data.user.token,
    });
    dispatch({
      type: "checkLogin",
      payload: data.success,
    });
    localStorage.setItem("token", JSON.stringify(getState().token));
    localStorage.setItem("login", JSON.stringify(getState().chekLogin));
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: failed,
      payload: { data: [], error: [answer] },
    });
  }
};
export const sendSingUp =
  (username, email, password, number) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: `${username}`,
          email: `${email}`,
          password: `${password}`,
          mobile: `${number}`,
        }
      );
      dispatch({
        type: success,
        payload: { data: [data], error: [] },
      });
    } catch (error) {
      const answer = error.response.data;
      dispatch({
        type: failed,
        payload: { data: [], error: [answer] },
      });
    }
  };
export const getProfile = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
      headers: {
        authorization: `Bearer ${getState().token} `,
      },
    });

    dispatch({
      type: "user",
      payload: data.user,
    });
    localStorage.setItem("user", JSON.stringify(getState().getUser));
  } catch (error) {
    dispatch({
      type: failed,
      payload: error.response.data ,
    });
    localStorage.removeItem("token");
    localStorage.setItem("login",JSON.stringify(false));
   
   
  }
};
export const changePaswword =
  (oldPas, newPas) => async (dispatch, getState) => {
    try {
      const { data } = await axios.put(
        "http://kzico.runflare.run/user/change-password",
        {
          old_password: `${oldPas}`,
          new_password: `${newPas}`,
        },
        {
          headers: {
            authorization: `Bearer ${getState().token} `,
          },
        }
      );
      dispatch({
        type: "changePaswword",
        payload: { data: [data], error: [] },
      });
    } catch (error) {
      const answer = error.response.data;
      dispatch({
        type: failed,
        payload: { data: [], error: [answer] },
      });
    }
  };

export const changeprofile =
  (firstName, lastName, gender, city, age) => async (dispatch, getState) => {
    try {
      const { data } = await axios.put(
        "http://kzico.runflare.run/user/change-profile",
        {
          firstname: `${firstName}`,
          lastname: `${lastName}`,
          gender: `${gender}`,
          age: `${age}`,
          city: `${city}`,
        },
        {
          headers: {
            authorization: `Bearer ${getState().token} `,
          },
        }
      );
      dispatch({
        type: "changeProfile",
        payload: { data: [data], error: [] },
      });
    } catch (error) {
      const answer = error.response.data;
      dispatch({
        type: "failed",
        payload: { data: [], error: [answer] },
      });
    }
  };
export const uploadavatar = (img) => async (dispatch, getState) => {
  const formData = new FormData();
  formData.append("profile-image", img);
  try {
    const { data } = await axios.post(
      "http://kzico.runflare.run/user/profile-image",
      formData,
      {
        headers: {
          authorization: `Bearer ${getState().token} `,
        },
      }
    );
    dispatch({
      type: "UploadAvatar",
      payload: { data: [data], error: [] },
    });
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: "failed",
      payload: { data: [], error: [answer] },
    });
  }
};
export const senAddress =
  (city, address, postal, number) => async (dispatch, getState) => {
    const getOrderItems = JSON.parse(localStorage.getItem("orderItems"));
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: getOrderItems,
          shippingAddress: {
            address: `${address}`,
            city: `${city}`,
            postalCode: `${postal}`,
            phone: `${number}`,
          },
          paymentMethod: "cash",
          shippingPrice: "5",
          totalPrice: JSON.parse(localStorage.getItem("totalPrice")),
        },
        {
          headers: {
            authorization: `Bearer ${getState().token} `,
          },
        }
      );
      localStorage.setItem("checkOut", JSON.stringify(data));
      dispatch({
        type: success,
        payload: { data: [data], error: [] },
      });
    } catch (error) {
      const answer = error.response.data;
      dispatch({
        type: failed,
        payload: { data: [], error: [answer] },
      });
    }
  };
export const AllOrder = () => async (dispatch, getState) => {
  dispatch({
    type: loading,
    payload: { data: [], error: [], loading: true },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/order/", {
      headers: {
        authorization: `Bearer ${getState().token} `,
      },
    });
    dispatch({
      type: success,
      payload: { data: [...data], error: [], loading: false },
    });
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: failed,
      payload: { data: [], error: [answer], loading: false },
    });
  }
};
export const getOneOrder = (orderId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `http://kzico.runflare.run/order/${orderId}`,
      {
        headers: {
          authorization: `Bearer ${getState().token} `,
        },
      }
    );
    dispatch({
      type: success,
      payload: { data: [data], error: [] },
    });
  } catch (error) {
    const answer = error.response.data;
    dispatch({
      type: failed,
      payload: { data: [], error: [answer] },
    });
  }
};
export const AddressAction =
  (address, city, postal, number) => (dispatch, getState) => {
    dispatch({
      type: "submitAddress",
      payload: { city: city, postal: postal, number: number, address: address },
    });
  };
