import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Maps from "./Maps";

describe("Maps", () => {
  it("zero coordinates", () => {
    const { debug } = render(
      <Maps coordinates={{ latitude: 0, longitude: 0 }} />
    );
    debug();
  });
  it("non-zero coordinates", () => {
    const { debug } = render(
      <Maps coordinates={{ latitude: 38.9071923, longitude: -77.0368707 }} />
    );
    debug();
  });
});
