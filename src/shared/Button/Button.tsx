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
  - [ ] Circled button
  - [ ] Link and Anchor button
*/

import React, { memo, forwardRef, ForwardedRef, ForwardRefRenderFunction } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames/bind';
import { tuple } from 'shared/utils/type';

const ButtonThemes = tuple('primary', 'secondary', 'dark');
export type ButtonTheme = typeof ButtonThemes[number];

const sx = classNames.bind(s);

export interface IBaseButtonProps {
  type?: string;
  theme?: ButtonTheme;
  children: any;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

const InternalButton: ForwardRefRenderFunction<unknown, IBaseButtonProps> = (props: IBaseButtonProps, ref: ForwardedRef<any> ) => {

  const {theme, children, ...rest} = props;

  let buttonClassNames = sx({
    ButtonBase: true,
    Primary: theme === 'primary',
    Secondary: theme === 'secondary',
    Dark: theme === 'dark'
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
export {Button};
