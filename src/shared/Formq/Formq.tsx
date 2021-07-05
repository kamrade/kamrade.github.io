/*
// interface
// validate all fields in the STATE
// clear all errors
//
*/


import React, {useReducer, createContext, useContext, useEffect} from 'react';
import s from './Formq.module.scss';
import {formqReducer} from './FormqReducer';
import {IFormqProps, IFormqContext, IFormqState, IFormqAction} from './FormqTypes';
import { PREVALIDATE } from 'shared/Formq/FormqTypes';

const formqContext = createContext<IFormqContext | null>(null);

export const Formq = ({children, initialFormqState, validations, onSubmit}: IFormqProps) => {

  // FORMQ STATE INIT
  useEffect(() => {
    Object.keys(initialFormqState).map((key, i) => {
      if (initialFormqState[key].name !== key) {
        throw new Error('Initial object name should be same as field "name"');
      }
      return null;
    });

    Object.keys(initialFormqState).map((key, _i) => {
      initialFormqState[key].touched = false;
      initialFormqState[key].dirty = false;
      initialFormqState[key].focused = false;
      initialFormqState[key].errors = [];
      return null;
    });

  }, [initialFormqState]);

  const [formqState, dispatch] = useReducer((state: IFormqState, action: IFormqAction ) => {
    // This can also be implemented with useEffect(() => {}, [formqState])
    // But I don't want to execute validations on every event, only on change.
    return formqReducer(state, action, validations);
  }, initialFormqState);

  // useEffect(() => {
  //   console.log('formqState changed');
  // }, [formqState]);

  const submitAuthForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    Object.keys(formqState).forEach((name, _i) => {
      console.log(validations(name, formqState[name].value));
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

  return (
    <formqContext.Provider value={{formqState, dispatch}}>
      <div className={s.Formq}>
        <form onSubmit={submitAuthForm}>
          {children}
        </form>
      </div>
    </formqContext.Provider>
  )

};

export function useFormq() {
  return useContext(formqContext);
}
