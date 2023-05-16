import React, { useEffect, useState } from 'react';
import { Grid, TableHead, TableBody, TH, TD, TableRow, ISortedBy, TableHeading } from '.';
import { calculateFullWidth, prepareData, prepareHeadingData, resizeColumnHelper, toggleColumnHelper } from './helpers';
import { RuleVeto, allTableHeadingsMap, ruleVetoData, getDefaultSorting } from './data';
import { RiRestartLine, RiTableFill } from "react-icons/ri";
import { Drawer, Checkbox, Button } from 'shared';
import s from './GridWrapper.module.scss';

export const GridWrapper: React.FC = () => {

  const [showDrawerColumns, setShowDrawerColumns] = useState(false);
  const [allTh, setAllTh]                         = useState(allTableHeadingsMap);
  const [cols, setCols]                           = useState( prepareHeadingData(allTh) );
  const [data, setData]                           = useState( prepareData(ruleVetoData, getDefaultSorting(cols, 'id')) );
  const [sortedBy, setSortedBy]                   = useState<ISortedBy>( getDefaultSorting(cols, 'id') );

  // Prepare data
  useEffect(() =>
      setData( prepareData(ruleVetoData, sortedBy) ),
    [sortedBy, sortedBy.direction, sortedBy.column]
  );

  // Prepare columns
  useEffect(() =>
      setCols( prepareHeadingData(allTh) ),
    [allTh]
  );

  // Make cells content size

  // Determine max possible width for columns

  // Resize column
  const resizeColumn = (el: TableHeading, offset: number) =>
    setCols(resizeColumnHelper(cols, el, offset));

  // Update column set by show/hide particular column
  const toggleColumn = (el: TableHeading) =>
    setAllTh( toggleColumnHelper(allTh, el) );

  // Show setup columns dialog
  const setupColumns = () =>
    setShowDrawerColumns(!showDrawerColumns);

  // make column content size, but not more than maxWidth

  // avoid scroll in table

  // reset columns
  const resetColumns = () => {
    alert('reset columns');
  }

  // @ts-ignore
  return (
    <div className={s.GridWrapper} >

      <div className={s.GridHeader}>

        <h2>Rule vetos monitor</h2>

        <div className={s.setupColumns} >
          <Button iconButton prefix={<RiRestartLine />} size={'sm'} theme={'base'} variant={'light'} onClick={resetColumns} />{' '}
          <Button iconButton prefix={<RiTableFill />} size={'sm'} theme={'primary'} variant={'light'} onClick={setupColumns} />
        </div>

      </div>

      <Grid gridBorder={'table'}>
        <TableHead fullWidth={calculateFullWidth(cols)}>
          {cols.map((el: TableHeading, i: number) =>
            <TH sortedBy={sortedBy} setSortedBy={setSortedBy} resizeHandler={resizeColumn} el={el} key={i}>{el.title}</TH>)
          }
        </TableHead>

        <TableBody>
          { data.map((element: RuleVeto, j: number) =>
            (
              <TableRow border key={j} fullWidth={calculateFullWidth(cols)} striped>
                { cols.map((el: TableHeading, i: number) => {

                  // @ts-ignore
                  if (el.id === 'status') {
                    switch (element[el.id]) {
                      case 'active':
                        return <TD border theme={'success'} el={el} key={i}>{ element[el.id] }</TD>
                      case 'deactivated':
                        return <TD border theme={'muted'} el={el} key={i}>{ element[el.id] }</TD>
                      case 'expired':
                        return <TD border theme={'danger'} el={el} key={i}>{ element[el.id] }</TD>
                      default:
                        return <TD border theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                    }
                  }

                  if (el.id === 'ruleId') {
                    return <TD border link={'/'} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                  }

                  // @ts-ignore
                  return <TD border interactionText={'Edit'} theme={el.theme} el={el} key={i}>{ element[el.id] }</TD>
                })}
              </TableRow>
            )
          )}
        </TableBody>
      </Grid>

      <Drawer drawerTitle={'Setup columns'} showDrawer={showDrawerColumns} setShowDrawer={setShowDrawerColumns}>
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
