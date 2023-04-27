import React, { useEffect, useState, useRef } from 'react';
import { Grid, TableHead, TableBody, TH, TD, TableRow, ISortedBy, TableHeading, gridOptions } from '.';
import { calculateFullWidth, prepareData, prepareHeadingData } from './helpers';
import { RuleVeto, allTableHeadingsMap, ruleVetoData, getDefaultSorting } from './data';

import { RiRestartLine, RiTableFill } from "react-icons/ri";
import { Drawer, Checkbox, Button } from 'shared';

import s from './GridWrapper.module.scss';

export const GridCardsWrapper: React.FC = () => {

  const refGridWrapper                            = useRef<HTMLDivElement>(null);
  const [gridWidth, setGridWidth]                 = useState<number>(0);
  const [showDrawerColumns, setShowDrawerColumns] = useState(false);
  const [allTh, setAllTh]                         = useState(allTableHeadingsMap);
  const [cols, setCols]                           = useState( prepareHeadingData(allTh) );
  const [data, setData]                           = useState( prepareData(ruleVetoData, getDefaultSorting(cols, 'id')) );
  const [sortedBy, setSortedBy]                   = useState<ISortedBy>( getDefaultSorting(cols, 'id') );

  useEffect(() => {
    setData( prepareData(ruleVetoData, sortedBy) );
  }, [sortedBy, sortedBy.direction, sortedBy.column]);

  useEffect(() => {
    setCols( prepareHeadingData(allTh) );
  }, [allTh]);

  function setColumnsMax() {
    let newArr = cols.map((element: TableHeading) => {
      element.width = element.maxWidth + 48;
      return element;
    });
    setCols(newArr);
  }

  function checkMaxWidth(el: TableHeading, currentWidth: number) {
    let newArr = cols.filter((element: TableHeading) => {
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
    });
    setCols(newArr);
  }

  function resizeColumn(el: TableHeading, offset: number) {
    let newArr = cols.filter((element: TableHeading) => {
      if (el.id !== element.id) {
        return element;
      } else {
        element.width += offset;

        if ((element.width + offset) < gridOptions.minColumnWidth) {
          element.width = gridOptions.minColumnWidth;
        }

        if ((element.width + offset) > gridOptions.maxColumnWidth) {
          element.width = gridOptions.maxColumnWidth;
        }

        return element;
      }
    });

    setCols(newArr);
  }

  function toggleColumn(el: TableHeading) {
    let newArr = allTh.filter((element: TableHeading) => {
      if (el.id !== element.id) {
        return element;
      } else {
        element.isShowed = !element.isShowed;
        return element;
      }
    });

    setAllTh(newArr);
  }

  const setupColumns = () => {
    setShowDrawerColumns(!showDrawerColumns);
  }

  const resetColumns = () => {
    const gridWidth = refGridWrapper.current?.getBoundingClientRect().width || 0;
    setGridWidth(gridWidth);
    setColumnsMax();
  }

  // @ts-ignore
  return (
    <div className={s.GridWrapper} ref={refGridWrapper}>

      <div className={s.GridHeader}>

        <h2>Rule vetos monitor (cards)</h2>

        <div className={s.setupColumns} >
          <Button iconButton prefix={<RiRestartLine />} size={'sm'} theme={'base'} variant={'light'} onClick={resetColumns} />
          <Button iconButton prefix={<RiTableFill />} size={'sm'} theme={'primary'} variant={'light'} onClick={setupColumns} />
        </div>

      </div>

      <Grid>
        <TableHead marginBottom paddingBottom fullWidth={calculateFullWidth(cols)}>
          {cols.map((el: TableHeading, i: number) =>
            <TH card sortedBy={sortedBy} setSortedBy={setSortedBy} resizeHandler={resizeColumn} el={el} key={i}>{el.title}</TH>)
          }
        </TableHead>

        <TableBody>
          { data.map((element: RuleVeto, j: number) =>
            (
              <TableRow key={j} fullWidth={calculateFullWidth(cols)} card>
                { cols.map((el: TableHeading, i: number) => {

                  // @ts-ignore
                  if (el.id === 'status') {
                    switch (element[el.id]) {
                      case 'active':
                        return <TD checkMaxWidth={checkMaxWidth} theme={'success'} el={el} key={i}>{ element[el.id] }</TD>
                      case 'deactivated':
                        return <TD  checkMaxWidth={checkMaxWidth} theme={'muted'} el={el} key={i}>{ element[el.id] }</TD>
                      case 'expired':
                        return <TD checkMaxWidth={checkMaxWidth} theme={'danger'} el={el} key={i}>{ element[el.id] }</TD>
                      default:
                        return <TD checkMaxWidth={checkMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                    }
                  }

                  if (el.id === 'id') {
                    return <TD link={'/'} checkMaxWidth={checkMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                  }

                  if (el.id === 'ruleId') {
                    return <TD link={'/'} checkMaxWidth={checkMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                  }

                  // @ts-ignore
                  return <TD checkMaxWidth={checkMaxWidth} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                })}
              </TableRow>
            )
          )}
        </TableBody>
      </Grid>

      <Drawer drawerTitle={'Setup columns'} showDrawer={showDrawerColumns} setShowDrawer={showDrawerColumns}>
        <div className="my-5">

          {allTh.map((col, i) => (
            <div key={i} className={'mb-2'}>
              <Checkbox
                labelText={col.title}
                value={col.isShowed}
                onChange={() => toggleColumn(col)}
              />
            </div>
          ))}

        </div>
      </Drawer>

    </div>
  );
}
