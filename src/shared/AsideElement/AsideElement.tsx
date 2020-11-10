// Element wrapper inside Aside component which determine spacing

import React from 'react';
import s from './AsideElement.module.scss';

export const AsideElement = ({ children } : any) => {
  return (
    <div className={s.AsideElement}>
      { children }
    </div>
  );
}