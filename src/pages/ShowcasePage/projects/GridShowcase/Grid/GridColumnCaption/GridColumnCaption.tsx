import React, {useState, useEffect} from 'react';
import s from "./GridColumnCaption.module.scss";
import * as Icon from "react-feather";
import {IGridColumnCaption} from './GridColumnCaptionTypes';

export const GridColumnCaption: React.FC<IGridColumnCaption> =
  ({columnTitle, columnCaption, initialColumnSize, clickHandler, sortedBy, sortDirection, setColumn}) => {

  const [initialX, setInitialX] = useState<number>(0);
  const [initialSize, setInitialSize] = useState<number>(initialColumnSize);
  const [currentX, setCurrentX] = useState<number>(0);
  const [columnSize, setColumnSize] = useState(initialColumnSize);

  const [isResizing, setIsResizing] = useState<boolean>(false);

  useEffect(() => setColumnSize(initialColumnSize), [initialColumnSize])

  const separatorMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setInitialX(e.clientX);
    setInitialSize(initialColumnSize);
    setIsResizing(true);
    document.addEventListener('mousemove', separatorMouseMove);
    document.addEventListener('mouseup', separatorMouseUp);
  }

  const separatorMouseMove = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentX(e.clientX);
  }

  useEffect(() => {
    setColumn(initialSize + (currentX - initialX));
  }, [currentX]);

  const separatorMouseUp = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    document.removeEventListener('mousemove', separatorMouseMove);
    document.removeEventListener('mouseup', separatorMouseUp);
  }

  const sortHandler = () => {

    if (!isResizing) {
      clickHandler(columnCaption);
    }
    setIsResizing(false);
  }

  return (

    <div className={s.ColumnCaption} style={{width: columnSize}} onClick={sortHandler}>
      {columnTitle}
      {columnCaption === sortedBy && (sortDirection === 'asc' ? <Icon.ChevronDown size={16} /> : <Icon.ChevronUp size={16} />) }
      <div className={s.ColumnSeparator} onMouseDown={separatorMouseDown} />
    </div>

  );
}
