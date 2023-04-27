import React from 'react';
import s from './TableHead.module.scss'

interface GridTableHeadProps {
  children: any;
  fullWidth: number;
  marginBottom?: boolean;
  paddingBottom?: boolean;
}

export const TableHead: React.FC<GridTableHeadProps> = ({children, fullWidth, marginBottom, paddingBottom}) => {

  return (
    <div className={s.GridTableHead}>
      <div className={s.GridTableHeadContent} style={{
        paddingBottom: paddingBottom ? '.25rem' : '0',
        marginBottom: marginBottom ? '.25rem' : '0',
        width: `${fullWidth}px`
      }}>
        {children}
      </div>
    </div>
  );
}
