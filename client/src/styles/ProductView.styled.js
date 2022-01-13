import styled from "styled-components";
import { Button, IconButton } from "@mui/material";

const Container = styled.div`
  min-height: 90vh;
  background: ${({ theme }) => theme.colors.bgGrey};
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 60px 150px 80px 150px;
  ${({ theme }) => theme.media.desktop} {
    flex-direction: column;
    padding: 60px 30px 80px 30px;
  }
  p {
    margin-bottom: 50px;

    ${({ theme }) => theme.media.desktop} {
      width: 50%;
    }
    ${({ theme }) => theme.media.mobile} {
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  background: white;
  border-radius: 1rem;
  padding: 20px;
  height: 50vh;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  ${({ theme }) => theme.media.mobile} {
    height: 20vh;
  }

  img {
    height: 100%;
    object-fit: contain;
    max-width: 100%;

    ${({ theme }) => theme.media.desktop} {
      height: 30vh;
    }
  }
`;

const Body = styled.div`
  flex: 0.6;
`;

const Rating = styled.div``;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  outline: 3px solid grey;
`;

const Recommended = styled.div`
  & > div {
    position: relative;
  }

  h2 {
    margin-left: 20px;
    border-bottom: 2px solid lightgrey;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
 flex-wrap: nowrap;
  gap: 20px;
  padding: 0 20px;
  position: relative;
  overflow-x: scroll;
  overflow: hidden;
  scroll-behavior: smooth;

  div {
    width: 350px;
}
`;

const Price = styled.h3`
  font-size: 2em;
`;

const InputQuantity = styled.input`
  width: 40px;
  height: 20px;
  padding: 9px 4px;
  text-align: center;
  border: none;
  background-color: whitesmoke;

  &:focus {
    background: pink;
    outline: 1px solid aqua;
  }
`;

const CartBtn = styled(Button)`
  && {
    ${({ theme }) => theme.media.mobile} {
      width: 100%;
    }
  }
`;

const NavBtn = styled(IconButton)`
  && {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: ${({ direction }) => direction == "left" && "10px"};
    right: ${({ direction }) => direction == "right" && "10px"};
    padding: 0.75em;
    background: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: white;
      background: lightgrey;
    }
  }
`;

export {
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
};
