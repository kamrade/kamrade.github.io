/*
// All logic should be moved here
// and provided to children in context
 */

import React, { MouseEvent, UIEvent, Dispatch, SetStateAction } from 'react';
import s from './Grid.module.scss';
import classNames from 'classnames/bind';
const sx = classNames.bind(s);

type GridBorder = 'card' | 'table';

export interface GridProps {
  gridBorder?: GridBorder;
  setGridScroll?: Dispatch<SetStateAction<number>>;
  children: any;
}

export const Grid = (props: GridProps) => {

const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
  const el = e.target as HTMLDivElement;
  const { setGridScroll } = props;

  if (setGridScroll) {
    setGridScroll(el?.scrollLeft || 0);
  }
}

  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    // console.log(e.clientX, e.clientY);
  }

  return (
    <div
      className={sx({
        Grid: true,
        GridPanel: props.gridBorder === 'card',
        GridTable: props.gridBorder === 'table',
      })}
       onMouseMove={mouseMoveHandler}
       onScroll={scrollHandler}
    >
      {props.children}
    </div>
  );
}
