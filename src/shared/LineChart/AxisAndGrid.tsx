import React from 'react';
import * as d3 from 'd3';
import {Axis} from './Axis';
import {Grid} from './Grid';

export interface AxisAndGridProps {
  data: any[];
  x: any;
  y: any;
  h: number;
  w: number;
}

export function AxisAndGrid({data, x, y, h, w}: AxisAndGridProps) {
  
  const yAxis = d3.axisLeft(y as any)
    .ticks(3);

  const xAxis = d3.axisBottom(x as any)
    .ticks(d3.timeDay.every(4))
    .tickFormat( d3.timeFormat('%b %e') as any)

  const yGrid = d3.axisLeft(y as any)
    .ticks(5)
    .tickSize(w)
    .tickFormat('' as any);

  return (
    <g className='axis-and-grid'>
      <Axis axis={xAxis} h={h} axisType='x'></Axis>
      <Axis axis={yAxis} h={h} axisType='y'></Axis>
      <Grid grid={yGrid} h={h} w={w}></Grid>
    </g>
  );
}
