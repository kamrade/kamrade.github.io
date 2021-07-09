import React, {useState, useRef} from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {useAuth} from 'components/ProvideAuth/ProvideAuth';
import {Button, Formq, FormqInput, Modal} from 'shared';
import {IFormqState, IFormqReturnArgs} from 'shared/Formq/FormqTypes';

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

  const onSubmit = (formqState: IFormqState, isValid: boolean): Promise<string> => {

    // Generate random reject and show server error message
    return new Promise((resolve, _reject) => {
      if (isValid) {
        setTimeout(() => {
          fState.current = formqState;
          isValid && setModal(true);
          resolve('done');
        }, 2000);
      } else {
        resolve('done');
      }
    });

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
          ({ handleSubmit, clearForm , isSubmitting}: IFormqReturnArgs) => ( // TODO: typing

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

              {/* Create FormqButton which be able to disable automatically, based on Formq context */}
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
