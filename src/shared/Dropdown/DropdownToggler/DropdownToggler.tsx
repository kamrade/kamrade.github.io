import React, {useContext} from 'react';
import s from './DropdownToggler.module.scss';
import {DropdownContext, IDropdownContext} from '../Dropdown';
import {Icon} from 'shared';

export const DropdownToggler = ({children}: any) => {

  const {open} = useContext<IDropdownContext>(DropdownContext);

  return (
    <div className={`${s.DropdownToggler} ${open && s.Open}`}>
      <div className={s.Content}>
        {children}
      </div>
      <div className={s.Icon}>
        <Icon color="#007bff" icon="chevronDown" size={24} stroke={2} />
      </div>

    </div>
  );
}
