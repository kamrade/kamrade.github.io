import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {useAuth} from 'components/ProvideAuth/ProvideAuth';
import {Button, Formq, FormqInput} from 'shared';

let initialState = {
  username: {
    data: {
      name: 'username',
      placeholder: 'Username',
      autoComplete: 'off',
      type: 'text',
      id: 'username',
      value: '',
      touched: false,
      dirty: false,
      focused: false,
    },
    errors: ['Test error message 1', 'Test error message 2'],
    validations: () => []
  },
};

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

  const submitAuthForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log('::: submit auth form');
    console.log(initialState);
  }

  return (
    <div className={`container`}>

      <p>You must log in to view the page at {from.pathname}</p>
      <Button onClick={login}>Log in</Button>
      <NavLink exact to='/'>Back to App</NavLink>

      <Formq initialFormqState={initialState} >
        <form onSubmit={submitAuthForm}>
          <FormqInput name='username' />
        </form>
      </Formq>

    </div>
  );
}
