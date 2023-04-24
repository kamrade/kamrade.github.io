import React from 'react';
import s from './GridTableRow.module.scss';

export interface GridTableRowProps {
  children: any;
  fullWidth: number;
}
export const GridTableRow: React.FC<GridTableRowProps> = ({ children, fullWidth }) => {
  return (
    <div className={s.GridTableRow} style={{ width: fullWidth }}>
      { children }
    </div>
  );
}