import React from 'react';
import s from './GridTH.module.scss';

interface GridTHProps {
  children: any;
}

export const GridTH: React.FC<GridTHProps> = (props) => {
  return (
    <div className={s.GridTH}>
      { props.children }
    </div>
  );
}
