import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "./Main";
import axios from "axios";

jest.mock("axios");

const ip = "38.215.57.123";

describe("Main", () => {
  it("successful request", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { ip } }));
    render(<Main />);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
