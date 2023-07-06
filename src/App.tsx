import { FC } from "react";
import WithIPAddressContext from "./IPAddressContext/IPAddressContext";
import Main from "./Main/Main";
import "./App.css";

const App: FC = () => {
  return <WithIPAddressContext children={<Main />} />;
};

export default App;
