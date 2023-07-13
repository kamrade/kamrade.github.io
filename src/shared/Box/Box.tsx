import React from 'react';
import s from './Box.module.scss';

export const Box: React.FC = ({ children }) => {
  return (
    <div className={s.Box}>
      {children}
    </div>
  );
}
