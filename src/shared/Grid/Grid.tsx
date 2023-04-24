import React from 'react';

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
    <div className={'uimp-grid'}>
      {props.children}
    </div>
  );
}
