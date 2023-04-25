import React from 'react';
import s from './GridTableHead.module.scss'

interface GridTableHeadProps {
  children: any;
  fullWidth: number;
}

export const GridTableHead: React.FC<GridTableHeadProps> = ({children, fullWidth}) => {

  return (
    <div className={s.GridTableHead}>
      <div className={s.GridTableHeadContent} style={{ width: `${fullWidth}px`}}>
        {children}
      </div>
    </div>
  );
}
