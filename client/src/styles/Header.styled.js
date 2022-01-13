import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconButton, Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  height: 10vh;
  background: #2c3e50;
  border-bottom: 2px solid whitesmoke;
`;
//! LEFT
const Left = styled.div`
  flex: 0.1;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  padding-left: 1.5em;
  cursor: pointer;
`;

//! CENTER
const Search = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  background: #fff;

  outline: ${({ isFocused }) => isFocused && "3px solid aqua"};

  ${({ theme }) => theme.media.desktop} {
  }

  ${({ theme }) => theme.media.mobile} {
    flex: 1;
  }
`;

const Input = styled.input`
  height: 30px;
  display: block;
  width: 100%;
  margin-right: auto;
  padding-left: 10px;
  border: none;
  border-radius: 1rem;
  outline: none;
  font-size: 1.15rem;
`;

const Icon = styled(IconButton)`
  && {
    color: black;

    ${({ theme }) => theme.media.desktop} {
      display: none;
    }
    ${({ theme }) => theme.media.mobile} {
      display: flex;
    }
  }
`;

//! Burger
const Burger = styled(IconButton)`
  && {
    margin-right: 20px;
    display: none;
    color: white;

    ${({ theme }) => theme.media.mobile} {
      display: flex;
      align-items: center;
    }
  }
`;

//! RIGHT
const Right = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  height: 100%;
  padding-right: 20px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    position: fixed;
    top: 10vh;
    right: 0;
    height: 92vh;
    width: 100%;
    padding-right: 0;
    background: black;
    opacity: .9;
    transform: ${(props) =>
      props.open ? "translateX(0%)" : "translateX(100%)"};
    transition: transform 0.5s ease-in;
    gap: 1px;
    &>* {
      
    }

    &:after {
      content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    background: black;
    opacity: .8;
    }

`;

const LogoutBtn = styled(Button)`
  && {
    height: 80%;
    margin: auto 0;
    padding: 0 1.5em;
    text-transform: capitalize;
    border-radius: 25rem;
    background: rgba(242, 121, 53);

    &:hover {
      background: rgba(242, 121, 53);
    }

    ${({ theme }) => theme.media.mobile} {
      height: auto;
      width: 40%;
      margin: 0 auto;
    }
  }
`;

const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
  padding: 0 0.75em;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 3px;
  color: whitesmoke;
  border-radius: 1rem;
  overflow: hidden;


  ${({ theme }) => theme.media.mobile} {
    flex: 0.1;
    width: auto;
    margin: 0 auto;
    color: white;
    background: #686868;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const CartNumber = styled.span`
  position: absolute;
  left: 33%;
  bottom: 15%;
  color: orange;
  font-weight: 700;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 0.75em;
  cursor: pointer;
  letter-spacing: 3px;
  color: whitesmoke;
  border-radius: 1rem;

  &:hover {
    color: #eee;
  }
`;

const Dropdown = styled.div`
  width: 220px;
  height: 320px;
  position: absolute;
  z-index: 1000;
  top: 10vh;
  padding: .25em .75em;
  border-radius: 1rem;
  outline: 2px solid grey;
  color: black;
  background: lightgrey;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  animation:  appear .3s linear;

  @keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}



  p:first-child {
    border-bottom: 1px solid black; 
    padding-bottom: 10px;

    span {
      font-style: italic;
      font-weight: 500;
    }
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  position: relative;
  margin-bottom: 0.5rem;
  padding: 0.15em 0.3em;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: ${(props) => props.bold && "700"};
  border-radius: 1rem;

  &:hover {
    background: whitesmoke;
  }
`;

const CartMobile = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  top: 80vh;
  right: 5%;
  width: 100px;
  height: 100px;
  color: orange;
  background: lightgrey;
  border-radius: 50%;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  span {
    position: absolute;
    right: 25px;
    bottom: 20px;
    font-weight: 800;
    font-size: 1.25rem;
  }
`;

const Code = styled.div`
  display: grid;
  place-content: center;
  position: absolute;
  top: 85vh;
  left: 10px;
  height: 50px;
  background: pink;
  border-radius: 1rem;
`;

export {
  Container,
  Left,
  Logo,
  Search,
  Input,
  Burger,
  Right,
  HeaderLink,
  CartNumber,
  Icon,
  LogoutBtn,
  DropdownContainer,
  Dropdown,
  DropdownLink,
  CartMobile,
  Code,
};
