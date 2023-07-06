import { createContext, FC, ReactNode, useState } from "react";
import { DefaultIPADdressContext } from "../types";

export const IPAddressContext = createContext<DefaultIPADdressContext>({
  IPAddress: "",
  setIPAddress: () => {},
});

const WithIPAddressContext: FC<{ children: ReactNode }> = ({ children }) => {
  const [IPAddress, setIPAddress] = useState("");

  return (
    <IPAddressContext.Provider value={{ IPAddress, setIPAddress }}>
      {children}
    </IPAddressContext.Provider>
  );
};

export default WithIPAddressContext;
