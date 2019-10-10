import React, {useGlobal, setGlobal} from 'reactn';
import ReactDOM from 'react-dom';
import {Provider as FigbirdProvider, useGet} from 'figbird';
import createFeathersClient from '@feathersjs/feathers';
import client from './feathersClient';
import Login from './components/Login';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import {Router} from '@reach/router';
import Map from './components/Map';

setGlobal({
  user: null
});

function App() {
  const [user] = useGlobal('user');

  return (
    <FigbirdProvider feathers={client}>
      {user ? <Map /> : <Login />}
    </FigbirdProvider>
  );
}

const ui = <App />;
const rootElement = document.getElementById('root');
ReactDOM.render(ui, rootElement);
