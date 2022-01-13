
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
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Product from "../views/Product";
import { addItem } from '../store/slices/cartSlice';


describe('product view test', () => {
    it('component renders properly', () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(
            <Router location={history.location} navigator={history}>
                <Product/>
            </Router>,
             {
                initialState: {
                  cart: { items: [] },
                },
              },
              addItem({ item: {price: '33'}, quantity: 3 })
        )
        expect(getByTestId("cartBtn")).toBeInTheDocument();
    })
})