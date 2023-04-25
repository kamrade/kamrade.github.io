import React from 'react';
import classNames from "classnames/bind";
import s from './GridTableRow.module.scss';

const sx = classNames.bind(s);

export interface GridTableRowProps {
  children: any;
  fullWidth: number;
  striped?: boolean;
}
export const GridTableRow: React.FC<GridTableRowProps> = ({ children, fullWidth, striped }) => {

  return (
    <div className={sx({
      GridTableRow: true,
      GridTableRowStriped: striped
    })} style={{ width: fullWidth }}>
      { children }
    </div>
  );
}