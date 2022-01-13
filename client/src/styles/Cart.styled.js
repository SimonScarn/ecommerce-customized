import styled from "styled-components";
import { Button, Modal } from "@mui/material";

const Container = styled.div`
  position: relative;
  height: 90vh;
  padding-top: 20px;
  background: ${({theme}) => theme.colors.bgAqua};
`;

const Header = styled.div`
  display: flex;
  height: 8vh;
  margin-bottom: 1rem;
  padding-left: 5%;
  align-items: center;
  gap: 30px;
  ${({ theme }) => theme.media.mobile} {
    justify-items: space-around;
  }


  & h1 {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 1.5rem;
    ${({ theme }) => theme.media.mobile} {
      font-size: 1.25rem;
    }
  }
`;

const Body = styled.div`
  display: flex;
  height: 80%;
  width: 95%;
  margin: auto;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.bgGrey};

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

const BodyLeft = styled.div`
  flex: 0.75;
  overflow: hidden;
  overflow-y: scroll;
  border-radius: 1rem;

  ${({ theme }) => theme.media.mobile} {
    flex: 0.9;
  }
`;

const BodyRight = styled.div`
  flex: 0.25;
  display: grid;
  place-content: center;
  background-color: ${({ theme }) => theme.colors.bgGrey};
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  ${({ theme }) => theme.media.mobile} {
    flex: 0.1;
    border-radius: 1rem;
    padding: 0 0 10px 0;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  ${({ theme }) => theme.media.desktop} {
    flex-direction: column;
    gap: 0;
  }
  ${({ theme }) => theme.media.mobile} {
    flex-direction: row;
    gap: 20px;
  }
  p {
    font-size: 1.3rem;
  }

  span {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

const CheckoutBtn = styled(Button)`
  && {
    color: #eee;
    border-radius: 1rem;
    height: 50px;

    ${({ theme }) => theme.media.mobile} {
      height: 30px;
    }
  }
`;

const EmptyCartBtn = styled(Button)`
  height: 50px;

  && {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 30%;
    border-radius: 1rem;

    ${({ theme }) => theme.media.mobile} {
      margin-right: auto;
    }
  }
`;

const DetailsModal = styled(Modal)`
  position: absolute;
  height: 400px;
  width: 400px;
  margin: auto;
  padding: 3em;
  border-radius: 1rem;
  background: linear-gradient(315deg, #20bf35 0%, #01baef 44%);
`;

export {
  Container,
  Header,
  Body,
  BodyLeft,
  BodyRight,
  Info,
  CheckoutBtn,
  EmptyCartBtn,
  DetailsModal,
};
