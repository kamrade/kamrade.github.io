import React, { useEffect, useRef, useState } from 'react';
import classNames from "classnames/bind";
import s from './TableRow.module.scss';
import { Button } from 'shared';

const sx = classNames.bind(s);

export interface GridTableRowProps {
  children: any;
  fullWidth: number;
  striped?: boolean;
  border?: boolean;
  gridScroll?: number;
  gridWidth?: number;
}
export const TableRow: React.FC<GridTableRowProps> = ({ children, fullWidth, striped, border, gridScroll, gridWidth }) => {

  const trRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(trRef?.current?.getBoundingClientRect().width || 0);
  }, []);

  useEffect(() => {
    console.log(gridScroll, gridWidth, width);
  });

  return (
    <div ref={trRef} className={sx({
      GridTableRow: true,
      GridTableRowStriped: striped,
      GridTableRowBorder: border,
    })} style={{ width: fullWidth }}>
      { children }

      <div
        className={s.indicator}
        style={{
          'transform' : `translateX(${-1 * (width || 0) + (gridScroll || 0) + (gridWidth || 0) }px)`
        }}
      >
        <Button bold variant={'contained'} theme={'primary'}>Open</Button>
      </div>


    </div>
  );
}