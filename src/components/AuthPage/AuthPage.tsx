import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {useAuth} from 'components/ProvideAuth/ProvideAuth';
import {Button, Formq, FormqInput} from 'shared';
import validator from 'validator';

let initialState = {
  username: {
    name: 'username',
    placeholder: 'Username',
    autoComplete: 'off',
    type: 'text',
    id: 'username',
    value: '',
  },

  password: {
    name: 'password',
    placeholder: 'Password',
    autoComplete: 'off',
    type: 'password',
    id: 'password',
    value: '',
  },

  email: {
    name: 'email',
    placeholder: 'Email',
    autoComplete: 'off',
    type: 'text',
    id: 'email',
    value: '',
  },
};

let authPageValidations = (name: string, value: string) => {
  let errors = [];
  switch(name) {
    case 'username':
      if (value.trim() === "") {
        errors.push('Username can\'t be empty');
        break;
      }
      if (!/^[a-zA-Z0-9]+$/.test(value)) {
        errors.push('Invalid Username. Avoid Special characters');
      }
      if (value.length < 3) {
        errors.push('Username should be at least 3 characters long');
      }
      if (value.length > 64) {
        errors.push('Username should not be longer than 64 characters');
      }
      break;

    case 'email':
      if (value.trim() === "") {
        errors.push('Email can\'t be empty');
        break;
      }
      if (!validator.isEmail(value)) {
        errors.push('Wrong email format');
        break;
      }
      break;

    default:
      break;
  }
  return errors;
}

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
  }



  return (
    <div className={`container`}>

      <p>You must log in to view the page at {from.pathname}</p>
      <Button onClick={login}>Log in</Button>
      <NavLink exact to='/'>Back to App</NavLink>

      <Formq initialFormqState={initialState} validations={authPageValidations}>
        <form onSubmit={submitAuthForm}>

          <div className='mb-3'>
            <FormqInput name='username' />
          </div>

          <div className='mb-3'>
            <FormqInput name='email' />
          </div>

          <div className='mb-3'>
            <FormqInput name='password' />
          </div>

        </form>
      </Formq>

    </div>
  );
}
