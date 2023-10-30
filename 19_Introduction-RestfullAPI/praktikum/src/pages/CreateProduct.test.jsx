import {
  fireEvent,
  getByDisplayValue,
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import CreateProduct from "./CreateProduct";
import Form from "../components/CreateProduct/Form";

const testComponent = (
  <BrowserRouter>
    <Provider store={store}>
      <Form />
    </Provider>
  </BrowserRouter>
);

it("Product Name input should get string input", () => {
  render(testComponent);

  const nameInput = screen.getByLabelText("Product Name");

  fireEvent.change(nameInput, { target: { value: "Hello World" } });
  expect(nameInput).toHaveValue("Hello World");
});


it("Product Name input should not exceed 25 char", () => {
  render(testComponent);

  const nameInput = screen.getByLabelText("Product Name");
  expect(nameInput.value).toBe("");
  fireEvent.change(nameInput, {
    target: { value: "this string should exceed twenty five char in total" },
  });
  expect(nameInput.value.length > 25).toBeTruthy();
});

it("Product Price input should get int input", () => {
  render(testComponent);

  const priceInput = screen.getByLabelText("Product Price");
  expect(priceInput.value).toBe("");
  fireEvent.change(priceInput, { target: { value: 23 } });
  expect(priceInput.value).toBe("23");

  expect(priceInput.value == screen.getByDisplayValue("23"));
});

it("Product Name input should get string input", () => {
  render(testComponent);

  const nameInput = screen.getByLabelText("Product Name");

  fireEvent.change(nameInput, { target: { value: "@/#{}" } });
  expect(screen.getByText("Input tidak boleh mengandung simbol")).toBeInTheDocument();
});
