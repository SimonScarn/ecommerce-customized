import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import {
  getUserInfo,
  saveUserInfo,
  deleteUser,
  checkPassword,
} from "../../utils/api/apiCalls";
import { Container } from "../../styles/Container.styled";
import {
  FormContainer,
  Title,
  Row,
  Input,
  RadiosContainer,
  DeleteBtn,
  SaveBtn,
} from "../../styles/FormContainer.styled";
import { Button, Alert, Stack, Snackbar, Radio } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function UserInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector(selectUser);
  const [info, setInfo] = useState(null);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [status, setStatus] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("first");
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (!info) {
      getUserInfo(token, setInfo);
    }
  }, [info]);

  useEffect(() => {
    setOpen(true);
  }, [status]);

  //!
  useEffect(() => {
    if (!user) {
      navigate("/shop");
    }
  }, [user]);

  useEffect(() => {
    if (status == "success") {
      navigate("/shop");
    }
  }, [status]);

  async function updateProfile(e) {
    e.preventDefault();
    setInputError(false);

    const isPassCorrect = await checkPassword(user._id, password);
    if (isPassCorrect == "error") {
      setStatus("error");
      return;
    }
    if (newPassword !== newPasswordConfirm || newPassword === "") {
      setStatus("error");
      setInputError(true);
      return;
    }

    setInputError(false);
    dispatch(
      saveUserInfo(
        token,
        {
          email: info.email,
          username: info.username,
          password: newPassword,
        },
        setStatus
      )
    );
  }

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <Container>
      {status && (
        <Snackbar
          open={open}
          handleClose={handleClose}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert variant="filled" severity={status}>
            {status == "success"
              ? "Profile updated successfully"
              : "Give it another shot bruh"}
          </Alert>
        </Snackbar>
      )}
      <FormContainer>
        <form onSubmit={updateProfile}>
          <Title color="green" num={26}>
            Update user information
          </Title>
          <RadiosContainer>
            <Radio
              checked={selectedValue === "first"}
              onChange={handleChange}
              value="first"
            />
            <Radio
              checked={selectedValue === "second"}
              onChange={handleChange}
              value="second"
            />
          </RadiosContainer>
          {selectedValue === "first" ? (
            <>
              <Row>
                <label>email</label>
                <Input
                  value={info?.email}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, email: e.target.value }))
                  }
                  name="email"
                  autoComplete="off"
                />
              </Row>
              <Row>
                <label>username</label>
                <Input
                  value={info?.username}
                  onChange={(e) =>
                    setInfo((prev) => ({ ...prev, username: e.target.value }))
                  }
                  name="username"
                  autoComplete="off"
                />
              </Row>
            </>
          ) : (
            <>
              <Row>
                <label>current password</label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  autoComplete="off"
                  type="password"
                />
              </Row>

              <Row>
                <label>new password (min 8 characters)</label>
                <Input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  name="newPassword"
                  autoComplete="off"
                  type="password"
                  error={inputError}
                />
              </Row>
              <Row>
                <label>new password confirm</label>
                <Input
                  value={newPasswordConfirm}
                  onChange={(e) => setNewPasswordConfirm(e.target.value)}
                  name="newPasswordConfirm"
                  autoComplete="off"
                  type="password"
                  error={inputError}
                />
              </Row>
              <hr />
              <DeleteBtn
                onClick={() => dispatch(deleteUser(token))}
                color="error"
                variant="contained"
                startIcon={<PriorityHighIcon />}
              >
                DELETE ACCOUNT
              </DeleteBtn>
            </>
          )}
          <SaveBtn
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            save
          </SaveBtn>
        </form>
      </FormContainer>
    </Container>
  );
}

export default UserInfo;
