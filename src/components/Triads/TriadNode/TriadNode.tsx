import React from 'react';
import s from './TriadNode.module.scss';
import classNames from "classnames/bind";
const sx = classNames.bind(s);

export type TriadNodeSize = 'sm' | 'md' | 'lg';
export type TriadNodeShape = 'triangle' | 'square' | 'circle';
export type TriadNodeColor = 'primary' | 'secondary' | 'tertiary';
export type TriadNodeFill = 'solid' | 'outline' | 'pattern';

export interface ITriadNodeProps {
  size: TriadNodeSize;
  shape: TriadNodeShape;
  color: TriadNodeColor;
  fill: TriadNodeFill;
  keyId: number;
  onClick: (key: number) => void;
  selected: boolean;
}

export const TriadNode: React.FC<ITriadNodeProps> = ({
  size = 'lg', 
  shape = 'triangle', 
  color = 'tertiary', 
  fill = 'solid', 
  keyId, 
  onClick,
  selected
}) => {

  const shapeClassName = sx({
    SvgShape: true,
    
    Primary: color === 'primary',
    Secondary: color === 'secondary',
    Tetriary: color === 'tertiary',
    
    Solid: fill === 'solid',
    Outline: fill === 'outline',
    Pattern: fill === 'pattern',
  })

  const triadNodeClassName = sx({
    TriadNode: true,
    Selected: selected
  })

  const shapeFill = 
    fill === 'solid' ? 'inherit' 
    : fill === 'outline' ? 'transparent' 
    : fill === 'pattern' ? `url(#pattern-${color})`
    : 'transparent';


  const svgWidth = {
    triangle: { lg: [48,42], md: [32,27], sm: [22,18] },
    square: { lg: [40,40], md: [30,30], sm: [20,20] },
    circle: { lg: [40,40], md: [30,30], sm: [20,20] }
  }
  
  return (
    <div className={triadNodeClassName} onClick={() => onClick && onClick(keyId)}>
      <div className={s.TriadNodeShape}>
        
        <div className={shapeClassName}>
          <svg width={svgWidth[shape][size][0]} height={svgWidth[shape][size][1]} viewBox={`0 0 ${svgWidth[shape][size][0]} ${svgWidth[shape][size][1]}`} xmlns="http://www.w3.org/2000/svg">              
            { size === 'lg' && shape === 'triangle' && <path d="M24.2487 0L48.4974 42H0L24.2487 0Z" fill={shapeFill} /> }
            { size === 'md' && shape === 'triangle' && <path d="M15.5885 0L31.1769 27H0L15.5885 0Z" fill={shapeFill} /> }
            { size === 'sm' && shape === 'triangle' && <path d="M11.0002 0L21.3925 18H0.60791L11.0002 0Z" fill={shapeFill} /> }

            { size === 'lg' && shape === 'square' && <path d="M0.248535 0H40.2485V40H0.248535V0Z" fill={shapeFill} /> }
            { size === 'md' && shape === 'square' && <path d="M0.588379 0H30.5884V30H0.588379V0Z" fill={shapeFill} /> }
            { size === 'sm' && shape === 'square' && <path d="M0 0H20V20H0V0Z" fill={shapeFill} /> }

            { size === 'lg' && shape === 'circle' && <path d="M40.2485 20C40.2485 31.0457 31.2942 40 20.2485 40C9.20284 40 0.248535 31.0457 0.248535 20C0.248535 8.9543 9.20284 0 20.2485 0C31.2942 0 40.2485 8.9543 40.2485 20Z" fill={shapeFill}/> }
            { size === 'md' && shape === 'circle' && <path d="M30.5884 15C30.5884 23.2843 23.8727 30 15.5884 30C7.30411 30 0.588379 23.2843 0.588379 15C0.588379 6.71573 7.30411 0 15.5884 0C23.8727 0 30.5884 6.71573 30.5884 15Z" fill={shapeFill}/> }
            { size === 'sm' && shape === 'circle' && <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill={shapeFill}/> }
          </svg>
        </div>

      </div>
    </div>
  )
};
