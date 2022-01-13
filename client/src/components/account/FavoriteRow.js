import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { selectUser } from "../../store/slices/userSlice";
import {
  addItem,
  changeQuantity,
  selectItems,
} from "../../store/slices/cartSlice";
import {getProduct} from '../../utils/api/fakestore';
import { removeFavoriteDB } from "../../utils/api/apiCalls";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  Container,
  LoaderContainer,
  Info,
  Toolbar,
  Title,
  RemoveBtn,
} from "../../styles/FavoriteRow.styled";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Loader from "react-loader-spinner";

function FavoriteRow({ index }) {
  const dispatch = useDispatch();
  const {user, token, favorites} = useSelector(selectUser);
  const items = useSelector(selectItems);
  const [item, setItem] = useState({});

  useEffect(() => {
    getProduct(index)
      .then((data) => setItem(data))
      .catch((err) => console.error("lbc", err));
  }, [favorites]);

  function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    const isDups = items.some((e) => e.item.id === item.id);
    isDups
      ? dispatch(changeQuantity({ id: item.id, type: "INCREMENT" }))
      : dispatch(addItem({ item, quantity: 1 }));
  } 

  function deleteFavorite() {
    dispatch(removeFavoriteDB(token, index));
  }

  return (
    <Container>
      {(item).length === 0 ? (
        <LoaderContainer>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
          <p>fetching favorite product...</p>
        </LoaderContainer>
      ) : (
        <>
          <img src={item?.image} alt="product image" />
          <Info>
            <Link
              to={`/shop/product/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Title>{item?.title}</Title>
            </Link>
            <p>
              <span>{item?.price}</span>$
            </p>
          </Info>
          <Toolbar>
            <RemoveBtn onClick={deleteFavorite}>
              <HighlightOffIcon />
            </RemoveBtn>
            <Button
              onClick={addToCart}
              endIcon={<AddShoppingCartIcon />}
              variant="contained"
            >
              Add to cart
            </Button>
          </Toolbar>
        </>
      )}
    </Container>
  );
}

export default FavoriteRow;
