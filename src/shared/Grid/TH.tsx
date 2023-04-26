import React from 'react';
import s from './TH.module.scss';
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { TableHeading, ISortedBy } from './grid.types';

interface GridTHProps {
  el: TableHeading;
  resizeHandler: any;
  sortedBy: ISortedBy;
  setSortedBy: any;
  children: any;
}

export const TH: React.FC<GridTHProps> = ({el, resizeHandler, children, sortedBy, setSortedBy}) => {

  let initialX = 0;

  const mouseMoveHandler = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    resizeHandler(el, e.pageX - initialX);
    initialX = e.pageX;
  }

  const mouseUpHandler = (e: MouseEvent): any => {
    e.preventDefault();
    e.stopPropagation();
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

  function mouseDownHandler(el: TableHeading, e: React.MouseEvent<HTMLDivElement>) {

    e.preventDefault();
    e.stopPropagation();

    initialX = e.pageX;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }

  const sort = () => {
    if (sortedBy.column === el.id) {
      setSortedBy({
        column: el.id,
        direction: sortedBy.direction === 'acc' ? 'dec' : 'acc',
      });
    } else {
      setSortedBy({
        column: el.id,
        direction: 'acc',
      });
    }

  }


  return (
    <div className={s.GridTH} style={{ width: `${el.width}px` }} onMouseDown={sort}>
      <div className={s.GridTHContent}>
        { children }
        { sortedBy.column === el.id &&
          (sortedBy.direction === 'acc' ? <RiArrowDownSLine /> :  <RiArrowUpSLine />)
        }
      </div>

      <div
        className={s.GridTHControl}
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => mouseDownHandler(el, e)}>
      </div>
    </div>
  );
}
