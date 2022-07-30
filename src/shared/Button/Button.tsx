/*
// ButtonComponent
 */
import React, { memo, forwardRef, ForwardedRef, ForwardRefRenderFunction } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames/bind';
import { RiLoaderLine } from "react-icons/ri";

import { ButtonProps } from './ButtonTypes'

const sx = classNames.bind(s);

const InternalButton: ForwardRefRenderFunction<unknown, ButtonProps> = (props: ButtonProps, ref: ForwardedRef<any> ) => {

  const { theme, shape, children, size, bold,
    disabled, type, prefix, suffix, className, block, wide, loading, ...other} = props;

  let buttonClassNames = sx({
    ButtonBase: true,

    Text: theme === 'text',
    Link: theme === 'link',
    Default: theme === 'default',
    Success: theme === 'success',
    Danger: theme === 'danger',
    Accent: theme === 'accent',
    Primary: theme === 'primary',
    Dark: theme === 'dark',

    XS: size === 'xs',
    SM: size === 'sm',
    MD: size === 'md',
    LG: size === 'lg',

    Circle: shape === 'circle',
    Square: shape === 'square',
    Rounded: shape === 'rounded',

    Bold: bold,
    Loading: loading,
    Wide: wide,
    Block: block,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;

    if ( onClick ) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  return (
    <button { ...other } disabled={disabled || loading} ref={ref} onClick={handleClick} type={type || 'button'} className={buttonClassNames}>
      {prefix && <span className={s.buttonPrefix}>{prefix}</span>}
      {children}
      {suffix && <span className={s.buttonSuffix}>{suffix}</span>}
      {loading && <span className={s.preLoader}>
        <span className={s.preloaderAnimator}>
          <RiLoaderLine fontSize={'1em'}/>
        </span>
      </span>}
    </button>
  );
};

const Button = memo(forwardRef<unknown, ButtonProps>( InternalButton ));
Button.displayName = 'Button';
export {Button};
