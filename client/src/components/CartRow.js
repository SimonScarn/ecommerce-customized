import { useDispatch } from "react-redux";
import { removeItem, changeQuantity } from "../store/slices/cartSlice";
import {
  Container,
  Content,
  ProductImg,
  ProductInfo,
  ProductQuantity,
  InputQuantity,
  Price,
  DeleteBtn,
} from "../styles/CartRow.styled";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function CheckoutRow({ item, quantity }) {
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(removeItem({ id: item.id }));
  }
  function addQuantity() {
    dispatch(changeQuantity({ id: item.id, type: "INCREMENT" }));
  }
  function subQuantity() {
    dispatch(changeQuantity({ id: item.id, type: "DECREMENT" }));
  }
  function inputQuantity(e) {
    dispatch(
      changeQuantity({
        id: item.id,
        value: parseInt(e.target.value),
        type: "CUSTOM",
      })
    );
  }





  return (
    <Container>
      <Content>
        <ProductImg src={item.image}/>
        <ProductInfo>
          <Tooltip title={item.title} placement="top-start">
            <h2>{item.title}</h2>
          </Tooltip>
          <h3>{item.price}$</h3>
        </ProductInfo>
        <ProductQuantity>
          <IconButton onClick={subQuantity}>
            <RemoveIcon />
          </IconButton>
          <InputQuantity
            value={
              quantity
            } 
            disabled
          />
          <IconButton onClick={addQuantity}>
            <AddIcon />
          </IconButton>
        </ProductQuantity>
        <Price>
          <span>{(item.price * quantity).toFixed(2)}</span>$
        </Price>
        <DeleteBtn onClick={removeFromCart}>
          <DeleteOutlineIcon />
        </DeleteBtn>
      </Content>
    </Container>
  );
}

export default CheckoutRow;
