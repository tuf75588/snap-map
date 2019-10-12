import React, {useGlobal, useState, useEffect, useRef} from 'reactn';
import {useFeathers} from 'figbird';
import Button from 'react-bootstrap/Button';
import ReactMapGL, {Marker} from 'react-map-gl';
import Navbar from 'react-bootstrap/Navbar';
import useLocation from '../hooks/useLocation';
import InputGroup from 'react-bootstrap/InputGroup';
import FileUpload from './FileUpload';
function Map() {
  const location = useLocation();
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 31.9742044,
    longitude: -49.25875,
    zoom: 2
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

  useEffect(() => {
    if (location) {
      setViewport((v) => ({
        ...v,
        ...location,
        zoom: 8
      }));
    }
  }, [location, setViewport]);

  const feathers = useFeathers();
  const fileRef = useRef();
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
        <FileUpload />
      </Navbar>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={(vp) => setViewport(vp)}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
      >
        {location && (
          <Marker latitude={location.latitude} longitude={location.longitude} offsetLeft={-20} offsetTop={-10}>
            <span role="img" aria-label="map marker emoji" style={{fontSize: `${viewport.zoom * 0.2}rem`}}>
              📷
            </span>
          </Marker>
        )}
      </ReactMapGL>
    </React.Fragment>
  );
}
export default Map;
