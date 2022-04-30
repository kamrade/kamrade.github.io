import React from 'react';

export type ButtonTheme = 'text' | 'link' | 'default' | 'accent' | 'success' | 'danger' | 'primary' | 'dark';
export type ButtonSize  = 'md' | 'lg' | 'sm' | 'xs'; // sm = default
export type ButtonShape = 'circle' | 'square' | 'rounded'; // rounded = default
export type ButtonType  = 'button' | 'submit' | 'reset' | undefined;

export interface ButtonProps {
  type?: ButtonType;
  theme?: ButtonTheme;
  shape?: ButtonShape;
  disabled?: boolean;
  size?: ButtonSize;
  className?: string;
  style?: any;
  block?: boolean;
  id?: string;
  wide?: boolean;

  // Use prefix and suffix only for insert icons or some graphic on it
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  children: React.ReactNode;

  onClick?: React.MouseEventHandler<HTMLElement>;
}
