import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import {
  render,
  fireEvent,
  screen,
  getByRole,
  cleanup,
  getByTestId,
  waitFor,
} from "./test-utils";
import Login from "../views/Login";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";



it("fields rendered properly", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router location={history.location} navigator={history}>
      <Login />
    </Router>
  );
  //? test fields
  const emailField = getByTestId("email");
  const passwordField = getByTestId("password");
  userEvent.type(emailField, "sdasd");
  expect(emailField.value).toBe("sdasd");
  //? test RegisterBtn
  expect(getByTestId("registerBtn")).toBeInTheDocument();
  userEvent.click(getByTestId("registerBtn"));
  expect(history.location.pathname).toBe("/register");
});
