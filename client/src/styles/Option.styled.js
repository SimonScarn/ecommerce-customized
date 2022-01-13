import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 20px;
  position: relative;
  z-index: 10;
  height: 200px;
  width: 400px;
  background-color: #fff;
  border-radius: 1rem;
  outline: 2px solid grey;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  cursor: pointer;
  ${({ theme }) => theme.media.mobile} {
    gap: 0;
    margin: 0 auto;
  }
  ${({ theme }) => theme.media.xs} {
    width: 60%;
  }

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background-color: lightblue;
    opacity: 0;
    border-radius: 1rem;
    outline: 4px solid grey;
  }

  &:hover::before {
    opacity: 0.4;
  }

  ${({ theme }) => theme.media.mobile} {
    height: 100px;
  }
`;

const ImageContainer = styled.div`
  padding: 0.75em;
`;

const InfoContainer = styled.div`
  padding: 0.75em;
  text-align: left;

  p {
    ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
`;

export { Container, ImageContainer, InfoContainer };
