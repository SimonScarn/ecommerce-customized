import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  selectTotal,
  selectQuantity,
  emptyCart,
} from "../store/slices/cartSlice";
import { selectUser } from "../store/slices/userSlice";
import { v4 as uuidv4 } from "uuid";
import { getCartNumber } from "../utils/items";
import { createOrder } from "../utils/api/apiCalls";
import CartRow from "../components/CartRow";
import { BackBtn } from "../styles/Global.styled";
import {
  Container,
  Header,
  Body,
  BodyLeft,
  BodyRight,
  CheckoutBtn,
  Info,
  EmptyCartBtn,
  DetailsModal,
} from "../styles/Cart.styled";
import { Input } from "../styles/FormContainer.styled";
import LockIcon from "@mui/icons-material/Lock";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { user } = useSelector(selectUser);
  const quantity = useSelector(selectQuantity);

  function checkout() {
    if (!user) {
      dispatch(
        createOrder({
          userId: uuidv4(),
          amount: getCartNumber(items),
          address: "temp street",
          products: items,
          total,
        })
      );
      //? modal pops up -> enter details
    } else {
      dispatch(
        createOrder({
          userId: user._id,
          amount: getCartNumber(items),
          address: "boah road",
          products: items,
          total,
        })
      );
    }

    clearCart();
  }

  function clearCart() {
    if (!user) {
      localStorage.removeItem("cart");
    }
    dispatch(emptyCart());
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <DetailsModal open={open} onClose={handleClose}>
        <Input placeholder="dis fina be a breeze"></Input>
      </DetailsModal>
      <Header>
        <BackBtn onClick={() => navigate(-1)} center>
          <ArrowBackIcon />
        </BackBtn>

        {items.length ? (
          <>
            <h1>Your shopping cart</h1>
            <EmptyCartBtn
              onClick={clearCart}
              variant="contained"
              color="warning"
              startIcon={<DeleteForeverIcon />}
            >
              Empty cart
            </EmptyCartBtn>
          </>
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </Header>
      {items.length > 0 && (
        <>
          <Body>
            <BodyLeft>
              {items?.map(({ item, quantity }) => (
                <CartRow item={item} quantity={quantity} />
              ))}
            </BodyLeft>
            <BodyRight>
              <Info>
                <p>
                  Items: <span>{quantity}</span>
                </p>
                <p>
                  Total: <span>{total.toFixed(2)}</span>$
                </p>
              </Info>
              <CheckoutBtn
                onClick={checkout}
                variant="contained"
                startIcon={<LockIcon />}
              >
                Checkout
              </CheckoutBtn>
            </BodyRight>
          </Body>
        </>
      )}
    </Container>
  );
}

export default Cart;
