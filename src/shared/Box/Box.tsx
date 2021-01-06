import React from 'react';
import s from './Box.module.scss';

export const Box = ({ children }: any) => {
  return (
    <div className={s.Box}>
      {children}
    </div>
  );
}
