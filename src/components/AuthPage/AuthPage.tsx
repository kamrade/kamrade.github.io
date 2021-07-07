import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {useAuth} from 'components/ProvideAuth/ProvideAuth';
import {Button, Formq, FormqInput} from 'shared';
import {IFormqState} from 'shared/Formq/FormqTypes';

import { initialState } from './AuthPageInitialState';
import { authPageValidations } from './AuthPageValidations';


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

  const onSubmit = async (_formqState: IFormqState, isValid: boolean) => {
    // console.log(':: submit in AuthPage');
    console.log(isValid);
  }

  return (
    <div className={`container`}>

      <p>You must log in to view the page at {from.pathname}</p>
      <Button onClick={login}>Log in</Button>
      <NavLink exact to='/'>Back to App</NavLink>

      <Formq
        initialFormqState={initialState}
        validations={authPageValidations}
        onSubmit={onSubmit}>
        {
          ({ handleSubmit, clearForm }: any) => ( // TODO: typing

            <form onSubmit={handleSubmit} >

              <div className='mb-3'>
                <FormqInput name='username' />
              </div>

              <div className='mb-3'>
                <FormqInput name='email' />
              </div>

              <div className='mb-3'>
                <FormqInput name='password' />
              </div>

              <Button wide={true} type='button' theme='secondary' onClick={clearForm}>Clear</Button>{' '}
              <Button wide={true} type='submit' theme='dark'>Submit</Button>

            </form>

          )
        }

      </Formq>

    </div>
  );
}
