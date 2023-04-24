import React from 'react';
import s from './Grid.module.scss';

export interface GridProps {
  data: any[];
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

  const data = props.data;

  return (
    <div className={s.Grid}>
      {props.children}
    </div>
  );
}
