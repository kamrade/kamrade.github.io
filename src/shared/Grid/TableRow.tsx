import React from 'react';
import classNames from "classnames/bind";
import s from './TableRow.module.scss';

const sx = classNames.bind(s);

export interface GridTableRowProps {
  children: any;
  fullWidth: number;
  striped?: boolean;
  border?: boolean;
  gridScroll?: number;
  gridWidth?: number;
  onClick?: () => any;
}
export const TableRow: React.FC<GridTableRowProps> = ({ children, striped, border, gridScroll = 0, gridWidth = 0, fullWidth, onClick }) => {

  const getScroll = () =>
    (fullWidth - gridWidth) < gridScroll ? fullWidth - gridWidth : gridScroll;

  return (
    <div className={sx({
      GridTableRow: true,
      GridTableRowStriped: striped,
      GridTableRowBorder: border,
    })} style={{ width: fullWidth }}>
      { children }

      <div
        className={s.openButtonWrapper}
        style={{ 'transform' : `translateX(${ getScroll() + (gridWidth || 0) - fullWidth}px)` }}
      >
        <div className={s.openButton} onClick={onClick}>Open</div>
      </div>
    </div>
  );
}
