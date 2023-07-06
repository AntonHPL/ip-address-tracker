import { FC, useContext, useEffect, useState } from "react";
import UserInfo from "../UserInfo/UserInfo";
import Maps from "../Maps/Maps";
import Header from "../Header/Header";
import { IPAddressContext } from "../IPAddressContext/IPAddressContext";
import { Coordinates } from "../types";
import axios from "axios";

const Main: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: 0,
    longitude: 0,
  });

  const { IPAddress, setIPAddress } = useContext(IPAddressContext);

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then(({ data }) => setIPAddress(data.ip));
  }, []);

  return (
    <>
      <Header />
      <UserInfo IPAddress={IPAddress} setCoordinates={setCoordinates} />
      <Maps coordinates={coordinates} />
    </>
  );
};

export default Main;
