import { FC } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { MapsProps } from "../types";

const Maps: FC<MapsProps> = ({ coordinates }) => {
  const { latitude, longitude } = coordinates;

  return latitude && longitude ? (
    <YMaps>
      {coordinates && (
        <Map
          defaultState={{ center: [latitude, longitude], zoom: 9 }}
          width={"100%"}
          height={"70vh"}
        >
          <Placemark geometry={[latitude, longitude]} />
        </Map>
      )}
    </YMaps>
  ) : (
    <></>
  );
};

export default Maps;
