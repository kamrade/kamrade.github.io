// If user use wrong icon type should throw an Error
// I use stroke icons because it is more flexible than use shapes in icons
/*
  ## TODO: Icon roadmap
  - [ ] Handle events like onClick
*/

import React from 'react';
import s from './Icon.module.scss';

import { icons } from './icons.data';

export interface IIcon {
  icon?: string;
  size?: number;
  stroke?: number;
  color?: string;
}

export const Icon = (props: IIcon) => {
  const {
    icon = 'chevronDown',
    size = 24,
    color = 'black',
    stroke = 2
  } = props;

  return (
    <svg className={s.Icon} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      { icons[icon](color, stroke) }
    </svg>
  );
}
