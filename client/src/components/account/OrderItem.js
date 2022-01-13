import { formatDate } from "../../utils/items";
import OrderRow from "./OrderRow";

import { Container, Header, Body } from "../../styles/OrderItem.styled";

function OrderItem({ order }) {
  return (
    <Container>
      <Header>
        <p>
          Order no. <span>{order._id}</span> from{" "}
          <span>{formatDate(order.updatedAt)}</span>{" "}
        </p>
        <p status={`${order.status}`}>{order.status}</p>
      </Header>
      <Body>
        {order.products.map((item) => {
          return <OrderRow item={item} />;
        })}
      </Body>
      <h4>
        Total:{" "}
        <strong>
          <span>{order.total.toFixed(2)}</span>$
        </strong>
      </h4>
    </Container>
  );
}

export default OrderItem;
