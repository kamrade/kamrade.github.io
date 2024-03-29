import React, {useState, useRef, useEffect} from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import {useAuth} from 'components/ProvideAuth/ProvideAuth';
import {Button, Formq, FormqInput, Modal, FormRow} from 'shared';
import {IFormqState, IFormqReturnArgs} from 'shared/Formq/FormqTypes';

import { initialState } from './AuthPageInitialState';
import { authPageValidations } from './AuthPageValidations';

import s from './AuthPage.module.scss';
import {RiArrowLeftLine} from "react-icons/ri";

// let fState: IFormqState = initialState;

export const AuthPage = () => {

  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  const fState = useRef<IFormqState>(initialState);

  const [modal, setModal] = useState(false);
  const mountedRef = useRef<boolean>(false);

  let {from}: any = location.state || { from: {pathname: '/'} };

  // TODO: fix it
  // eslint-disable-next-line
  let login = () => {
    auth?.signin(() => {
      history.replace(from);
    })
  }

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    }
  }, []);

  const onSubmit = (formqState: IFormqState, isValid: boolean): Promise<string> => {

    // Generate random reject and show server error message
    return new Promise((resolve, _reject) => {
      if (isValid) {
        setTimeout(() => {
          fState.current = formqState;
          isValid && setModal(true);
          console.log('is mounted:', mountedRef.current);
          resolve('token pair');
        }, 2000);
      } else {
        resolve('invalid');
      }
    });

  }

  return (
    <div className={s.AuthPage}>
      <div className={s.AuthPageContent}>
        <div className={`container`}>


              <div className={'mb-9'}>
                <NavLink exact to='/apps'>
                  <Button prefix={<RiArrowLeftLine />} variant={'text'} theme={'base'} size={'sm'}>back to the app</Button>
                </NavLink>
              </div>

              {/*<p>You must log in to view the page at {from.pathname}</p>*/}
              <h1>Sign Up</h1>
              <p className='mb-5'>Enter your credentials</p>
              {/* <UIKitButtonPage onClick={login}>Log in</UIKitButtonPage> */}


              <Formq
                initialFormqState={initialState}
                validations={authPageValidations}
                clearAfterSubmit={true}
                onSubmit={onSubmit}>
                {
                  ({ handleSubmit, clearForm , isSubmitting}: IFormqReturnArgs) => ( // TODO: typing

                    <form onSubmit={handleSubmit} >

                      <FormRow>
                        <FormqInput name='username' />
                      </FormRow>

                      <FormRow>
                        <FormqInput name='email' />
                      </FormRow>

                      <FormRow>
                        <FormqInput name='password' />
                      </FormRow>

                      {/* Create FormqButton which be able to disable automatically, based on Formq context */}

                      { /*
                      <FormRow>
                        <UIKitButtonPage size='lg' disabled={isSubmitting} block={true} type='reset' theme='secondary' onClick={clearForm}>Clear</UIKitButtonPage>
                      </FormRow>
                      */ }

                      <FormRow>
                        <Button size='lg' disabled={isSubmitting} block={true} type='submit' theme='base' variant={'contained'}>Submit</Button>
                      </FormRow>

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
      </div>
    </div>
  );
}
