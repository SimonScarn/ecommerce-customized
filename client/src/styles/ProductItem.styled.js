import styled from "styled-components";
import { IconButton, Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  min-width: 300px;
  margin: 0.5rem;
  margin: auto;
  padding: 20px 10px;
  text-align: center;
  border-radius: 7px;
  outline: 2px solid #f2f2f2;
  background: ${({ theme }) => theme.colors.bgGrey};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: 0.2s ease-in-out;
  min-width: 300px;

  &:hover {
    outline: 4px solid whitesmoke;

    p {
      font-weight: 900;
    }
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 47%;
    background-color: #373b44;
    opacity: 0.6;
    border-radius: 7px;
    transition: 0.2s ease-in-out;
  }

  &:hover:after {
    opacity: 0.7;
  }

`;

const ImageContainer = styled.div`
  flex: 0.6;

  &:hover {
    img {
      animation: show 0.3s;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  }

  @keyframes show {
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  img {
    z-index: 200;
    max-width: 100%;
    height: 150px;
    padding: 0.75em;
    object-fit: contain;
    background: white;
    border-radius: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

const Info = styled.div``;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
`;

const FavoriteBtn = styled(IconButton)`
  && {
    cursor: default;

    &:hover {
      background-color: whitesmoke;
    }
  }
`;

const CartBtn = styled(Button)`
  && {
    transition: all 0.2s ease-in-out;
    &:hover {
      border-radius: 100px;
    }
  }
`;

export {
  Container,
  ImageContainer,
  Info,
  Title,
  Toolbar,
  FavoriteBtn,
  CartBtn,
};
