/*
  ## Input roadmap
  - [ ] 
*/

import React, {ForwardedRef, forwardRef, ForwardRefRenderFunction} from 'react';
import classNames from "classnames/bind";
import s from './Input.module.scss';
import { tuple } from 'shared/utils/type';

const sx = classNames.bind(s);

const InputTypes = tuple(
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week'
);

export type InputType = typeof InputTypes[number];

export interface IInputProps {
  type?: InputType;
}

const InternalInput: ForwardRefRenderFunction<unknown, IInputProps> = (props: IInputProps, ref: ForwardedRef<any>) => {

  let inputClassNames = sx({
    InputBase: true
  });

  return (
    <input
      className={inputClassNames}
      type="text"
      ref={ref}
    />
  );
};

const Input = forwardRef<unknown, IInputProps>( InternalInput );
Input.displayName = 'Input';
export {Input};
