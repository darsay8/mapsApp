import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {ILocation} from '../interfaces/IApp';

const useLocation = () => {
  const [hasLocation, setHasLocation] = useState<boolean>(false);
  const [initialPosition, setInitialPosition] = useState<ILocation>();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setInitialPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setHasLocation(true);
      },
      err => console.log({err}),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return {hasLocation, initialPosition};
};
export default useLocation;
