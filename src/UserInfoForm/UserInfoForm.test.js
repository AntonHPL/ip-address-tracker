import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserInfoForm from "./UserInfoForm";
import userEvent from "@testing-library/user-event";

const ip = "38.215.57.123";

describe("UserInfoForm", () => {
  let inputEl;

  beforeEach(() => {
    render(<UserInfoForm />);
    inputEl = screen.getByPlaceholderText(/Search for any IP address.../i);
  });

  it("renders UserInfoForm component", async () => {
    expect(inputEl).toBeEmptyDOMElement();
    expect(inputEl).not.toBeRequired();
  });

  it("clears the input", () => {
    fireEvent.change(screen.getByRole("textbox"), { target: { value: ip } });
    userEvent.click(screen.getByRole("button"));
    expect(inputEl).toHaveValue("");
  });

  it("fires the alert", () => {
    window.alert = jest.fn();
    userEvent.click(screen.getByRole("button"));
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});
