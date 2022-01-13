import styled from "styled-components";
import { Button } from "@mui/material";


const Container = styled.div`
  display: grid;
  place-items: center;
  height: 90vh;
  background: linear-gradient(175deg, #71b7e6, #9b59b6);
`;

const Error = styled.div`
  margin-top: 1rem;
  color: red;
`;

const Register = styled.div`
  margin-top: 1.25rem;
  border-top: 3px solid lightgrey;

  ${({ theme }) => theme.media.mobile} {

  p {
    font-style: italic;
  }
`;

const RegisterBtn = styled(Button)`
&& {
  ${({ theme }) => theme.media.mobile} {
    margin-top: 3rem;
  width: 100%;
  }
 
}
`;

export { Container, Error, Register, RegisterBtn };
