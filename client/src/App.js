import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "./store/slices/userSlice";
import { selectItems } from "./store/slices/cartSlice";
import { getFavoritesDB, getOrders } from "./utils/api/apiCalls";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
import Home from "./views/Home.js";
import Cart from "./views/Cart.js";
import Account from "./views/Account.js";
import Orders from "./components/account/Orders.js";
import ProductView from "./views/Product";
import NotFound from "./views/NotFound";
import Favorites from "./components/account/Favorites";
import Payments from "./components/account/Payments";
import UserInfo from "./components/account/UserInfo";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const items = useSelector(selectItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (user.user && user.token) {
      dispatch(getOrders(user.user._id, user.token));
      dispatch(getFavoritesDB(user.token));
    }
  }, [user.user, user.token]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/shop" />} />
            <Route path="/shop" element={<Home />} />
            <Route path="/shop/:query" element={<Home />} />
            <Route path="/shop/product/:id" element={<ProductView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/orders" element={<Orders />} />
            <Route path="/account/payments" element={<Payments />} />
            <Route path="/account/favorites" element={<Favorites />} />
            <Route path="/account/userinfo" element={<UserInfo />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
