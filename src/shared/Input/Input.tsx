/*
  ## Input roadmap
  - [x] Placeholder
  - [ ] Uncontrolled functionality
  - [ ] Textarea
  - [ ] Input state:
        - [x] touched, untouched
        - [x] dirty, pristine
        - [ ] valid, invalid
  - [ ] required, pattern
  - [ ] select and blur methods
*/

import React, {useState, forwardRef} from 'react';
import classNames from "classnames/bind";
import s from './Input.module.scss';
import {InputType} from './InputType';
const sx = classNames.bind(s);



export interface IInputProps {
  name?: string;
  placeholder?: string;
  type?: InputType;

  value?: string;
  disabled?: boolean;
  required?: boolean;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const InternalInput: React.ForwardRefRenderFunction<unknown, IInputProps> =
  (props: IInputProps, ref: React.ForwardedRef<any>) => {

  const {value: propsValue, onChange, onFocus, onBlur, type, ...other} = props;

  const [focused, setFocused] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [dirty, setDirty]     = useState<boolean>(false);

  let inputClassNames = sx({
    InputBase:  true,
    Focused:    focused,
    Touched:    touched,
    Untouched:  !touched,
    Dirty:      dirty,
    Pristine:   !dirty

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirty(true);
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    setTouched(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <input
      {...other}
      value={propsValue}

      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}

      className={inputClassNames}
      type={type || 'text'}
      ref={ref}

    />
  );
};

const Input = forwardRef<unknown, IInputProps>( InternalInput );
Input.displayName = 'Input';
export {Input};
