/*
  ## Formaline roadmap
  - [ ] --
 */

import React, {useReducer} from 'react';
import {Input} from 'shared/Input/Input';
import {FormRow} from 'shared/FormRow';
import {Button} from 'shared/Button';
import {Card} from 'shared/Card';

import s from './Formaline.module.scss';
import {onInputChange} from './FormalineUtils';
import {UPDATE_FORM, IAction, IFormState, initialState} from './FormalineTypes';

const formsReducer = (state: IFormState, action: IAction) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, errors, touched, dirty } = action.data;

      return {
        ...state,
        [name]: {
          ...state[name],
          value, errors, touched, dirty
        }
      }
    default:
      return state;
  }
}

export default function Formaline() {
  const [formState, dispatch] = useReducer(formsReducer, initialState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange({
      name: e.target.name,
      value: e.target.value,
      dispatch,
      formState
    });
  }

  return (
    <div className="page">

      <header className="pt-5 pb-3" />

      <div className={s.FormalineContainer}>
        <h1 className='mb-3 page-title'>Formaline Page</h1>

        <form>
          <FormRow>
            <Input
              name='username'
              placeholder='Username'
              type='text'
              value={formState.username.value}
              onChange={handleChange} />
          </FormRow>

          <FormRow>
            <Input
              name='password'
              placeholder='Password'
              type='password'
              value={formState.password.value}
              onChange={handleChange} />
          </FormRow>
          <FormRow>
            <Button type="submit" theme='dark'>Submit</Button>
          </FormRow>
        </form>

        <Card>
          <pre className={'mb-0'}>
            Test
          </pre>
        </Card>

      </div>
    </div>
  )
}
