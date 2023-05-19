/*
// All logic should be moved here
// and provided to children in context
 */

import React, {
  MouseEvent,
  UIEvent,
  Dispatch,
  SetStateAction,
  useReducer,
  Reducer,
  createContext,
  useEffect
} from 'react';
import s from './Grid.module.scss';
import classNames from 'classnames/bind';

const sx = classNames.bind(s);

type GridBorder = 'card' | 'table';

export interface GridProps {
  gridBorder?: GridBorder;
  setGridScroll?: Dispatch<SetStateAction<number>>;
  children: any;
}

interface IGridState {
  currentDrawer: string;
}

interface IGridAction {
  type: string;
  value: any;
}

const initialState: IGridState = {
  currentDrawer: '',
}

type IReducer = (state: IGridState, action: IGridAction) => IGridState;

interface IGridContext {
  gridState: IGridState;
  dispatch: Dispatch<IGridAction>;
}

const reducer: IReducer = (state, action) => {
  switch(action.type) {
    case 'SET_CURRENT_DRAWER':
      return {
        ...state,
        currentDrawer: action.value,
      }
    default:
      return state;
  }
}

export const GridContext = createContext<IGridContext | null>(null);

export const Grid = (props: GridProps) => {

  const [gridState, dispatch] = useReducer<Reducer<IGridState, IGridAction>>(reducer, initialState);

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    const { setGridScroll } = props;

    if (setGridScroll) {
      setGridScroll(el?.scrollLeft || 0);
    }
  }

  return (
    <GridContext.Provider value={{ gridState, dispatch }}>
      <div
        className={sx({
          Grid: true,
          GridPanel: props.gridBorder === 'card',
          GridTable: props.gridBorder === 'table',
        })}
         onScroll={scrollHandler}
      >
        {props.children}
      </div>
    </GridContext.Provider>
  );
}
