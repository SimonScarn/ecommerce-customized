import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import {
  render,
  fireEvent,
  screen,
  getByRole,
  cleanup,
  getByTestId,
} from "./test-utils";
import Header from "../components/Header";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Header comp", () => {
  test("is rendering", () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header />{" "}
      </Router>
    );
    const input = getByTestId("search");
    expect(input).toBeInTheDocument();
  });

  test("input fires event", () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header />{" "}
      </Router>
    );
    const input = getByTestId("search");
    userEvent.type(input, "ssd");
    expect(input.value).toBe("ssd");
  });

  test("header not logged in", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );
    const loginLink = getByTestId("loginLink");
    expect(loginLink).toBeInTheDocument();
  });

  test("header logged in", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>,
      {
        initialState: {
          user: { user: { username: "snoopzilla" } },
        },
      }
    );
    const logoutBtn = getByTestId("logoutBtn");
    expect(logoutBtn).toBeInTheDocument();
  });

  test("cart number displays properly", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>,
      {
        initialState: {
          cart: {
            items: [
              {
                quantity: 3,
                item: { price: "23" },
              },
              {
                quantity: 5,
                item: { price: "14" },
              }
            ],
          },
        },
      }
    );
    const cartNumber = getByTestId("cartNumber");
    expect(cartNumber.textContent).toBe("8");
  });
});
