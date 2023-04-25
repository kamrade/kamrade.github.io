import React from 'react';
import s from './Checkbox.module.scss';
import classNames from "classnames/bind";
import { RiCheckLine } from "react-icons/ri";

const sx = classNames.bind(s);

export interface ICheckboxProps {
  value: boolean;
  onChange: any;
  labelText: string;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ value, onChange, labelText }) => {
  return (
    <label className={sx({
      Checkbox: true,
      CheckboxSet: value
    })}>
      <input type="checkbox" checked={value} className={s.CheckboxEl} onChange={onChange}/>
      <div className={s.CheckboxIndicator}>
        <div className={s.CheckboxIcon}>
          <RiCheckLine/>
        </div>
      </div>
      <div className="CheckboxText">{labelText}</div>
    </label>
  );
}