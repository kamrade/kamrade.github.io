import React from 'react'
import s from './GridTD.module.scss';
import { TableHeading } from './grid.types';

export interface GridTDProps {
  el: TableHeading;
  children: any;
}

export const GridTD: React.FC<GridTDProps> = ({ children, el }) => {

  return (
    <div className={s.GridTD} style={{ width: `${el.width}px` }}>
      {children}
    </div>
  );

}
