import React, {useReducer, createContext, useContext, useEffect} from 'react';
import s from './Formq.module.scss';
import {formqReducer} from './FormqReducer';
import {IFormqProps, IFormqContext, IFormqState, IFormqAction} from './FormqTypes';

const formqContext = createContext<IFormqContext | null>(null);

export const Formq = ({children, initialFormqState, validations}: IFormqProps) => {

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
    // It also can be implemented with useEffect(() => {}, [formqState])
    // But I don't want to execute validations on every event, only on change.
    return formqReducer(state, action, validations);
  }, initialFormqState);

  // useEffect(() => {
  //   console.log('formqState changed');
  // }, [formqState]);

  return (
    <formqContext.Provider value={{formqState, dispatch}}>
      <div className={s.Formq}>
        {children}
      </div>
    </formqContext.Provider>
  )

};

export function useFormq() {
  return useContext(formqContext);
}
