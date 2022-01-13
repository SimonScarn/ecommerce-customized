import { Link } from "react-router-dom";
import {
  Container,
  Left,
  Right,
  Title,
  ItemLink,
} from "../../styles/OrderRow.styled";

function OrderRow({ item }) {
  return (
    <Container>
      <Left>
        <img src={item.item.image} alt="item image" />
        <div>
          <ItemLink to={`/shop/product/${item.item.id}`}>
            <Title>{item.item.title}</Title>
          </ItemLink>
        </div>
      </Left>
      <Right>
        <p>
          <span>{item.quantity}</span>x<span>{item.item.price}</span>$
        </p>
        <p>
          <strong>
            <span>{item.quantity * item.item.price}</span>$
          </strong>
        </p>
      </Right>
    </Container>
  );
}

export default OrderRow;
