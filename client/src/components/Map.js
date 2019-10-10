import React, {useGlobal, useState, useEffect} from 'reactn';
import {useFeathers} from 'figbird';
import Button from 'react-bootstrap/Button';
import ReactMapGL, {Marker} from 'react-map-gl';
import {getLocation} from '../utils/location';
import Navbar from 'react-bootstrap/Navbar';
import useLocation from '../hooks/useLocation';
function Map() {
  const location = useLocation();
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    visible: true
  });
  const [marker, showMarker] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setViewport({
        ...viewport,
        height: window.innerHeight,
        width: window.innerWidth
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const feathers = useFeathers();

  console.log(location);
  return (
    <React.Fragment>
      <Navbar bg="primary" fixed="top">
        <Navbar.Brand href="#home" style={{color: '#fff'}}>
          SnapMap
        </Navbar.Brand>
        <Button
          variant="danger"
          onClick={() => {
            feathers.logout();
            window.location.href = '/';
          }}
          style={{margin: '0 0 0 auto'}}
        >
          Logout
        </Button>
      </Navbar>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      >
        {location && (
          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <span
              role="img"
              aria-label="map marker emoji"
              style={{fontSize: `${viewport.zoom * 0.5}rem`}}
            >
              📷
            </span>
          </Marker>
        )}
      </ReactMapGL>
    </React.Fragment>
  );
}
export default Map;
