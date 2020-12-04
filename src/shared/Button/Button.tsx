import React, { memo, forwardRef, ForwardedRef } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames/bind';
import { tuple } from 'shared/utils/type';

const ButtonTypes = tuple('primary', 'secondary');
export type ButtonType = typeof ButtonTypes[number];

const sx = classNames.bind(s);

export interface IBaseButtonProps {
  type?: ButtonType;
  children: any;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Button = memo( forwardRef( (props: IBaseButtonProps, ref: ForwardedRef<any> ) => {

  let buttonClassNames = sx({
    ButtonBase: true,
    ButtonPrimary: props.type === 'primary'
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;
    // if loading => return

    if ( onClick ) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  return (
    <div className={s.ButtonBox}>
      <button onClick={handleClick} type="button" className={buttonClassNames}>
        {props.children}
      </button>
    </div>
  );
}));
