import React from 'react';
import s from './Label.module.scss';

interface LabelProps {
  children: any;
  id?: string;
  text?: string;
}

export const Label: React.FC<LabelProps>  = ({ children, id, text }) => {
  return (
    <label className={s.Label} htmlFor={id}>
      { text && <span className={s.LabelText}>{text}</span>}
      {children}
    </label>
  );
}
