import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  changeQuantity,
  selectItems,
} from "../store/slices/cartSlice";
import { getProduct, getRecommended } from "../utils/api/fakestore";
import { default as ProductItem } from "../components/Product";
import {
  Container,
  ProductContainer,
  ImageContainer,
  Body,
  Rating,
  Price,
  Toolbar,
  ProductQuantity,
  InputQuantity,
  CartBtn,
  Recommended,
  ItemsContainer,
  NavBtn,
} from "../styles/ProductView.styled";
import { BackBtn } from "../styles/Global.styled";
import { useMediaQuery } from "react-responsive";
import { Button, Icon, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRef } from "react";

function ProductView() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [recommended, setRecommended] = useState([]);
  const isDesktop = useMediaQuery({ query: "(min-width: 700px)" });

  useEffect(() => {
    /*   if (location.state === null) { */
    let idx = location.pathname.split("/")[3];
    getProduct(idx)
      .then((data) => {
        if (data) {
          setProduct(data);
          return getRecommended(data.category);
        } else {
          navigate("/404");
        }
      })
      .then((data) => {
        setRecommended(data);
      });
    /* } else {
      console.log("else");
      setProduct(location.state.product);
      setRecommended(() => getRecommended(location.state.product.category))
    } */
  }, [location]);

  function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    if (quantity === 0 || isNaN(quantity)) {
      return;
    }
    const isPresent = items.some((e) => e.item.id === product.id);
    isPresent
      ? dispatch(
          changeQuantity({
            id: product.id,
            type: "INCREMENT",
            quantity: quantity,
          })
        )
      : dispatch(addItem({ item: product, quantity: quantity }));
  }

  //! out to utils
  function getRating(rate) {
    let starsNum = Math.floor(rate);
    return starsNum;
  }

  const itemsRef = useRef();
  const scroll = (scrollOffset) => {
    itemsRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Container>
      <BackBtn onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </BackBtn>
      <ProductContainer>
        <ImageContainer>
          <img src={product.image} />
        </ImageContainer>
        <Body>
          <h2>{product.title}</h2>
          <Rating>
            <span>
              {[...Array(3)].map((i) => (
                <StarRateIcon style={{ color: "gold" }} />
              ))}
            </span>
          </Rating>
          <Price>
            <span>
              <strong>{product.price}</strong>
            </span>
            $
          </Price>
          <p>{product.description}</p>
          <Toolbar>
            <ProductQuantity>
              <IconButton
                onClick={() => setQuantity((quantity) => (quantity -= 1))}
              >
                <RemoveIcon />
              </IconButton>
              <InputQuantity
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                type="number"
                min={1}
              />
              <IconButton
                onClick={() => setQuantity((quantity) => (quantity += 1))}
              >
                <AddIcon />
              </IconButton>
            </ProductQuantity>
            <CartBtn
              onClick={addToCart}
              startIcon={<AddShoppingCartIcon />}
              variant="contained"
              data-testid="cartBtn"
            >
              Add to cart
            </CartBtn>
          </Toolbar>
        </Body>
      </ProductContainer>
      <Recommended>
        {isDesktop && recommended.length > 0 && (
          <div>
            <h2>You may also like</h2>
            <ItemsContainer ref={itemsRef}>
              {recommended?.map((e) => (
                <Link
                  to={`/shop/product/${e.id}`}
                state={{ product: e }}
                  style={{ textDecoration: "none", color: "inherit", display: 'inline-block' }}
                >
                  <ProductItem item={e} key={e.id} />
                </Link>
              ))}
            </ItemsContainer>
            <NavBtn direction="left" onClick={() => scroll(-400)}>
              <ArrowBackIosIcon />
            </NavBtn>
            <NavBtn direction="right" onClick={() => scroll(400)}>
              <ArrowForwardIosIcon />
            </NavBtn>
          </div>
        )}
      </Recommended>
    </Container>
  );
}

export default ProductView;
