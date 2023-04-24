import React from 'react';
import s from './GridTableHead.module.scss'

interface GridTableHeadProps {
  children: any;
}

export const GridTableHead: React.FC<GridTableHeadProps> = (props) => {
  return (
    <div className={s.GridTableHead}>
      {props.children}
    </div>
  );
}
