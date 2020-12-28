/*
  ## Formaline roadmap
  - [ ] --
 */

import React, {useReducer, ChangeEvent, FocusEvent} from 'react';

import {Input} from 'shared/Input/Input';
import {FormRow} from 'shared/FormRow';
import {Button} from 'shared/Button';
import {Card} from 'shared/Card';

import {onInputChange, onInputFocus, onInputBlur} from './FormalineUtils';
import {initialState} from './FormalineTypes';
import {formsReducer} from './FormalineReducer';

import s from './Formaline.module.scss';

export default function Formaline() {

  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const baseEventHandlerParams = (e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>) => ({
    name: e.target.name,
    value: e.target.value,
    dispatch,
    formState
  });

  return (
    <div className="page">

      <header className="pt-5 pb-3" />

      <div className={s.FormalineContainer}>
        <h1 className='mb-3 page-title'>Formaline Page</h1>

        <form>
          <FormRow>
            <Input
              autoComplete='off'
              name='username'
              placeholder='Username'
              type='text'
              value={formState.username.value}
              onBlur={(e: FocusEvent<HTMLInputElement>) => onInputBlur(baseEventHandlerParams(e))}
              onFocus={(e: FocusEvent<HTMLInputElement>) => onInputFocus(baseEventHandlerParams(e))}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(baseEventHandlerParams(e))} />
          </FormRow>

          <FormRow>
            <Input
              name='password'
              placeholder='Password'
              type='password'
              value={formState.password.value}
              onBlur={(e: FocusEvent<HTMLInputElement>) => onInputBlur(baseEventHandlerParams(e))}
              onFocus={(e: FocusEvent<HTMLInputElement>) => onInputFocus(baseEventHandlerParams(e))}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onInputChange(baseEventHandlerParams(e))} />
          </FormRow>
          <FormRow>
            <Button type="submit" theme='dark'>Submit</Button>
          </FormRow>
        </form>

        <Card>
          <pre style={{marginBottom: 0, fontSize: '12px'}}>
            {JSON.stringify(formState, undefined, 2)}
          </pre>
        </Card>

      </div>
    </div>
  )
}
