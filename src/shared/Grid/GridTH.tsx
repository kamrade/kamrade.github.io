import React, { useState } from 'react';
import s from './GridTH.module.scss';
import { TableHeading } from './grid.types';
import { RiArrowDownSLine } from "react-icons/ri";

interface GridTHProps {
  el: TableHeading;
  resizeHandler: any;
  children: any;
}

export const GridTH: React.FC<GridTHProps> = ({el, resizeHandler, children}) => {

  let initialX = 0;
  let initialY = 0;

  const mouseMoveHandler = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // console.log(':: init', initialX, initialY);
    // console.log(':: moving', e.pageX - initialX, e.pageY - initialY);
    resizeHandler(el, e.pageX - initialX);
    initialX = e.pageX;
    initialY = e.pageY;
  }

  const mouseUpHandler = (e: MouseEvent): any => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  function mouseDownHandler(el: TableHeading, e: React.MouseEvent<HTMLDivElement>) {

    initialX = e.pageX;
    initialY = e.pageY;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }


  return (
    <div className={s.GridTH} style={{ width: `${el.width}px` }}>
      <div className={s.GridTHContent}>
        { children }
        {/*<RiArrowDownSLine />*/}
      </div>

      <div
        className={s.GridTHControl}
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => mouseDownHandler(el, e)}>
      </div>
    </div>
  );
}
