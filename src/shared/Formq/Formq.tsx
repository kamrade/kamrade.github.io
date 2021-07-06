/*

// INTERFACE

// [X] validate all fields in the STATE
// [X] clear all errors
// [ ] use Map or Set instead of just Object
// [ ] Property isValid for form
//
//
*/


import React, {useReducer, createContext, useContext, useEffect} from 'react';
import s from './Formq.module.scss';
import {formqReducer} from './FormqReducer';
import {IFormqProps, IFormqContext, IFormqState, IFormqAction} from './FormqTypes';
import { PREVALIDATE, RESET } from 'shared/Formq/FormqTypes';

const formqContext = createContext<IFormqContext | null>(null);

export const Formq = ({children, initialFormqState, validations, onSubmit}: IFormqProps) => {

  // FORMQ STATE INIT
  useEffect(() => {

    // Check for name property present in initial state
    Object.keys(initialFormqState).map((key, i) => {
      if (initialFormqState[key].name !== key) {
        throw new Error('Initial object name should be same as field "name"');
      }
      return null;
    });

    // fill tech fields
    Object.keys(initialFormqState).map((key, _i) => {
      initialFormqState[key].touched = false;
      initialFormqState[key].dirty = false;
      initialFormqState[key].focused = false;
      initialFormqState[key].errors = [];
      return null;
    });

  }, [initialFormqState]);

  // This might be implemented with useEffect(() => {}, [formqState])
  // But I don't want to execute validations on every event, only on change.
  const reducer = (state: IFormqState, action: IFormqAction ): IFormqState => formqReducer(state, action, validations, initialFormqState);
  const [formqState, dispatch] = useReducer(reducer, initialFormqState);

  // useEffect(() => {
  //   console.log('formqState changed');
  // }, [formqState]);

  const submitForm = (event: React.SyntheticEvent) => {

    event.preventDefault();
    Object.keys(formqState).forEach((name, _i) => {
      dispatch({
        type: PREVALIDATE,
        data: {
          name: name,
          value: formqState[name].value // this is not necessary here
        }
      });
    });

    onSubmit(formqState);
  }

  const clearForm = (_event: React.SyntheticEvent) => {
    dispatch({ type: RESET  });
  }

  return (
    <formqContext.Provider value={{formqState, dispatch}}>
      <div className={s.Formq}>

        {children({submitForm, clearForm})}

      </div>
    </formqContext.Provider>
  )

};

export function useFormq() {
  return useContext(formqContext);
}
