import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {
      token: null,
      user: null,
      orders: [],
      favorites: [],
      isFetching: false,
      error: false,
    };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    //! login
    authRequest: (state) => {
      state.isFetching = true;
    },
    authSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = false;
    },
    authFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.orders = [];
      state.favorites = [];
      state.error = false;

    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
    },
    addOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
    },
    ordersRequest: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    ordersSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
    },
    ordersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload.id];
    },
    removeFavorite: (state, action) => {
      const newItems = [...state.favorites].filter((e) => e !== action.payload);
      state.favorites = newItems;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const {
  setUser,
  authRequest,
  authSuccess,
  authFailure,
  logout,
  setToken,
  setOrders,
  addOrder,
  ordersRequest,
  ordersSuccess,
  ordersFailure,
  setFavorites,
  addFavorite,
  removeFavorite,
} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
