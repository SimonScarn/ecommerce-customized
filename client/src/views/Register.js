import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../store/slices/userSlice";
import { signUp } from "../utils/api/apiCalls";
import {
  FormContainer,
  Title,
  Row,
  Input,

} from "../styles/FormContainer.styled";
import { Container } from "../styles/Container.styled";
import { Error,   RegisterBtn } from "../styles/Auth.styled";
import { Button } from "@mui/material";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (user) navigate("/shop");
  }, [user]);


  function createAccount(e) {
    e.preventDefault();
    if (password !== passwordConfirm || password.length < 8) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
    setError(false);
    dispatch(signUp(email, password, username, setError));
  }

  return (
    <Container>
      <FormContainer>
        <form onSubmit={createAccount}>
          <Title color="green">Create an account</Title>
          <Row>
            <label>email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              autoComplete="off"
            />
          </Row>
          <Row>
            <label>username</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              autoComplete="off"
            />
          </Row>
          <Row>
            <label>password (minimum 8 characters)</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              autoComplete="off"
            />
          </Row>
          <Row>
            <label>password confirm</label>
            <Input
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              name="passwordConfirm"
              type="password"
              autoComplete="off"
            />
          </Row>
          <div style={{height: "50px"}}>
            {passwordError && <Error>Passwords fields should match</Error>}
            {error && <Error>try different email/username</Error>}
          </div>

          <RegisterBtn type="submit" variant="contained">
            Register
          </RegisterBtn>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Register;
