import React from 'react';
import {useFind} from 'figbird';
function Login() {
  const users = useFind('users');
  console.log(users);
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
export default Login;
