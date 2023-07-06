export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  city: string;
  country: string;
  zip_code: string;
}

export interface UserData {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  postal: string;
  timezone: { utc: string };
  connection: { isp: string };
  success: boolean;
}

export interface UserInfoProps {
  IPAddress: string;
  setCoordinates: (coordinates: Coordinates) => void;
}

export interface MapsProps {
  coordinates: Coordinates;
}

export interface DefaultIPADdressContext {
  IPAddress: string;
  setIPAddress: (IPAddress: string) => void;
}
