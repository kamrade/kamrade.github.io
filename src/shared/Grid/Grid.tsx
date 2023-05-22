import React, { UIEvent, useReducer, Reducer, createContext, useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import s from './Grid.module.scss';
import classNames from 'classnames/bind';
import { IGridState, IGridContext, IGridAction, GridProps } from './state/state.types';
import { initialState, reducer } from './state/state';
import { useWindowSize } from "../../hooks/useWindowSize";
import {TableHead} from "./TableHead";
import {calculateFullWidth, prepareHeadingData, resizeColumnHelper, toggleColumnHelper} from "./helpers";
import {TableHeading} from "./grid.types";
import {TH} from "./TH";
import {gridOptions} from "./Options";
import {Drawer} from "../Drawer";
import {ColumnsSetupDialog} from "./ColumnsSetupDialog";
import {RuleVeto} from "./data";
import {TableRow} from "./TableRow";
import {TD} from "./TD";
import {TableBody} from "./TableBody";

import { cloneDeep } from 'lodash';

const sx = classNames.bind(s);
export const GridContext = createContext<IGridContext | null>(null);

export const Grid = forwardRef((props: GridProps, ref: any) => {

  const {allColumns, data, updateColumns} = props;

  const [gridState, dispatch] = useReducer<Reducer<IGridState, IGridAction>>(reducer, initialState);
  const refGrid = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize(400);

  const [showDrawerColumns, setShowDrawerColumns] = useState(false);
  const [showDrawerDetails, setShowDrawerDetails] = useState(false);
  const [currentElement, setCurrentElement] = useState<RuleVeto | null>(null); // Current selected ruleVeto - need to change to Generic

  useEffect(() => {
    dispatch({
      type: 'SET_ALL_COLUMNS',
      value: cloneDeep(allColumns)
    });
  }, [allColumns]);

  useEffect(() => {
    dispatch({
      type: 'SET_COLUMNS',
      value: prepareHeadingData(cloneDeep(gridState.allColumns))
    });
  }, [gridState.allColumns])

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

  // Determine max possible width for columns (setColumnMaxWidth)
  const calculateColumnMaxWidth = (el: TableHeading, currentWidth: number) => {

    updateColumns(
      allColumns.filter((element: TableHeading) => {
        if (el.id !== element.id) {
          return element;
        } else {
          if (element.maxWidth < currentWidth) {
            element.maxWidth = currentWidth;
          }

          if (element.maxWidth < gridOptions.minColumnWidth) {
            element.maxWidth = gridOptions.minColumnWidth;
          }

          return element;
        }
      })
    );

  }

  // Resize column
  const resizeColumn = (el: TableHeading, offset: number) => {
    updateColumns(
      resizeColumnHelper(allColumns, el, offset)
    );
  }

  // make column content size, but not more than maxWidth
  function setColumnsMax() {
    updateColumns(
      allColumns.map((element: TableHeading) => {
        element.width = element.maxWidth + gridOptions.defaultContentOffset;
        return element;
      })
    );
  }

  const fitToWidth = () => {

    let fullWidth = refGrid.current?.getBoundingClientRect().width  || 0;
    let newArr = allColumns.map((el) => el.maxWidth);
    let sum = newArr.reduce((acc, currValue) => acc + currValue, 0);
    let ratioArr = allColumns.map((el) => el.maxWidth / sum);
    let resultWidth = ratioArr.map((el) => el * fullWidth);

    let newSet = allColumns.map((el, i) => {
      el.width = resultWidth[i];
      return el;
    });

    updateColumns(newSet);

  }

  // Show setup columns dialog
  const setupColumns = () =>
    setShowDrawerColumns(!showDrawerColumns);

  // Update columns
  const toggleColumn = (el: TableHeading) =>
    updateColumns( toggleColumnHelper(allColumns, el) );

  // Update columns
  const setAllTh = (value: TableHeading[]) =>
    updateColumns(value);

  useImperativeHandle(ref, () => ({ setupColumns, fitToWidth, setColumnsMax }));

  return (
    <GridContext.Provider value={{ gridState, dispatch }}>
      <div ref={refGrid} onScroll={scrollHandler}
           className={sx({
             Grid: true,
             GridPanel: props.gridBorder === 'card',
             GridTable: props.gridBorder === 'table',
           })}
      >

        <TableHead marginBottom paddingBottom fullWidth={calculateFullWidth(gridState.columns)}>
          {gridState.columns.map((el: TableHeading, i: number) =>
            <TH el={el} setColumnMaxWidth={calculateColumnMaxWidth} resizeHandler={resizeColumn}
                card key={i} sortedBy={props.sortedBy} setSortedBy={props.setSortedBy}
            >{el.title}</TH>)
          }
        </TableHead>

        <TableBody>
          { data.map((element: RuleVeto, j: number) =>
            (
              <TableRow
                striped
                key={j}
                fullWidth={calculateFullWidth(gridState.columns)}
                onClick={() => {
                  setCurrentElement(element);
                  setShowDrawerDetails(true);
                }}
              >
                { gridState.columns.map((el: TableHeading, i: number) => {

                  // @ts-ignore
                  if (el.id === 'status') {
                    switch (element[el.id]) {
                      case 'active':
                        return <TD setColumnMaxWidth={calculateColumnMaxWidth} theme={'success'} el={el} key={i}>{ element[el.id] }</TD>
                      case 'deactivated':
                        return <TD  setColumnMaxWidth={calculateColumnMaxWidth} theme={'muted'} el={el} key={i}>{ element[el.id] }</TD>
                      case 'expired':
                        return <TD setColumnMaxWidth={calculateColumnMaxWidth} theme={'danger'} el={el} key={i}>{ element[el.id] }</TD>
                      default:
                        return <TD setColumnMaxWidth={calculateColumnMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                    }
                  }

                  if (el.id === 'id') {
                    return <TD link={'/'} setColumnMaxWidth={calculateColumnMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                  }

                  if (el.id === 'ruleId') {
                    return <TD link={'/'} setColumnMaxWidth={calculateColumnMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                  }

                  // @ts-ignore
                  return <TD setColumnMaxWidth={calculateColumnMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                })}
              </TableRow>
            )
          )}
        </TableBody>

        <Drawer drawerTitle={'Setup columns'} showDrawer={showDrawerColumns} setShowDrawer={setShowDrawerColumns} initialWidth={400}>
          <ColumnsSetupDialog allTh={allColumns} toggleColumn={toggleColumn} setAllTh={setAllTh} />
        </Drawer>

        <Drawer drawerTitle={'Details'} showDrawer={showDrawerDetails} setShowDrawer={setShowDrawerDetails} initialWidth={400}>
          <div>Details</div>
          {currentElement && Object.keys(currentElement).map((el, i) =>
            <div key={i}>{(currentElement as any)[el]}</div>
          )}
        </Drawer>

      </div>
    </GridContext.Provider>
  );
});
