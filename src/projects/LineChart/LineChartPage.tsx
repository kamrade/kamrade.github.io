import React from 'react';
import {lineChartData} from './LineChartData';
import { LineChart } from 'shared/LineChart/LineChart';

const height = 400;
const width  = 600;
const margin = {left: 40, top: 30, right: 30, bottom: 40};

export function LineChartPage() {
  return (
    <div className="page">

      <header className="pt-5 pb-3" />

      <div className="container">
        <h1 className='mb-3 page-title'>LineChart</h1>
        <LineChart 
          data={lineChartData} 
          width={width} 
          height={height} 
          margin={margin} 
          chartId='line-chart-1' />
      </div>
    </div>
  )
}