import { useEffect } from "react";
import { Link, useNavigate, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/userSlice";
import Option from "../components/account/Option";
import styled from "styled-components";



const options = [
  {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/bank-cards.png",
    text: "Payment options",
    description: "Change your payment options here",
    route: "payments",
    component: `<Payments/>`,
  },
  {
    imgSrc:
      "https://img.icons8.com/cute-clipart/64/000000/shopping-cart-loaded.png",
    text: "My orders",
    description: "Track, return or re-buy the items",
    route: "orders",
    component: `<Orders/>`,
  },
  {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/address.png",
    text: "Addresses",
    description: "Change addresses for your purchases",
    route: "addresses",
  },
  {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/check.png",
    text: "Login info",
    description: "Edit login, password, username or phone number",
    route: "userinfo",
  },
  {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/lifecycle.png",
    text: "Help",
    description: "Click if you need help",
    route: "help",
  },
  /*   {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/discount.png",
    text: "Discounts",
    description: "Check your discount codes",
    route: "discounts",
  }, */
  {
    imgSrc: "https://img.icons8.com/cute-clipart/64/000000/box.png",
    text: "Favorites",
    description: "See your favorite items",
    route: "favorites",
  },
];

function Account() {
  const {user} = useSelector(selectUser);

  if (!user) {
    return <Navigate to="/login"/>
  }

  return (
     <ItemsContainer>
      {options.map((e) => {
        return (
          <>
            <Link
              to={e.route}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Option
                imgSrc={e.imgSrc}
                text={e.text}
                description={e.description}
              />
            </Link>
       {/*      <Routes>
              <Route path={e.route} element={e.component} />
            </Routes> */}
          </>
        );
      })}
    </ItemsContainer>

  );
}

export default Account;

const ItemsContainer = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  gap: 10px;
  height: 70vh;
  padding: 80px;
  background: ${({theme}) => theme.colors.bgGrey};
  

  
  ${({theme}) => theme.media.desktop} {
    height: 100%;
    padding: 50px;
  
    }
`;
