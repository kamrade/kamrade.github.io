import React from 'react';
import s from './TriadNode.module.scss';
import classNames from "classnames/bind";
const sx = classNames.bind(s);

export type TriadNodeSize = 'sm' | 'md' | 'lg';
export type TriadNodeShape = 'triangle' | 'square' | 'circle';
export type TriadNodeColor = 'primary' | 'secondary' | 'tertiary';
export type TriadNodeFill = 'solid' | 'outline' | 'pattern';

export interface ITriadNodeProps {
  size?: TriadNodeSize;
  shape?: TriadNodeShape;
  color?: TriadNodeColor;
  fill?: TriadNodeFill;
}

export const TriadNode: React.FC<ITriadNodeProps> = ({size, shape, color, fill}) => {

  const shapeClassName = sx({
    SvgShape: true,
    Triangle: shape === 'triangle',
    Lg: size === 'lg',
    Md: size === 'md',
    Sm: size === 'sm',
    Primary: color === 'primary',
    Secondary: color === 'secondary',
    Tetriary: color === 'tertiary',
  })

  return (
    <div className={s.TriadNode}>
      <div className={s.TriadNodeShape}>
        { shape === 'triangle' &&
            <div className={shapeClassName}>
              <svg width="50" height="42" viewBox="0 0 50 42" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.0002 0L49.2489 42H0.751465L25.0002 0Z" fill="inherit"/>
              </svg>
            </div>
        }

        { shape === 'square' &&
            <div className={shapeClassName}>
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H40V40H0V0Z" fill="inherit"/>
              </svg>
            </div>
        }

        { shape === 'circle' &&
            <div className={shapeClassName}>
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z" fill="inherit"/>
              </svg>
            </div>
        }

      </div>
    </div>
  )
};
