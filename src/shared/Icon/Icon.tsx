// If user use wrong icon type should throw an Error
// I use stroke icons because it is more flexible than use shapes in icons

import React from 'react';
import s from './Icon.module.scss';

export interface IIcon {
  icon?: string;
  size?: number;
  stroke?: number;
  color?: string;
}

const icons: any = {
  chevronDown: (color: string, stroke: number) => <path d="M6 9L12 15L18 9" stroke={color} strokeWidth={stroke} strokeLinejoin="round" />,
  chevronLeft: (color: string) => <path fillRule="evenodd" clipRule="evenodd" d="M10.4142 12L15.7071 6.70711L14.2929 5.29289L8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L14.2929 18.7071L15.7071 17.2929L10.4142 12Z" fill={color} />
}

export const Icon = ({ icon = 'chevronDown', size = 24, color = 'black', stroke = 2 }: IIcon) => {
  return (
    <svg className={s.Icon} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

      { icons[icon](color, stroke) }

    </svg>
  );
}

