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

const primaryColor    = '#fed914';
const secondaryColor  = '#0bdb45';
const tertiaryColor   = '#2b99ff';

export const TriadNode: React.FC<ITriadNodeProps> = ({size, shape, color, fill}) => {

  const shapeClassName = sx({
    SvgShape: true,
    
    Lg: size === 'lg',
    Md: size === 'md',
    Sm: size === 'sm',
    
    Primary: color === 'primary',
    Secondary: color === 'secondary',
    Tetriary: color === 'tertiary',
    
    Solid: fill === 'solid',
    Outline: fill === 'outline',
    Pattern: fill === 'pattern',
  })

  const shapeFill = 
    fill === 'solid' ? 'inherit' 
    : fill === 'outline' ? 'transparent' 
    : fill === 'pattern' ? `url(#pattern-${color})`
    : 'transparent';

  return (
    <div className={s.TriadNode}>


      <div className={s.TriadNodeShape}>
        
        
        { shape === 'triangle' &&
            <div className={shapeClassName}>
              
              {size === 'lg' &&
                <svg width="49" height="42" viewBox="0 0 49 42" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="pattern-primary" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                      <path d="M0,5H10" stroke-width="6" stroke={primaryColor} />
                    </pattern>
                    <pattern id="pattern-secondary" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                      <path d="M0,5H10" stroke-width="6" stroke={secondaryColor} />
                    </pattern>
                    <pattern id="pattern-tertiary" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                      <path d="M0,5H10" stroke-width="6" stroke={tertiaryColor} />
                    </pattern>
                  </defs>

                  <path d="M24.2487 0L48.4974 42H0L24.2487 0Z" fill={shapeFill}/>

                </svg>                
              }

              
              { size === 'md' &&
                <svg width="32" height="27" viewBox="0 0 32 27" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5885 0L31.1769 27H0L15.5885 0Z" fill={shapeFill}/>
                </svg>
              }
              
              { size === 'sm' &&
              
                <svg width="22" height="18" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0002 0L21.3925 18H0.60791L11.0002 0Z" fill={shapeFill}/>
                </svg>                
              }

            </div>
        }



        { shape === 'square' &&
            <div className={shapeClassName}>

              { size === 'lg' &&
                <svg width="41" height="40" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.248535 0H40.2485V40H0.248535V0Z" fill="inherit"/>
                </svg>              
              }

              { size === 'md' &&
                <svg width="31" height="30" viewBox="0 0 31 30" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.588379" width="30" height="30" fill="inherit"/>
                </svg>
              }

              { size === 'sm' &&
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" fill="inherit"/>
                </svg>                
              }

            </div>
        }



        { shape === 'circle' &&
            <div className={shapeClassName}>

              { size === 'lg' &&
                <svg width="41" height="40" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.2485 20C40.2485 31.0457 31.2942 40 20.2485 40C9.20284 40 0.248535 31.0457 0.248535 20C0.248535 8.9543 9.20284 0 20.2485 0C31.2942 0 40.2485 8.9543 40.2485 20Z" fill="inherit"/>
                </svg>
              }

              { size === 'md' && 
                  <svg width="31" height="30" viewBox="0 0 31 30" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5884" cy="15" r="15" fill="inherit"/>
                  </svg>
              }

              { size === 'sm' &&
                  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="inherit"/>
                  </svg>
              }
              
            </div>
        }

      </div>


    </div>
  )
};
