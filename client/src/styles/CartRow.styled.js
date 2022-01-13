import styled from "styled-components";
import { Button } from "@mui/material";

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid grey;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 0.5fr;
  gap: 15px;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.colors.bgGrey};

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    row-gap: 20px;
    place-items: center;
    text-align: center;
  }
`;

const ProductImg = styled.img`
  width: 120px;
  height: 100px;
  object-fit: contain;
  margin-right: 1em;
  padding: 20px;
  border-radius: 1rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const ProductInfo = styled.div`
  min-width: 0;

  h2 {
    /*      text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;  */
    ${({ theme }) => theme.media.large} {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    ${({ theme }) => theme.media.mobile} {
      font-size: 1.1rem;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 1rem;
  }
`;

const ProductQuantity = styled.div`
  outline: 3px solid grey;
  display: flex;
  align-items: center;
  width: 150px;
`;

const InputQuantity = styled.input`
  width: 60px;
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

const Price = styled.h4`
  font-weight: 600;
  font-size: 1.15rem;
`;
const DeleteBtn = styled(Button)`
  && {
    ${({ theme }) => theme.media.mobile} {
      grid-column: 1/-1;
      width: 100%;
      outline: 1px solid pink;
      background: rgb(255, 99, 71);
      color: black;
    }
  }
`;

export {
  Container,
  Content,
  ProductImg,
  ProductInfo,
  ProductQuantity,
  InputQuantity,
  Price,
  DeleteBtn,
};
