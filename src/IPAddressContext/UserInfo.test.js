import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import WithIPAddressContext from "./IPAddressContext";
import Main from "../Main/Main";

describe("IPAddressContext", () => {
  it("successful context implementation", async () => {
    const { debug } = render(<WithIPAddressContext children={<Main />} />);
    debug();
  });
});
