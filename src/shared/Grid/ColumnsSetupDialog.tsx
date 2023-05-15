import React, { useEffect, useState, DragEvent } from 'react';
import {Checkbox} from "../Checkbox";
import {RxDragHandleDots2} from "react-icons/rx";
import { TableHeading } from '.';
import s from './ColumnsSetupDialog.module.scss';
import classNames from "classnames/bind";
const sx = classNames.bind(s);

interface IColumnsSetupDialogProps {
  allTh: TableHeading[];
  toggleColumn: (el: TableHeading) => any;
}

interface IState {
  draggedFrom: number;
  draggedTo: number;
  isDragging: boolean;
  originalOrder: TableHeading[];
  updatedOrder: TableHeading[];
}

const initialState: IState = {
  draggedFrom: -1,
  draggedTo: -1,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
}

export const ColumnsSetupDialog: React.FC<IColumnsSetupDialogProps> = ({ allTh, toggleColumn }) => {

  const [list, setList] = useState<TableHeading[]>(allTh);
  const [dragAndDrop, setDragAndDrop] = useState<IState>(initialState);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: Number(event.currentTarget.dataset.position),
      isDragging: true,
      originalOrder: list
    });
    // Firefox fix
    event.dataTransfer.setData("text/html", '');
  }

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedTo = Number(e.currentTarget.dataset.position);

    if (draggedTo !== dragAndDrop.draggedTo){
      setDragAndDrop({
        ...dragAndDrop,
        draggedTo: draggedTo
      })
    }
  }

  const onDrop = () => {
    let newOrder = dragAndDrop.originalOrder.map((el: TableHeading, i: number) => {

      if (el.position === dragAndDrop.draggedFrom) {
        el.position = dragAndDrop.draggedTo;
      } else {
        // move down
        if (dragAndDrop.draggedFrom < dragAndDrop.draggedTo) {
          if (el.position <= dragAndDrop.draggedTo && el.position > dragAndDrop.draggedFrom) {
            el.position = el.position - 1;
          }
        }
        // move up
        if (dragAndDrop.draggedFrom > dragAndDrop.draggedTo) {
          if (el.position >= dragAndDrop.draggedTo && el.position < dragAndDrop.draggedFrom) {
            el.position = el.position + 1;
          }
        }
      }

      return el;
    })
    setList(newOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: -1,
      draggedTo: -1,
      isDragging: false
    });
  }

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: -1
    });
  }

  useEffect(() => {
  // Log here
    console.log(list);
  }, [list]);

  return (
    <div className={s.ColumnsSetupDialog}>
      {list.sort((a: TableHeading, b: TableHeading) => a.position - b.position).map((col: TableHeading, i: number) => (
          <div
            key={i}
            data-position={i}
            draggable
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragLeave={onDragLeave}

            className={sx({
              CheckboxWrapper: true,
              dropArea: dragAndDrop && (dragAndDrop.draggedTo === Number(i))
            })}
          >
            <Checkbox
              labelText={col.title}
              value={col.isShowed}
              onChange={() => toggleColumn(col)}
            />
            <span className={s.dragIcon}>
              <RxDragHandleDots2 />
            </span>
          </div>
      ))}
    </div>
  );

}
