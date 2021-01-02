import React from 'react';
import classNames from "classnames/bind";
import s from './InputDescription.module.scss';

const sx = classNames.bind(s);

export type InputDescriptionType = 'default' | 'error';

export interface IInputDescriptionProps {
  type: InputDescriptionType;
  message: string;
}

export const InputDescription = ({ message, type }: IInputDescriptionProps) => {

  let descriptionClassNames = sx({
    InputDescription: true,
    Error: type === 'error'
  });

  return (
    <div className={descriptionClassNames}>
      {message}
    </div>
  );
}
