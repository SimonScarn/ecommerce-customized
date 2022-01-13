import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../store/slices/userSlice";
import { Link } from "react-router-dom";
import { signIn } from "../utils/api/apiCalls";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  Title,
  Row,
  Input,
} from "../styles/FormContainer.styled";
import { Container } from "../styles/Container.styled";
import { Error, Register } from "../styles/Auth.styled";
import { Button } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector(selectUser);

  const [email, setEmail] = useState("clientzero@gmail.com");
  const [password, setPassword] = useState("clientzero");

  useEffect(() => {
    if (user) navigate(-1);
  }, [user]);

  function signInPassword(e) {
    e.preventDefault();
    dispatch(signIn(email, password));
  }

  return (
    <Container>
      <FormContainer>
        <Title color="violet">Login</Title>
        <form onSubmit={signInPassword}>
          <Row>
            <label>email</label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              value={email}
              autocomplete="off"
              data-testid="email"
            />
          </Row>
          <Row>
            <label>password</label>{" "}
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              value={password}
              autocomplete="off"
              data-testid="password"

            />
          </Row>
          <Button type="submit" variant="contained" color="success">
            Sign in
          </Button>
          {error && <Error>wrong email or password</Error>}
        </form>
        <Register>
          <p>don't have an account?</p>
          <Button component={Link} to="/register" variant="contained"  data-testid="registerBtn">
            Register
          </Button>
        </Register>
      </FormContainer>
    </Container>
  );
}

export default Login;
