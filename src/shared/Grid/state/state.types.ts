import {Dispatch, SetStateAction} from "react";

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
}
