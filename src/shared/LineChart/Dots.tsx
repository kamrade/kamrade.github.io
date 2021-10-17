import React from 'react';

import './Dots.scss';

export interface DotsProps {
  data: any;
  x: any;
  y: any;
}

export function Dots({data, x, y}: DotsProps) {

  const circles = data.map((d: any, i: number) => (
    <circle
      className='dot'
      
      cx={x(d.date)}
      cy={y(d.count)}
      key={i}
      
    />
  ))

  return (
    <g className="dots-group">
			{circles}
		</g>
  );

}