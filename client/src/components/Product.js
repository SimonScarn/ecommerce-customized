import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addItem,
  changeQuantity,
  selectItems,
} from "../store/slices/cartSlice";
import { selectUser } from "../store/slices/userSlice";
import {
  createCart,
  updateCart,
  addFavoriteDB,
  removeFavoriteDB,
} from "../utils/api/apiCalls";
import {
  Container,
  ImageContainer,
  Info,
  Title,
  Toolbar,
  FavoriteBtn,
  CartBtn,
} from "../styles/ProductItem.styled";
import { Tooltip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarRateIcon from "@mui/icons-material/StarRate";

function Product({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const { user, token, favorites } = useSelector(selectUser);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites) {
      setIsFavorite(() => favorites.some((id) => id === item.id));
    }
  }, [favorites]);

  function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    const isDups = items.some((e) => e.item.id === item.id);
    isDups
      ? dispatch(changeQuantity({ id: item.id, type: "INCREMENT" }))
      : dispatch(addItem({ item, quantity: 1 }));
   }

  function toggleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      navigate("/login");
      return;
    }

    let isFaved = favorites.some((id) => id === item.id);

    if (isFaved) {
      dispatch(removeFavoriteDB(token, item.id));
      setIsFavorite(false);
    } else {
      dispatch(addFavoriteDB(token, item));
      setIsFavorite(true);
    }
  }

  function getRating() {
    let starsNum = Math.floor(item.rating.rate);
    return starsNum;
  }

  return (
    <Container>
      <ImageContainer>
        <img src={item.image} alt="product img" />
      </ImageContainer>
      <Info>
      <Tooltip title={item.title} placement="top-start">
            <Title>{item.title}</Title>
          </Tooltip>
        <span>
          {[...Array(getRating())].map((i) => (
            <StarRateIcon style={{ color: "yellow" }} />
          ))}
        </span>
        <p>{item.price.toFixed(2)}$</p>
      </Info>
      <Toolbar>
        <FavoriteBtn onClick={toggleFavorite}>
          {isFavorite ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </FavoriteBtn>
        <CartBtn
          onClick={addToCart}
          variant="contained"
          endIcon={<ShoppingCartIcon />}
        >
          Add to cart
        </CartBtn>
      </Toolbar>
    </Container>
  );
}

export default Product;
