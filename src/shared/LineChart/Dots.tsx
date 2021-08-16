import React, {useRef, useEffect} from 'react';
import * as d3 from 'd3';

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
      
      // r={7}
      // fill="#7dc7f4"
      // stroke="#3f5175"
      // strokeWidth="5px"
      
    />
  ))

  return (
    <g className="dots-group">
			{circles}
		</g>
  );

}