import React from 'react';
import s from './DropdownOption.module.scss';

export const DropdownOption = ({children, active, onClick}: any) => {
  return (
    <div className={s.DropdownOption} onClick={onClick}>
      {active && <b>{children}</b>}
      {!active && children}


    </div>
  );
}
