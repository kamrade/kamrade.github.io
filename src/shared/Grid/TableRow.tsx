import React from 'react';
import classNames from "classnames/bind";
import s from './TableRow.module.scss';

const sx = classNames.bind(s);

export interface GridTableRowProps {
  children: any;
  fullWidth: number;
  striped?: boolean;
  border?: boolean;
}
export const TableRow: React.FC<GridTableRowProps> = ({ children, fullWidth, striped, border }) => {

  return (
    <div className={sx({
      GridTableRow: true,
      GridTableRowStriped: striped,
      GridTableRowBorder: border,
    })} style={{ width: fullWidth }}>
      { children }
    </div>
  );
}