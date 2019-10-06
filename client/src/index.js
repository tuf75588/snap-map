import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as FigbirdProvider, useGet} from 'figbird';
import createFeathersClient from '@feathersjs/feathers';
import client from './feathersClient';
import Login from './screens/home';
function Note({id}) {
  const users = useGet('users', id);
  console.log(users);
  if (!users) return <p>loading..</p>;

  return <div>Note</div>;
}

function App({children}) {
  console.log(client);
  return (
    <FigbirdProvider feathers={client}>
      <div>some stuff lol</div>
      <Login />
    </FigbirdProvider>
  );
}

const ui = <App />;
const rootElement = document.getElementById('root');
ReactDOM.render(ui, rootElement);
