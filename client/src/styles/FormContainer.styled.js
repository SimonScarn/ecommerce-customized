import styled from "styled-components";
import { Button } from "@mui/material";

const FormContainer = styled.div`
  position: relative;
  height: 75%;
  width: 100%;
  min-width: 200px;
  max-width: 500px;
  padding: 0 30px 90px 30px;
  border-radius: 1rem;
  background: whitesmoke;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  ${({ theme }) => theme.media.mobile} {
    height: 80%;
    width: 80%;
  }
`;

const Title = styled.h2`
  position: relative;
  color: ${(props) => props.color};
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-block: 1rem;
`;

const Input = styled.input`
  height: 40px;
  width: 70%;
  padding: 0.25em 0.75em;
  border: none;
  border-radius: 1rem;
  outline: 3px solid ${(props) => (props.error === true ? "red" : "lightgrey")};
  transition: all 0.3s ease;

  &:focus {
    outline: 3px solid violet;
  }
`;

const RadiosContainer = styled.div`
  border-bottom: 2px solid lightgrey;
`;

const DeleteBtn = styled(Button)`
  && {
    transition: all 0.2s ease-in-out;
    &:hover {
      border-radius: 100px;
    }
  }
`;

const SaveBtn = styled(Button)`
  && {
    position: absolute;
    bottom: 1%;
    right: 1%;
    padding: 1em 2em;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;

    ${({ theme }) => theme.media.mobile} {
      margin-right: 5%;
      margin-bottom: 5%;
    }

    &:hover {
      border-radius: 100px;
    }
  }
`;

export {
  FormContainer,
  Title,
  Row,
  Input,
  RadiosContainer,
  DeleteBtn,
  SaveBtn,
};
