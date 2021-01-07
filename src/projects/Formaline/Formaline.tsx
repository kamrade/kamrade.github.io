/*
  ## Formaline roadmap
  - [ ] --
 */

import React, {useReducer, useState, ChangeEvent, FocusEvent} from 'react';
import {Input, FormRow, Button, Card, InputDescription} from 'shared';
import axios, {AxiosResponse} from 'axios';

import {onInputChange, onInputFocus, onInputBlur} from './FormalineUtils';
import {initialState, UPDATE_FORM} from './FormalineTypes';
import {formsReducer} from './FormalineReducer';
import {formalineValidations} from './FormalineValidations';

import s from './Formaline.module.scss';

import {Modal} from 'shared/Modal/Modal';

const authServer = process.env.REACT_APP_AUTH_SERVER;

/*
// COMPONENT
 */
export default function Formaline() {

  const [formState, dispatch] = useReducer(formsReducer, initialState);
  const [formError, setFormError] = useState('');
  const [modal, setModal] = useState(false);

  const isFormValid = () => {

    let formIsValid = true;

    for (let key in formState) {
      if (formState.hasOwnProperty(key)) {
        let fieldState = formState[key];

        if (fieldState.dirty && fieldState.touched) {
          if (fieldState.errors && fieldState.errors.length)
            formIsValid = false;
        } else {
          let errors: string[] = formalineValidations(fieldState.name, fieldState.value);
          if (errors.length > 0) {
            dispatch({
              type: UPDATE_FORM,
              data: {...fieldState, touched: true, dirty: true, errors}
            });
            formIsValid = false;
          }
        }
      }
    }

    return formIsValid;
  }

  const baseEventHandlerParams = (e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>) => ({
    name: e.target.name,
    value: e.target.value,
    dispatch,
    formState
  });

  const submitAuthForm = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if ( isFormValid() ) {
      axios.post(`http://${authServer}/api/auth/signup`, {
        username: formState.username.value,
        password: formState.password.value
      }).then((res: AxiosResponse<any>) => {
        console.log(res)
      }).catch(err => {
        const errorMessage = (err.response && err.response.data && err.response.data.error) || 'Unknown error';
        // const errorMessage = err.response.data.error || 'Unknown error';
        console.dir(errorMessage);
        setFormError(errorMessage);
      });
    }
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onInputFocus(baseEventHandlerParams(e));
  }

  return (
    <div className="page">

      <header className="pt-5 pb-3" />

      <div className={s.FormalineContainer}>
        <h4 style={{marginBottom: '1.75rem', fontWeight: 'bold'}}>Formaline Page</h4>

        <form onSubmit={submitAuthForm}>

          {formError &&
            <Card theme='error' onClose={() => setFormError('')}>
              <>{formError}</>
            </Card>
          }

          <FormRow>
            <>
              <label htmlFor='username-field'>Username</label>
              <Input
                autoComplete='off'
                name='username'
                type='text'
                id='username-field'

                touched={formState.username.touched}
                dirty={formState.username.dirty}
                focused={formState.username.focused}
                valid={formState.username.errors.length === 0}

                value={formState.username.value}
                onBlur={(e: FocusEvent<HTMLInputElement>) => onInputBlur(baseEventHandlerParams(e))}
                onFocus={handleInputFocus}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(baseEventHandlerParams(e))} />

              { formState.username.errors.length > 0 && formState.username.touched &&
                  <InputDescription type='error' message={formState.username.errors.join(', ')}/>
              }
            </>


          </FormRow>

          <FormRow>
            <>
              <label htmlFor='password-field'>Password</label>
              <Input
                name='password'
                type='password'
                id='password-field'

                touched={formState.password.touched}
                dirty={formState.password.dirty}
                focused={formState.password.focused}
                valid={formState.password.errors.length === 0}

                value={formState.password.value}
                onBlur={(e: FocusEvent<HTMLInputElement>) => onInputBlur(baseEventHandlerParams(e))}
                onFocus={(e: FocusEvent<HTMLInputElement>) => onInputFocus(baseEventHandlerParams(e))}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(baseEventHandlerParams(e))} />

              { formState.password.errors.length > 0 && formState.password.touched &&
                <InputDescription type='error' message={formState.password.errors.join(', ')}/>
              }
            </>
          </FormRow>
          <FormRow>
            <>
              <Button wide={true} type='submit' theme='dark'>Submit</Button>
            </>
          </FormRow>


        </form>

        <div className="my-5">
          <Button onClick={() => setModal(true)}>ShowModal</Button>
          <Modal showModal={modal} setModal={setModal}/>
        </div>

        <Card>{{
          header: (<div>Header</div>),
          content: (<div>Content</div>),
          actions: (<div><Button block={true} theme={'dark'}>Close</Button></div>)
        }}</Card>

        <Card>
          <pre style={{marginBottom: 0, fontSize: '12px'}}>
            {JSON.stringify(formState, undefined, 2)}
          </pre>
        </Card>

      </div>
    </div>
  )
}
