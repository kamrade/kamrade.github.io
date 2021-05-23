import React from 'react';
import s from './FormRow.module.scss';

export interface IFormRowProps {
  children: React.ReactChild;
  // Can't be used without real content `| never[]`
}

export const FormRow = ({children}: IFormRowProps) => {

  return (
    <div className={s.FormRow}>
      {children}
    </div>
  );

}
