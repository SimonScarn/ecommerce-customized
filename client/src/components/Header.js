import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectItems, emptyCart, selectTotal } from "../store/slices/cartSlice";
import { selectUser, logout } from "../store/slices/userSlice";
import { getCartNumber } from "../utils/items";
import { useMediaQuery } from "react-responsive";
import {
  Container,
  Left,
  Logo,
  Search,
  Input,
  Burger,
  Right,
  HeaderLink,
  CartNumber,
  Icon,
  LogoutBtn,
  DropdownContainer,
  Dropdown,
  DropdownLink,
  CartMobile,
  Code
} from "../styles/Header.styled";
import { IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header({ changeQuery }) {
  const prevLocation = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [cartNumber, setCartNumber] = useState(0);
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  useEffect(() => {
    setCartNumber(getCartNumber(items));
  }, [items]);

  useEffect(() => {
    setOpen(false);
  }, [prevLocation]);

  useEffect(() => {
    searchProducts(query);
  }, [query]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  function searchProducts(q) {
    if (query === "") {
      let newLocation = prevLocation.pathname;
      navigate(newLocation);
    } else {
      navigate(`/shop/?title=${q}`);
    }
  }

  function clearQuery() {
    setQuery("");
    inputRef.current.focus();
  }

  function logOut() {
    setOpen(false);
    dispatch(logout());
    dispatch(emptyCart());
    localStorage.removeItem("user");
    navigate("/shop");
  }

  const handleClickOutside = (event) => {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  function accountClick() {
    if (!user) {
      navigate("/login");
      return;
    }
    setShowDropdown((prev) => !prev);
  }

  return (
    <Container>
      <Code>
        <Button style={{height: "50px", borderRadius:"1rem"}} href="https://github.com/SimonScarn/ecommerce-customized" target="blank" startIcon={<GitHubIcon />}>CODE</Button>
      </Code>
      <Left>
        <Link to="/shop">
          <Logo src="https://img.icons8.com/cute-clipart/64/000000/shopping-cart.png" />
        </Link>
      </Left>
      <Search isFocused={focus}>
        <Icon>
          <SearchIcon />
        </Icon>
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          data-testid="search"
        />
        <Icon onClick={clearQuery}>
          <ClearIcon />
        </Icon>
      </Search>
      <Burger onClick={() => setOpen(!open)}>
        {open ? <MenuOpenIcon /> : <MenuIcon />}
      </Burger>

      <Right open={open}>
        {!user && (
          <HeaderLink to="/login" data-testid="loginLink">
            <p>Login</p>
          </HeaderLink>
        )}
        {!isMobile && (
          <DropdownContainer onClick={accountClick} ref={dropRef}>
            <p>account</p>

            {!isMobile && showDropdown && (
              <Dropdown>
                <p>
                  {" "}
                  Hi <span>{user?.username}</span>!
                </p>
                <DropdownLink to="/account" bold>
                  My account
                </DropdownLink>
                <DropdownLink to="/account/orders">*Orders</DropdownLink>
                <DropdownLink to="/account/favorites">*Favorites</DropdownLink>
                <DropdownLink to="/account/userinfo">*Userinfo</DropdownLink>
                <hr />
                <div>
                  <ShoppingCartIcon />
                  <p>
                    <span>
                      <strong>{cartNumber}</strong>
                    </span>{" "}
                    items
                  </p>
                </div>
                <p>
                  Cart total:{" "}
                  <span>
                    <strong>{total.toFixed(2)}</strong>
                  </span>
                  $
                </p>
              </Dropdown>
            )}
          </DropdownContainer>
        )}

        {/* -------------------MOBILE------------------- */}
        {isMobile && (
          <>
            <HeaderLink to="/account">
              <PersonIcon />
              <p>account</p>
            </HeaderLink>
            {user && (
              <>
                <HeaderLink to="/account/orders">
                  {isMobile && <CardMembershipIcon />}
                  <p>orders</p>
                </HeaderLink>
                <HeaderLink to="/account/favorites">
                  {isMobile && <FavoriteIcon />}
                  <p>favorites</p>
                </HeaderLink>
              </>
            )}
          </>
        )}
        <HeaderLink to="/cart">
          <ShoppingCartIcon />
          <CartNumber data-testid="cartNumber">{cartNumber}</CartNumber>
          <p>Cart</p>
        </HeaderLink>
        {user && (
          <LogoutBtn
            variant="contained"
            onClick={logOut}
            data-testid="logoutBtn"
          >
            <p>Logout</p>
          </LogoutBtn>
        )}
      </Right>
      {isMobile && prevLocation.pathname.includes("/shop") && open === false && (
        <CartMobile onClick={() => navigate("/cart")}>
          <IconButton style={{ width: "100px", height: "100px" }}>
            <ShoppingCartIcon fontSize="large" />
          </IconButton>
          <span>{cartNumber}</span>
        </CartMobile>
      )}
    </Container>
  );
}

export default Header;
