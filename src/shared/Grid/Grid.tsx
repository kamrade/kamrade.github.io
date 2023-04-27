/*
// All logic should be moved here
// and provided to children in context
 */

import React, { MouseEvent } from 'react';
import s from './Grid.module.scss';

export interface GridProps {
  children: any;
}

export const Grid = (props: GridProps) => {

  const mouseMoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    // console.log(e.clientX, e.clientY);
  }

  return (
    <div className={s.Grid} onMouseMove={mouseMoveHandler}>
      {props.children}
    </div>
  );
}
