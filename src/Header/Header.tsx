import { FC } from "react";
import UserInfoForm from "../UserInfoForm/UserInfoForm";
import { HeaderInfo, HeaderInfoContainer } from "./styled";

const Header: FC = () => {
  return (
    <HeaderInfoContainer>
      <HeaderInfo>
        <h3 style={{ color: "#FFF", fontSize: "2em" }}>IP Address Tracker</h3>
        <UserInfoForm />
      </HeaderInfo>
    </HeaderInfoContainer>
  );
};

export default Header;
