import React, {useState} from 'react';
import * as d3 from 'd3';
import {AxisAndGrid} from './AxisAndGrid';
import {Dots} from './Dots';
import s from './LineChart.module.scss';

export interface LineChartProps {
  data: any[];
  width: number;
  height: number;
  chartId: string;
  margin: any;
}

export function LineChart({data, width, height, margin, chartId}: LineChartProps) {

  const [size, setSize] = useState({
    width: width - margin.left - margin.right,
    height: height - margin.top - margin.bottom,
    wrapperWidth: width
  });

  let parseDate = d3.timeParse('%m-%d-%Y');
  
  data.forEach((d: any) => {
    d.date = parseDate(d.day);
  });

  let x = d3.scaleTime()
    .domain( d3.extent(data, (d) => d.date) as any)
    .rangeRound([0, size.width]);

  let y = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.count + 100)] as any)
    .range([size.height, 0]);

  let line = d3.line()
    .x((d: any) => x(d.date))
    .y((d: any) => y(d.count))
    // .curve(d3.curveCatmullRom.alpha(0.9));
    .curve(d3.curveMonotoneX);

  return (  
    <div className={s.lineChartWrapper} 
      style={{ 
        width: `${size.wrapperWidth}px`, 
        padding: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`}}>
      <svg className={s.lineChartSvg} id={chartId} width={size.width} height={size.height}>
        <g className='chart-group'>

          <AxisAndGrid 
            data={data}
            x={x} y={y} 
            w={size.width} h={size.height} />

          <g className="line-group">
            <path
              className={s.line}
              d={ line(data as any) as any }
              strokeLinecap="round"
            />
          </g>

          <Dots
            data={data}
            x={x}
            y={y}
          />

        </g>
      </svg>
    </div>
  )
}
