import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
  it("renders Header component", () => {
    render(<Header />);
    expect(screen.queryByText(/IP Address Tracker/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/arrow/i)).toBeInTheDocument();
  });
});
