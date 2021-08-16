import React, {useRef, useEffect} from 'react';
import * as d3 from 'd3';
import './Grid.scss';

export interface GridProps {
  h: number;
  w: number;
  grid: any;
}

export function Grid({h, w, grid}: GridProps) {
  
  const elRef = useRef(null);
  const translate = `translate(${w}, 0)`;

  useEffect(() => {
    d3.select(elRef.current).call(grid);
  }, []);

  return (
    <g
      ref={elRef}
      className='line-chart--grid'
      transform={translate}
    ></g>
  );

}