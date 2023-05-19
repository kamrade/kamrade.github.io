/*
// All logic should be moved here
// and provided to children in context
 */

import React, { UIEvent, useReducer, Reducer, createContext } from 'react';
import s from './Grid.module.scss';
import classNames from 'classnames/bind';
import { IGridState, IGridContext, IGridAction, GridProps } from './state/state.types';
import { initialState, reducer } from './state/state';

const sx = classNames.bind(s);
export const GridContext = createContext<IGridContext | null>(null);

export const Grid = (props: GridProps) => {

  const [gridState, dispatch] = useReducer<Reducer<IGridState, IGridAction>>(reducer, initialState);

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    dispatch({
      type: 'SET_GRID_SCROLL',
      value: el?.scrollLeft || 0,
    });
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
