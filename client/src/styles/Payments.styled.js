import styled from "styled-components";

const Container = styled.div`
  min-height: 90vh;
  padding: 20px 40px;
  background: ${({ theme }) => theme.colors.bgGrey};

  div {
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 70px;
    row-gap: 30px;
    margin-top: 2rem;
  }
`;

const Item = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 20px;
  border-radius: 1rem;
  outline: 1px solid grey;
  transition: all 0.3s ease-in-out;

  &:hover {
    outline: 2px solid black;

    p {
      color: white;
      &:after {
        width: 100%;
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    opacity: 0;
    background: aqua;
  }

  &:hover::after {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Text = styled.p`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 1%;
    height: 3px;
    background: gold;
    transition: all 0.3s;
  }
`;

export { Container, Item, Text };
