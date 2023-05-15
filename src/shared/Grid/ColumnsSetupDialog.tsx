import React, { useEffect, useState } from 'react';
import {Checkbox} from "../Checkbox";
import {RxDragHandleDots2} from "react-icons/rx";
import { TableHeading } from '.';
import s from './ColumnsSetupDialog.module.scss';


interface IColumnsSetupDialogProps {
  allTh: TableHeading[];
  toggleColumn: (el: TableHeading) => any;
}

interface IState {
  draggedFrom: number | null;
  draggedTo: number | null;
  isDragging: boolean;
  originalOrder: TableHeading[];
  updatedOrder: TableHeading[];
}

const initialState: IState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
}

export const ColumnsSetupDialog: React.FC<IColumnsSetupDialogProps> = (props) => {

  const {allTh, toggleColumn} = props;
  const [list, setList] = useState(allTh);
  const [dragAndDrop, setDragAndDrop] = useState<IState>(initialState);

  const onDragStart = (event: any) => {
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list
    });
  }

  const onDragOver = () => {

  }

  const onDrop = () => {

  }

  const onDragLeave = () => {

  }

  useEffect(() => {
    console.log(allTh);
  });

  return (
    <div className={s.ColumnsSetupDialog}>
      {allTh.sort((a: TableHeading, b: TableHeading) => a.position - b.position).map((col: TableHeading, i: number) => (
          <div
            className={s.CheckboxWrapper}
            key={i}
            data-position={i}
            draggable
            onDragStart={onDragStart}
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