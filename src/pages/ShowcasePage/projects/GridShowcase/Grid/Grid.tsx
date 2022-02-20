import React, {useState} from 'react';
import classNames from "classnames/bind";
import s from "./Grid.module.scss";
import * as Icon from 'react-feather';
import {IGridProps, IGridData} from './GridTypes';
const sx = classNames.bind(s);

export const Grid: React.FC<IGridProps> = ({defaultColumnsSize, columns, gridData, isFetching, hasError, sortedBy, setSortedBy, sortDirection, setSortDirection}) => {

  const [columnsSize /*, setColumnsSize */ ] = useState(defaultColumnsSize);
  const [fullWidth /* , setFullWidth */ ]     = useState(columnsSize.reduce((acc, val) => acc + val, 0)); // summarize all the widths of the columns together

  const clickOnThHandler = (columnCaption: string) => {
    if (columnCaption === sortedBy) {
      sortDirection === 'asc'
        ? setSortDirection && setSortDirection('desc')
        : setSortDirection && setSortDirection('asc');
    } else {
      setSortedBy && setSortedBy(columnCaption);
      setSortDirection && setSortDirection('asc');
    }

  }

  return (
    <div className={sx({
      GridWrapper: true,
      Error: hasError
    })} >
      <div className={s.Grid} >

        {hasError && <div className={s.GridError}>{hasError}</div>}

        {!hasError && isFetching && <div className={s.GridPreloader}>Fetching data</div>}

        {!hasError && !isFetching && <div className={s.GridContent} style={{width: `${fullWidth}px`}}>

          <div className={s.THead}>
            {columns.map((columnCaption, i) => {
              return (
                <div className={s.ColumnCaption} key={i} style={{width: columnsSize[i]}} onClick={() => clickOnThHandler(columnCaption)}>
                  {columnCaption}
                  {columnCaption === sortedBy && (sortDirection === 'asc' ? <Icon.ChevronDown size={16} /> : <Icon.ChevronUp size={16} />) }
                </div>
              )
            })}
          </div>

          {gridData?.map((row: IGridData, i: number) => {
            return (
              <div key={i} className={s.GridRow}>

                {Object.entries(row).map((entry: any, j: number) => (
                  <div className={s.GridCell} key={j} style={{width: columnsSize[j]}}>
                    {entry[1]}
                  </div>
                ))}

              </div>
            )
          })}

        </div>}
      </div>
    </div>
  )
}
