import React from 'react';
import s from './TableBody.module.scss';

interface GridTableBodyProps {
  children: any;
}
export const TableBody: React.FC<GridTableBodyProps> = ({ children }) => {
  return (
    <div className={s.GridTableBody}>
      {children}
    </div>
  );
}