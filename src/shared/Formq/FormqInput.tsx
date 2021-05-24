import React from 'react';
import {useFormq} from './Formq';
import {Input, InputDescription} from 'shared';
import {UPDATE, FOCUS, BLUR} from 'shared/Formq/FormqTypes';

export interface IFormqInputProps {
  name: string;
}

export const FormqInput = ({name}: IFormqInputProps) => {

  let context = useFormq();
  let inputState = context?.formqState[name];
  let dispatch   = context?.dispatch;

  if (!inputState) {
    throw new Error('No context provided.');
  }

  if (!dispatch) {
    throw new Error('No dispatcher provided.');
  }

  return (
    <>
      <Input
        {...inputState.data}
        onChange={(event) => {
            dispatch && dispatch({
              type: UPDATE,
              data: {
                name: name,
                value: event.target.value,
              }
            });
        }}
        onFocus={(event) => {
          dispatch && dispatch({
            type: FOCUS,
            data: {
              name: name,
              value: event.target.value,
            }
          });
        }}
        onBlur={(event) => {
          dispatch && dispatch({
            type: BLUR,
            data: {
              name: name,
              value: event.target.value,
            }
          });
        }}
      />

      {
        inputState.errors && inputState.errors.length > 0 && inputState.data.touched &&
          <InputDescription type='error' message={inputState.errors.join(', ')}/>
      }
    </>
  );

}
