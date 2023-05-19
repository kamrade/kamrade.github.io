import {Dispatch, SetStateAction} from "react";
import {ISortedBy, TableHeading} from "../grid.types";

export interface IGridState {
  currentDrawer: string;
  gridScroll: number;
  gridWidth: number;
}

export interface IGridAction {
  type: string;
  value: any;
}

export type IReducer = (state: IGridState, action: IGridAction) => IGridState;

export interface IGridContext {
  gridState: IGridState;
  dispatch: Dispatch<IGridAction>;
}

export type GridBorder = 'card' | 'table';

export interface GridProps {
  gridBorder?: GridBorder;
  children: any;
  columns: TableHeading[];
  setColumnMaxWidth: (el: TableHeading, currentWidth: number) => void;
  sortedBy: ISortedBy;
  setSortedBy: Dispatch<SetStateAction<ISortedBy>>;
  resizeColumn: (el: TableHeading, offset: number) => any;
}
