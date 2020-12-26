/*
  ## Button roadmap
  - [ ] Loading
  - [ ] Icon
  - [ ] Negative margin for child Icons
  - [ ] Size
  - [ ] Block
  - [ ] Outline
  - [ ] More themes
  - [ ] More themes
  - [ ] Use mixins and loops for theming and sizing.
*/

import React, { memo, forwardRef, ForwardedRef, ForwardRefRenderFunction } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames/bind';
import { tuple } from 'shared/utils/type';

const ButtonTypes = tuple('primary', 'secondary', 'dark');
export type ButtonType = typeof ButtonTypes[number];

const sx = classNames.bind(s);

export interface IBaseButtonProps {
  type?: ButtonType;
  children: any;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

const InternalButton: ForwardRefRenderFunction<unknown, IBaseButtonProps> = (props: IBaseButtonProps, ref: ForwardedRef<any> ) => {

  const {type, children, ...rest} = props;

  let buttonClassNames = sx({
    ButtonBase: true,
    Primary: type === 'primary',
    Secondary: type === 'secondary',
    Dark: type === 'dark'
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onClick } = props;
    // if loading => return

    if ( onClick ) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  return (
    <button { ...rest } ref={ref} onClick={handleClick} type="button" className={buttonClassNames}>
      {children}
    </button>
  );
};

const Button = memo(forwardRef<unknown, IBaseButtonProps>( InternalButton ));

Button.displayName = 'Button';

export { Button };
