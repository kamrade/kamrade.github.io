import React, {useReducer} from 'react';
import { Input } from 'shared/Input/Input';
import { FormRow } from 'shared/FormRow';
import s from './Formaline.module.scss';
import { initialState } from './FormalineUtils';
import {UPDATE_FORM, onInputChange, IAction} from './FormalineUtils';

const formsReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, errors, touched, dirty, isFormValid } = action.data;
      return {
        ...state,
        [name]: {...state[name], value, errors, touched, dirty},
        isFormValid
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
        </form>

      </div>


    </div>
  )
}
