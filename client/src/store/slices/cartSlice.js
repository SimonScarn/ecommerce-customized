import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      const newItems = [...state.items];
      const index = newItems.findIndex((e) => e.item.id === action.payload.id);
      if (index >= 0) newItems.splice(index, 1);
      state.items = newItems;
    },
    changeQuantity: (state, action) => {
      let newItems;
      switch (action.payload.type) {
        case "INCREMENT":
          newItems = [...state.items].map((e) => {
            if (e.item.id === action.payload.id) {
              if (action.payload.quantity) {
                e.quantity += action.payload.quantity;
              } else {
                e.quantity += 1;
              }
            }
          });
          break;
        case "DECREMENT":
          newItems = [...state.items].map((e, idx) => {
            if (e.item.id === action.payload.id) {
              if (e.quantity === 1) return;
              if (action.payload.quantity) {
                e.quantity -= action.payload.quantity;
              } else {
                e.quantity -= 1;
              }
            }
          });
          break;
        case "CUSTOM":
          newItems = [...state.items].map((e, idx) => {
            if (e.item.id === action.payload.id) {
              if (e.quantity <= 0) return;
              e.quantity = action.payload.value;
            }
          });
          break;
        default:
          break;
      }
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, changeQuantity, emptyCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectQuantity = (state) =>
  state.cart.items.reduce((total, item) => (total += item.quantity), 0);
export const selectTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => (total = total += item.quantity * item.item.price),
    0
  );

export default cartSlice.reducer;
