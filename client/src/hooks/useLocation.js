import {useState, useEffect} from 'react';

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

function useLocation() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    console.log('getting user location..');
    const onSuccess = ({coords: {latitude, longitude}}) => {
      setLocation({
        latitude,
        longitude
      });
    };
    const onError = (error) => {
      console.error(
        'error in retrieving user location, maybe try again?',
        error
      );
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }, []);
  return location;
}

export default useLocation;
