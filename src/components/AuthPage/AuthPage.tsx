import React, {useState, useRef} from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {useAuth} from 'components/ProvideAuth/ProvideAuth';
import {Button, Formq, FormqInput, Modal, Input} from 'shared';
import {IFormqState} from 'shared/Formq/FormqTypes';

import { initialState } from './AuthPageInitialState';
import { authPageValidations } from './AuthPageValidations';

// let fState: IFormqState = initialState;

export const AuthPage = () => {

  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  const fState = useRef<IFormqState>(initialState);

  const [modal, setModal] = useState(false);

  let {from}: any = location.state || { from: {pathname: '/'} };

  let login = () => {
    auth?.signin(() => {
      history.replace(from);
    })
  }

  const onSubmit = (formqState: IFormqState, isValid: boolean) => {

    if (isValid) {
      // Generate random reject and show server error message
      return new Promise((resolve, _reject) => {
        setTimeout(() => {

          fState.current = formqState;
          isValid && setModal(true);
          resolve('done');

        }, 2000);
      });
    } else {
      return new Promise((resolve) => resolve());
    }


  }

  return (
    <div className={`container`}>

      <p>You must log in to view the page at {from.pathname}</p>
      <Button onClick={login}>Log in</Button>
      <NavLink exact to='/'>Back to App</NavLink>

      <Formq
        initialFormqState={initialState}
        validations={authPageValidations}
        clearAfterSubmit={true}
        onSubmit={onSubmit}>
        {
          ({ handleSubmit, clearForm , isSubmitting}: any) => ( // TODO: typing

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

              <div className='mb-3'>
                <Input disabled placeholder='Disabled field' />
              </div>

              <div className='mb-3'>
                <Input size='sm' placeholder='Disabled field' />
              </div>


              <Button disabled={isSubmitting} wide={true} type='button' theme='secondary' onClick={clearForm}>Clear</Button>{' '}
              <Button disabled={isSubmitting} wide={true} type='submit' theme='dark'>Submit</Button>

            </form>

          )
        }

      </Formq>

      <Modal showModal={modal} setModal={setModal}>
        <div>
          {Object.keys(fState.current).map((el, i) => (
            <div key={i} className='mb-1'>
              <span className='text-muted'>{el}:</span>
              {fState.current[el].value}
            </div>
          ))}
        </div>
      </Modal>

    </div>
  );
}
