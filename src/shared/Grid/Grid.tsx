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
import {TableHead} from "./TableHead";
import {calculateFullWidth} from "./helpers";
import {TableHeading} from "./grid.types";
import {TH} from "./TH";

const sx = classNames.bind(s);
export const GridContext = createContext<IGridContext | null>(null);

export const Grid = (props: GridProps) => {

  const [gridState, dispatch] = useReducer<Reducer<IGridState, IGridAction>>(reducer, initialState);
  const refGrid = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize(400);

  // Set context width
  useEffect(() => {
    dispatch({
      type: 'SET_GRID_WIDTH',
      value: refGrid?.current?.getBoundingClientRect().width || 0,
    })
  }, [windowSize.width, windowSize.heigth]);

  // Handle horizontal scrolling
  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    dispatch({
      type: 'SET_GRID_SCROLL',
      value: el?.scrollLeft || 0,
    });
  }

  return (
    <GridContext.Provider value={{ gridState, dispatch }}>
      <div ref={refGrid} onScroll={scrollHandler}
           className={sx({
             Grid: true,
             GridPanel: props.gridBorder === 'card',
             GridTable: props.gridBorder === 'table',
           })}
      >

        <TableHead marginBottom paddingBottom fullWidth={calculateFullWidth(props.columns)}>
          {props.columns.map((el: TableHeading, i: number) =>
            <TH el={el} setColumnMaxWidth={props.setColumnMaxWidth} resizeHandler={props.resizeColumn}
                card key={i} sortedBy={props.sortedBy} setSortedBy={props.setSortedBy}
            >{el.title}</TH>)
          }
        </TableHead>

        {props.children}
      </div>
    </GridContext.Provider>
  );
}
