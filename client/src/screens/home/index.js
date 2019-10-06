import React, {useContext} from 'react';
import {useFeathers} from 'figbird';
function Login() {
  const feathers = useFeathers();

  React.useEffect(() => {
    feathers
      .logout()
      // .reAuthenticate()
      // .then((user) => {
      //   console.log({user});
      //   console.log('logged in!');
      // })
      .catch((e) => {
        throw new Error(e);
        console.error('oh no! there was an error!');
        // });
      });
  }, []);
  return (
    <>
      <div>
        <button>login</button>
      </div>
    </>
  );
}
export default Login;
