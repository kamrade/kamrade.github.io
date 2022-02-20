import React, {useState} from 'react';
import classNames from "classnames/bind";
import s from "./Grid.module.scss";
import {Icon} from "shared";

const sx = classNames.bind(s);

export interface IGridData {
  [key: string]: any;
}

export interface IGridProps {
  gridData: IGridData;
  columns: string[];
  defaultColumnsSize: number[];
  isFetching?: boolean;
  hasError?: string;
  sortedBy?: string; // columnID
}

export const Grid: React.FC<IGridProps> = ({defaultColumnsSize, columns, gridData, isFetching, hasError, sortedBy}) => {

  const [columnsSize /*, setColumnsSize */ ] = useState(defaultColumnsSize);
  const [fullWidth /* , setFullWidth */ ]     = useState(columnsSize.reduce((acc, val) => acc + val, 0)); // summarize all the widths of the columns together

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
                <div className={s.ColumnCaption} key={i} style={{width: columnsSize[i]}}>
                  {columnCaption}
                  {columnCaption === sortedBy && <Icon size={12} icon='chevronDown'/>}
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
