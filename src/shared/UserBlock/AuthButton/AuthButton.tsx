import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from 'shared';
import {useAuth} from 'components/ProvideAuth/ProvideAuth';

export function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return (
    auth?.user
      ? (<p>Welcome!{" "}
        <Button onClick={() => { auth?.signout(() => history.push("/")) }}>Sign out</Button>
      </p>)
      : (<p>you are not logged in</p>)
  );
}
