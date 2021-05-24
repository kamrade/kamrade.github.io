import React, {useReducer, createContext, useContext} from 'react';
import s from './Formq.module.scss';
import {formqReducer} from './FormqReducer';
import {IFormqProps, IFormqContext} from './FormqTypes';

const formqContext = createContext<IFormqContext | null>(null);

export const Formq = ({children, initialFormqState}: IFormqProps) => {

  Object.keys(initialFormqState).map((key, i) => {
    if (initialFormqState[key].data.name !== key) {
      throw new Error('Initial object name should be same as field "name"');
    }
    return null;
  })

  const [formqState, dispatch] = useReducer(formqReducer, initialFormqState);

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
