import React from 'react';

export type ButtonVariant = 'text' | 'outlined' | 'contained' | 'light';              // default = text
export type ButtonTheme = 'base' | 'primary' | 'success' | 'danger' | 'warning';      // default = base
export type ButtonSize  = 'md' | 'lg' | 'sm' | 'xs';                                  // default = sm
export type ButtonShape = 'circle' | 'square' | 'rounded';                            // default = rounded
export type ButtonType  = 'button' | 'submit' | 'reset' | undefined;                  // default = button

export interface ButtonProps {
  type?: ButtonType;
  theme?: ButtonTheme;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  className?: string;
  style?: any;
  block?: boolean;
  id?: string;
  wide?: boolean;
  bold?: boolean;

  iconButton?: boolean;

  // Use prefix and suffix only for insert icons or some graphic on it
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  children?: React.ReactNode;

  onClick?: React.MouseEventHandler<HTMLElement>;
}
