import React, {useRef} from 'react';
import s from './Input.module.scss';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface IInputProps {
  size?: SizeType;
}

export const Input = () => {

  const saveInput = useRef(null);

  return (
    <div className={s.InputContainer}>

      <input
        type="text"
        ref={saveInput}
      />

    </div>
  );
}
