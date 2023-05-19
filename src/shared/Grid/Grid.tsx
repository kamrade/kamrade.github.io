/*
// All logic should be moved here
// and provided to children in context
 */

import React, { UIEvent, useReducer, Reducer, createContext, useEffect, useRef } from 'react';
import s from './Grid.module.scss';
import classNames from 'classnames/bind';
import { IGridState, IGridContext, IGridAction, GridProps } from './state/state.types';
import { initialState, reducer } from './state/state';
import { useWindowSize } from "../../hooks/useWindowSize";

const sx = classNames.bind(s);
export const GridContext = createContext<IGridContext | null>(null);

export const Grid = (props: GridProps) => {

  const [gridState, dispatch] = useReducer<Reducer<IGridState, IGridAction>>(reducer, initialState);
  const refGrid = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize(400);

  useEffect(() => {
    dispatch({
      type: 'SET_GRID_WIDTH',
      value: refGrid?.current?.getBoundingClientRect().width || 0,
    })
  }, [windowSize.width, windowSize.heigth]);

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
        ref={refGrid}
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
