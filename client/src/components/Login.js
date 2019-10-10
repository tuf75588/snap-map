import React, {useEffect, useGlobal} from 'reactn';
import Button from 'react-bootstrap/Button';
import {useFeathers} from 'figbird';

const loginStyles = {
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  alignItems: 'center'
};
function Login(props) {
  const feathers = useFeathers();
  const {1: setUser} = useGlobal('user');

  useEffect(() => {
    feathers
      .reAuthenticate()
      .then(({user}) => {
        setUser(user);
      })
      .catch((error) => {
        console.warn('Oh no! there was an error!', error);
      });
  }, [feathers, setUser]);
  return (
    <div style={loginStyles}>
      <Button variant="danger" href="http://localhost:3030/oauth/github">
        Login with GitHub
      </Button>
    </div>
  );
}

export default Login;
