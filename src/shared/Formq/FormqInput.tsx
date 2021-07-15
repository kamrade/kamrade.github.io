import React, {useCallback, useState, useEffect} from 'react';
import {useFormq} from './Formq';
import {Input, InputDescription} from 'shared';
import {UPDATE, FOCUS, BLUR, VALIDATE} from 'shared/Formq/FormqTypes';
import {IInputProps} from 'shared/Input/InputType';
import {debounce} from 'lodash';

export interface IFormqInputProps extends IInputProps {
  name: string;
}

export const FormqInput = ({name}: IFormqInputProps) => {

  let context = useFormq();
  let inputState = context?.formqState[name];
  let dispatch   = context?.dispatch;
  const [inputValue, setValue] = useState('');

  if (!inputState) {
    throw new Error('No context provided.');
  }

  if (!dispatch) {
    throw new Error('No dispatcher provided.');
  }

  const updateQuery = () => {
    // to avoid calling validate function every word changed.
    dispatch && dispatch({
      type: VALIDATE,
      data: { name, inputValue }
    });
  }

  const delayedQuery = useCallback( debounce(updateQuery, 500), [inputValue] );

  useEffect(() => {
    delayedQuery();

   // Cancel the debounce on useEffect cleanup.
   return delayedQuery.cancel;
}, [inputValue, delayedQuery]);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setValue(e.target.value);
    dispatch && dispatch({
      type: UPDATE,
      data: {
        name: name,
        value: e.target.value,
        validate: false
      }
    });
  }

  return (
    <>
      <Input
        {...inputState}
        valid={!(inputState.errors && inputState.errors.length > 0)}
        onChange={handleChange}
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
              touched: inputState?.touched
            }
          });
        }}
      />

      { inputState.errors && inputState.errors.length > 0 && inputState.touched && inputState.dirty &&
        <InputDescription type='error' message={inputState.errors.join(', ')}/>
      }

    </>
  );

}
