import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserInfo from "./UserInfo";
import axios from "axios";

jest.mock("axios");

const ip = "38.215.57.123";

describe("UserInfo", () => {
  it("successful request", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          latitude: 38.9071923,
          longitude: -77.0368707,
          city: "Washington",
          country: "United States",
          postal: "20500",
          timezone: { utc: "-04:00" },
          connection: { isp: "Cogent Communications" },
          success,
        },
      })
    );
    const { debug, findByText } = render(
      <UserInfo IPAddress={ip} setCoordinates={() => {}} />
    );
    expect(await findByText(/United States/i)).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
    debug();
  });
  it("failed request", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject());
    const { debug, findByText } = render(
      <UserInfo IPAddress={ip} setCoordinates={() => {}} />
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    debug();
  });
});
