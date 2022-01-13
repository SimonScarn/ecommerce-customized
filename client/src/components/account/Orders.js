import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { getOrders } from "../../utils/api/apiCalls";
import OrderItem from "./OrderItem";
import { Container, Select } from "../../styles/Orders.styled";
import { BackBtn } from "../../styles/Global.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Orders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, orders } = useSelector(selectUser);
  const [localOrders, setLocalOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    setLocalOrders(orders);
  }, [user]);

  useEffect(() => {
    setLocalOrders((orders) => [...orders].reverse());
  }, []);

  function selectSort(e) {
    switch (e.target.value) {
      case "oldest":
        setLocalOrders(orders);
        break;
      case "latest":
        setLocalOrders((orders) => [...orders].reverse());
        break;
      case "totalAsc":
        setLocalOrders((prev) => [...prev].sort((a, b) => a.total - b.total));
        break;
      case "totalDesc":
        setLocalOrders((prev) => [...prev].sort((a, b) => b.total - a.total));
        break;
      default:
        return localOrders;
    }
  }

  return (
    <Container>
      <BackBtn onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </BackBtn>
      {orders.length === 0 ? (
        <h2>You have no orders yet</h2>
      ) : (
        <>
          <h2>
            You have {orders.length} {orders.length == 1 ? "order" : "orders"}
          </h2>
          <Select onChange={selectSort}>
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
            <option value="totalAsc">total ascending</option>
            <option value="totalDesc">total descending</option>
          </Select>
        </>
      )}
      {localOrders?.map((order) => {
        return <OrderItem order={order} />;
      })}
    </Container>
  );
}

export default Orders;
