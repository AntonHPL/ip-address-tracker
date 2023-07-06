import { FC, useState, useEffect } from "react";
import { Location, UserData, UserInfoProps } from "../types";
import axios from "axios";
import { UserInfoContainer, Headline, UserInfoSection, Text } from "./styled";
import Loader from "../Loader/Loader";

const UserInfo: FC<UserInfoProps> = ({ IPAddress, setCoordinates }) => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Location>({
    city: "",
    country: "",
    zip_code: "",
  });
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [error, setError] = useState("");

  const { city, country, zip_code } = location;

  useEffect(() => {
    if (IPAddress) {
      setLoading(true);
      axios
        .get("https://ipwho.is/" + IPAddress)
        .then(({ data }: { data: UserData }) => {
          const {
            latitude,
            longitude,
            city,
            country,
            postal,
            timezone: { utc },
            connection: { isp },
            success,
          } = data;
          if (success) {
            error && setError("");
            setCoordinates({
              latitude,
              longitude,
            });
            setLocation({
              city,
              country,
              zip_code: postal,
            });
            setTimezone(utc);
            setISP(isp);
            setLoading(false);
          } else {
            throw new Error("Try again.");
          }
        })
        .catch((error) => {
          console.error(error);
          setError("Try again.");
          setLoading(false);
        });
    }
  }, [IPAddress]);

  return (
    <UserInfoContainer loading={loading} error={error}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <UserInfoSection>
            <Headline>IP address</Headline>
            <Text>{IPAddress}</Text>
          </UserInfoSection>
          <UserInfoSection>
            <Headline>Location</Headline>
            <Text>
              {city}, {country}
            </Text>
            <Text>{zip_code}</Text>
          </UserInfoSection>
          <UserInfoSection>
            <Headline>Timezone</Headline>
            <Text>UTC {timezone}</Text>
          </UserInfoSection>
          <UserInfoSection no_border>
            <Headline>ISP</Headline>
            <Text>{ISP}</Text>
          </UserInfoSection>
        </>
      )}
    </UserInfoContainer>
  );
};

export default UserInfo;
