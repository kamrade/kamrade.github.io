/*

// INTERFACE

// [X] validate all fields in the STATE
// [X] clear all errors
// [ ] use Map or Set instead of just Object
// [ ] Property isValid for whole form
// [ ] Property disabled (for Input)
// [ ] Property isSubmitting
// [ ] Number of times user tried to submit the form
//
//
//
// FORMIK EVENTS
// [ ] SUBMIT_ATTEMPT
// [ ] SUBMIT_FAILURE
// [ ] SUBMIT_SUCCESS
// [ ] SET_ISVALIDATING, boolean
// [ ] SET_ISSUBMITTING, boolean
// [ ] SET_VALUES, Values
// [ ] SET_FIELD_VALUE, {field, value}
// [ ] SET_FIELD_TOUCHED, {field, value}
// [ ] SET_FIELD_ERROR, {field, value}
// [ ] SET_TOUCHED, Touched<Values>
// [ ] SET_ERRORS, Errors<Values>
// [ ] SET_STATUS, any
// [ ] SET_FORMIK_STATE, formqState
]] [ ] RESET_FORM, formqState
//
//
//
//
*/


import React, {useReducer, createContext, useContext, useEffect, useState} from 'react';
import s from './Formq.module.scss';
import {formqReducer} from './FormqReducer';
import {IFormqProps, IFormqContext, IFormqState, IFormqAction} from './FormqTypes';
import { RESET, PREVALIDATE } from 'shared/Formq/FormqTypes';

const formqContext = createContext<IFormqContext | null>(null);

export const Formq = ({children, initialFormqState, validations, onSubmit, clearAfterSubmit}: IFormqProps) => {

  // FORMQ STATE INIT
  useEffect(() => {

    // Check for name property present in initial state
    Object.keys(initialFormqState).map((key, _i) => {
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
      initialFormqState[key].errors = validations(key, initialFormqState[key].value);
      return null;
    });

  }, [initialFormqState, validations]);

  // This might be implemented with useEffect(() => {}, [formqState])
  // But I don't want to execute validations on every event, only on change.
  const reducer = (state: IFormqState, action: IFormqAction ): IFormqState => formqReducer(state, action, validations, initialFormqState);
  const [formqState, dispatch] = useReducer(reducer, initialFormqState);

  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {

    const checkFormqValidity = () => {
      let names: string[] = Object.keys(formqState);
      for (let i = 0; i < names.length; i++ ) {
        let errors = formqState[ names[i] ].errors;
        if (errors?.length) {
          return false;
        }
      }
      return true;
    }

    if (isSubmitting) {
      let isFormValid = checkFormqValidity();
      onSubmit(formqState, isFormValid);
      setSubmitting(false); // this should be async

      // TODO: before reset need blur all inputs inside.
      if (clearAfterSubmit && isFormValid) {
        dispatch({ type: RESET });
      }

    }

  }, [formqState, isSubmitting, onSubmit, clearAfterSubmit]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({type: PREVALIDATE});
    setSubmitting(true);
  }

  const clearForm = (_event: React.SyntheticEvent) => {
    console.clear();
    dispatch({ type: RESET  });
  }

  return (
    <formqContext.Provider value={{formqState, dispatch}}>
      <div className={s.Formq}>

        {   children( {handleSubmit, clearForm} )   }

      </div>
    </formqContext.Provider>
  )

};

export function useFormq() {
  return useContext(formqContext);
}
