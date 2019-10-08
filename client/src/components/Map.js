import React, {useGlobal, useState, useEffect} from 'reactn';
import {useFeathers} from 'figbird';
import Button from 'react-bootstrap/Button';
import ReactMapGL, {Marker} from 'react-map-gl';
import {getLocation} from '../utils/location';

function Map() {
  const [user, setUser] = useGlobal('user');
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    visible: true
  });
  const [marker, showMarker] = useState(false);

  const findLocation = () => {
    return getLocation().then(({coords: {latitude, longitude}}) => {
      setViewport((prev) => {
        return {
          ...prev,

          latitude,
          longitude
        };
      });
      showMarker(true);
    });
  };
  const feathers = useFeathers();
  const logout = () => {
    feathers.logout().then(() => {
      setUser(null);
    });
  };
  return (
    <div
      className="map"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
      }}
    >
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      ></ReactMapGL>
      <h1>Map component</h1>
      {user && <h3>{user.name}</h3>}
      <Button onClick={findLocation}>Pin your location</Button>
      <Button variant="danger" onClick={logout}>
        Logout
      </Button>
      <Button onClick={(p) => setViewport({...p, reuseMaps: true})}>
        Unmount map
      </Button>
    </div>
  );
}
export default Map;
