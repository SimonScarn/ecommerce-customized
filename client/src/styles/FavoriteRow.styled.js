import styled from "styled-components";
import { Button, IconButton } from "@mui/material";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 2fr;
    align-items: center;
    justify-content: center;
    height: 220px;
    width: 95%;
    margin: auto;
    margin-bottom: .25rem;
    padding-left: 30px;
    border-radius: 1rem;
    background: ${({theme}) => theme.colors.bgGrey};
    outline: 1px solid grey;

    ${({ theme }) => theme.media.mobile} {
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 30vh;
      padding: 1em 0;
      text-align: center;
}
}
    img {
        height: 60px;
        width: 60px;
        padding: 20px;
        object-fit: contain;
        background: white;
        border-radius: 1rem;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; 
}
`;

const LoaderContainer = styled.div`
  width: 100vw;
  display: grid;
  place-items: center;
`;

const Info = styled.div`
  overflow: hidden;

  ${({ theme }) => theme.media.mobile} {
    width: 90%;
  }

  h2 {
    margin: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

  }
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 90%;
  margin-top: auto;
  margin-left: auto;
  padding-right: 5%;
  padding-bottom: 10px;

  ${({ theme }) => theme.media.mobile} {
    flex-direction: row;
    gap: 20px;
    align-items: center;
    margin-right: auto;
  }
`;

const RemoveBtn = styled(IconButton)`
  width: 40px;
  margin-left: auto;
`;

const Title = styled.h2`
  &:hover {
    text-decoration: underline;
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: .8rem;
  }

`;

export { Container, LoaderContainer, Info, Toolbar, RemoveBtn, Title };