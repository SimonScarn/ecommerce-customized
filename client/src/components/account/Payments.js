import { useNavigate } from "react-router-dom";
import { Container, Item, Text } from "../../styles/Payments.styled";
import { BackBtn } from "../../styles/Global.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const options = [
  {
    imgSrc: "https://img.icons8.com/color/96/000000/bitcoin--v1.png",
    text: "Bitcoin",
  },
  {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/paypal.png",
    text: "PayPal",
  },
  {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/mastercard.png",
    text: "Mastercard",
  },
  {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/visa.png",
    text: "Visa",
  },
  {
    imgSrc: "https://img.icons8.com/plasticine/100/000000/stripe.png",
    text: "Stripe",
  },
  {
    imgSrc: "https://img.icons8.com/ios-filled/100/000000/apple-pay.png",
    text: "Apple Pay",
  },
];

function Payments() {
  const navigate = useNavigate();

  return (
    <Container>
      <BackBtn onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </BackBtn>
      <div>
        {options.map((e) => {
          return (
            <Item value={e.text}>
              <img src={e.imgSrc} style={{ width: "60px", height: "60px" }} />
              <Text>{e.text}</Text>
            </Item>
          );
        })}
      </div>
    </Container>
  );
}

export default Payments;
