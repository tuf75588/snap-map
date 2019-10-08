import React, {useGlobal, setGlobal} from 'reactn';
import ReactDOM from 'react-dom';
import {Provider as FigbirdProvider, useGet} from 'figbird';
import createFeathersClient from '@feathersjs/feathers';
import client from './feathersClient';
import Login from './components/Login';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './index.css';

setGlobal({
  user: null
});

function App({children}) {
  const [user] = useGlobal('user');
  return (
    <FigbirdProvider feathers={client}>
      {user ? <h1>Hello {user.name}</h1> : <Login />}
    </FigbirdProvider>
  );
}

const ui = <App />;
const rootElement = document.getElementById('root');
ReactDOM.render(ui, rootElement);
