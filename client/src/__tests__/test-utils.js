import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import cartReducer from "../store/slices/cartSlice";
import userReducer from "../store/slices/userSlice";
import { createStore, combineReducers } from "@reduxjs/toolkit";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const reducer = combineReducers({ cart: cartReducer, user: userReducer });

const render = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
    
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

export { render };
