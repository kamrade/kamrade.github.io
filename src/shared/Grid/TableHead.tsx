import React from 'react';
import s from './TableHead.module.scss'

interface GridTableHeadProps {
  children: any;
  fullWidth: number;
}

export const TableHead: React.FC<GridTableHeadProps> = ({children, fullWidth}) => {

  return (
    <div className={s.GridTableHead}>
      <div className={s.GridTableHeadContent} style={{ width: `${fullWidth}px`}}>

        {children}



      </div>
    </div>
  );
}
