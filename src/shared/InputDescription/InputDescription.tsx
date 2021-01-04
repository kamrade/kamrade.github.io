import React from 'react';
import classNames from "classnames/bind";
import s from './InputDescription.module.scss';
import {IInputDescriptionProps} from './InputDescriptionTyping';

const sx = classNames.bind(s);

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
