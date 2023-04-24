import React from 'react';
import s from './GridTableBody.module.scss';

interface GridTableBodyProps {
  children: any;
}
export const GridTableBody: React.FC<GridTableBodyProps> = ({ children }) => {
  return (
    <div className={s.GridTableBody}>
      {children}
    </div>
  );
}