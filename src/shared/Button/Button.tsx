/*
// ButtonComponent
 */
import React, { memo, forwardRef, ForwardedRef, ForwardRefRenderFunction } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames/bind';
import { tuple } from 'shared/utils/type';

const ButtonThemes = tuple('primary', 'secondary', 'dark');
export type ButtonTheme = typeof ButtonThemes[number];

export type ButtonSize = 'sm' | 'md' | 'lg';

const sx = classNames.bind(s);

export interface IBaseButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  theme?: ButtonTheme;
  children: any;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  wide?: boolean;
  block?: boolean;
  size?: ButtonSize;
  id?: string;
}

const InternalButton: ForwardRefRenderFunction<unknown, IBaseButtonProps> = (props: IBaseButtonProps, ref: ForwardedRef<any> ) => {

  const {theme, children, type, wide, block, size, ...other} = props;

  let buttonClassNames = sx({
    ButtonBase: true,
    Primary: theme === 'primary',
    Secondary: theme === 'secondary',
    Dark: theme === 'dark',
    Wide: wide,
    Block: block,
    ButtonSM: size === 'sm',
    ButtonLG: size === 'lg'
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;
    // if loading => return

    if ( onClick ) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  return (
    <button { ...other } ref={ref} onClick={handleClick} type={type || 'button'} className={buttonClassNames}>
      {children}
    </button>
  );
};

const Button = memo(forwardRef<unknown, IBaseButtonProps>( InternalButton ));
Button.displayName = 'Button';
export {Button};
