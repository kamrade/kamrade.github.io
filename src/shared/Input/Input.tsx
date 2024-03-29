/*
  ## TODO: Input roadmap
  - [x] Placeholder
  - [x] Uncontrolled functionality
  - [ ] Textarea
  - [ ] Input state:
        - [x] touched, untouched
        - [x] dirty, pristine
        - [x] valid, invalid
        - [ ] inner valid/invalid state
  - [ ] required, pattern
  - [x] focus and blur methods
  - [ ] uncontrolled input state (touched, dirty, valid, etc)
  - [ ] focused input after submit should display errors if has
*/

import React, {useState, forwardRef} from 'react';
import classNames from "classnames/bind";
import s from './Input.module.scss';
import {isNil} from 'lodash';
import {IInputProps, InputSize} from 'shared/Input/InputType';

const sx = classNames.bind(s);

const InternalInput: React.ForwardRefRenderFunction<unknown, IInputProps> =
  (props: IInputProps, ref: React.ForwardedRef<any>) => {

  const {
    value: propsValue,
    onChange,
    onFocus,
    onBlur,
    type,

    touched: propsTouched,
    dirty: propsDirty,
    focused: propsFocused,
    valid: propsValid,

    size = 'md',
    shape = 'rounded',
    ...other} = props;

  const [focused, setFocused] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);
  const [dirty, setDirty]     = useState<boolean>(false);

  let inputSize: InputSize = size ? size : 'md';

  let inputClassNames = sx({
    InputBase:  true,

    InputSM:    inputSize === 'sm',
    InputMD:    inputSize === 'md',
    InputLG:    inputSize === 'lg',

    Focused:    isNil(propsFocused) ? focused : propsFocused,
    Touched:    isNil(propsTouched) ? touched : propsTouched,
    Untouched:  isNil(propsTouched) ? !touched : !propsTouched,
    Dirty:      isNil(propsDirty)   ? dirty : propsDirty,
    Pristine:   isNil(propsDirty)   ? !dirty : !propsDirty,
    Valid:      isNil(propsValid)   ? true : propsValid,
    Invalid:    isNil(propsValid)   ? false : !propsValid,

    Circle: shape === 'circle',
    Square: shape === 'square',
    SoftSquare: shape === 'soft-square',
    Rounded: shape === 'rounded',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isNil(propsDirty) && setDirty(true);
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    isNil(propsFocused) && setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    isNil(propsFocused) && setFocused(false);
    isNil(propsTouched) && setTouched(true);
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
