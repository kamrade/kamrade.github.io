import React, {useRef, useEffect} from 'react';
import * as d3 from 'd3';
import './Axis.scss';

export interface AxisProps {
  h: number;
  axis: any;
  axisType: 'x' | 'y';
}

export function Axis({h, axis, axisType}: AxisProps) {

  const elRef = useRef(null);
  const translate = `translate(0, ${h})`;

  useEffect(() => {
    d3.select(elRef.current).call(axis);
  }, [axis]);

  return (
    <g
      ref={elRef}
      className={`line-chart--axis axis-${axisType}`}
      transform={axisType === 'x' ? translate : ''}
    ></g>
  );

}