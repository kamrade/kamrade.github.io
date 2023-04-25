import React, { MouseEvent } from 'react';
import s from './Grid.module.scss';

export interface GridProps {
  children: any;
}

export const Grid = (props: GridProps) => {

  // Get data, make some calculations and provide context for children
  // This data is already
  // - paginated
  // - statistic calculated
  // - sorted
  // - filtered (included search string)
  // This means that Grid is only consuming (processing) data, not transforming it

  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    // console.log(e.clientX, e.clientY);
  }

  return (
    <div className={s.Grid} onMouseMove={mouseMoveHandler}>
      {props.children}
    </div>
  );
}
