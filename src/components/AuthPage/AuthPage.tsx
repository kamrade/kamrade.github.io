import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {useAuth} from 'components/ProvideAuth/ProvideAuth';
import {Button} from 'shared';

export const AuthPage = () => {

  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let {from}: any = location.state || { from: {pathname: '/'} };

  let login = () => {
    auth?.signin(() => {
      history.replace(from);
    })
  }

  return (
    <div className={`container`}>

      <p>You must log in to view the page at {from.pathname}</p>
      <Button onClick={login}>Log in</Button>
      <NavLink exact to='/'>Back to App</NavLink>

    </div>
  );
}
