import { apiRequest } from "./requests";
import {
  authFailure,
  authRequest,
  authSuccess,
  ordersRequest,
  ordersSuccess,
  ordersFailure,
  setUser,
  setOrders,
  addOrder,
  addFavorite,
  removeFavorite,
  setFavorites,
  setToken,
  logout,
} from "../../store/slices/userSlice";

//! auth
export const signIn = (email, password) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const { data } = await apiRequest.post("/auth/login", {
      email,
      password,
    });
    dispatch(authSuccess());
    dispatch(setUser({ user: data.user }));
    dispatch(setToken({ token: data.token }));
  } catch (err) {
    dispatch(authFailure());
    console.error(err);
  }
};

export const signUp =
  (email, password, username, setError) => async (dispatch) => {
    dispatch(authRequest());
    try {
      const res = await apiRequest.post("/auth/register", {
        email,
        password,
        username,
      });
      dispatch(authSuccess());
      dispatch(setUser({ user: res.data.user }));
      dispatch(setToken({ token: res.data.token }));
    } catch (err) {
      dispatch(authFailure());
      setError(err);
      console.error(err);
    }
  };

//! user
export const getUserInfo = async (token, setState) => {
  try {
    const { data } = await apiRequest.get("/user", {
      headers: {
        "x-auth-token": token,
      },
    });
    setState(data);
  } catch (err) {
    console.error(err);
  }
};

export const saveUserInfo = (token, body, setStatus) => async (dispatch) => {
  try {
    const { data } = await apiRequest.put("/user", body, {
      headers: {
        "x-auth-token": token,
      },
    });
    dispatch(setUser({ user: data.user }));
    setStatus("success");
  } catch (err) {
    setStatus("error");
    console.error(err);
  }
};

export const deleteUser = (token) => async (dispatch) => {
  try {
    const { data } = await apiRequest.delete(`/user`, {
      headers: {
        "x-auth-token": token,
      },
    });
    dispatch(logout());
  } catch (err) {
    console.error(err);
  }
};

export const checkPassword = async (userId, password) => {
  try {
    const { data } = await apiRequest.post(`/user/${userId}`, { password });
    return data.status;
  } catch (err) {
    console.error(err);
  }
};

//! favorites
export const addFavoriteDB = (token, item) => async (dispatch) => {
  try {
    const res = await apiRequest.put(
      '/user/favorite/add',
      { itemId: item.id },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    dispatch(addFavorite(item));
  } catch (err) {
    console.error(err);
  }
};

export const removeFavoriteDB = (token, itemId) => async (dispatch) => {
  try {
    const res = await apiRequest.delete(
      "/user/favorite/delete",
      {
        headers: {
          "x-auth-token": token,
        },
      },
      {
        itemId,
      }
    );
    dispatch(removeFavorite(itemId));
  } catch (err) {
    console.error(err);
  }
};

export const getFavoritesDB = (token) => async (dispatch) => {
  try {
    const { data } = await apiRequest.get(`/user/favorites`, {
      headers: {
        "x-auth-token": token,
      },
    });
    dispatch(setFavorites(data));
  } catch (err) {
    console.error(err);
  }
};

//! orders
export const getOrders = (id, token) => async (dispatch) => {
  dispatch(ordersRequest());
  try {
    const { data } = await apiRequest.get(`/orders/find/${id}`, {
      headers: {
        "x-auth-token": token,
      }
    });
    dispatch(ordersSuccess());
    dispatch(setOrders({ orders: data.orders }));
  } catch (err) {
    dispatch(ordersFailure());
    console.error(err);
  }
};

export const createOrder = (body) => async (dispatch) => {
  try {
    const req = await apiRequest.post("/orders/create", body);
    dispatch(addOrder(req.data.newOrder));
  } catch (err) {
    console.error(err);
  }
};
