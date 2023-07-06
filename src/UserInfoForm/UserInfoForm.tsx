import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import arrow from "../images/arrow.svg";
import { Form, Input, Button, Icon } from "./styled";
import { IPAddressContext } from "../IPAddressContext/IPAddressContext";

const UserInfoForm: FC = () => {
  const [formValue, setFormValue] = useState("");

  const { setIPAddress } = useContext(IPAddressContext);

  const ArrowRightIcon = () => <Icon src={arrow} alt="arrow_right" />;

  const getInfo = () => {
    if (formValue) {
      setIPAddress(formValue);
      setFormValue("");
    } else {
      alert("Enter sth :)");
    }
  };

  return (
    <Form onSubmit={(e: FormEvent) => e.preventDefault()}>
      <Input
        type="text"
        value={formValue}
        onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
          setFormValue(value)
        }
        placeholder="Search for any IP address..."
      />
      <Button onClick={getInfo}>
        <ArrowRightIcon />
      </Button>
    </Form>
  );
};

export default UserInfoForm;
